"use no memo";
const DEFAULT_PAGE_THEME = {
  breadcrumb: true,
  collapsed: void 0,
  footer: true,
  layout: "default",
  navbar: true,
  pagination: true,
  sidebar: true,
  timestamp: true,
  toc: true,
  typesetting: "default",
};
function extendMeta(_meta = {}, fallback, metadata = {}) {
  const theme = {
    ...fallback.theme,
    ..._meta.theme,
    ...metadata.theme,
  };
  return {
    ...fallback,
    ..._meta,
    display: metadata.display || _meta.display || fallback.display,
    theme,
  };
}
function findFirstRoute(items) {
  for (const item of items) {
    if (item.route) return item.route;
    if (item.children) {
      const route = findFirstRoute(item.children);
      if (route) return route;
    }
  }
}
function normalizePages({
  list,
  route,
  docsRoot = "",
  pageThemeContext = DEFAULT_PAGE_THEME,
}) {
  const underCurrentDocsRoot = route.startsWith(docsRoot);
  const directories = [];
  const docsDirectories = [];
  const flatDocsDirectories = [];
  const topLevelNavbarItems = [];
  const firstItem = list[0];
  const meta = "data" in firstItem ? firstItem.data : {};
  const items = "data" in firstItem ? list.slice(1) : list;
  const fallbackMeta = meta["*"] || {};
  let activeType = fallbackMeta.type;
  let activeIndex = 0;
  let activeThemeContext = {
    ...pageThemeContext,
    ...fallbackMeta.theme,
  };
  let activePath = [];
  for (const currentItem of items) {
    const extendedMeta = extendMeta(
      meta[currentItem.name],
      fallbackMeta,
      currentItem.frontMatter
    );
    const { display, type = "doc" } = extendedMeta;
    const extendedPageThemeContext = {
      ...pageThemeContext,
      ...extendedMeta.theme,
    };
    const normalizedChildren =
      "children" in currentItem &&
      normalizePages({
        list: currentItem.children,
        route,
        docsRoot:
          type === "page" || type === "menu" ? currentItem.route : docsRoot,
        underCurrentDocsRoot,
        pageThemeContext: extendedPageThemeContext,
      });
    const getItem = () => ({
      ...currentItem,
      type,
      ...("title" in currentItem && {
        title: currentItem.title,
      }),
      ...(display && {
        display,
      }),
      ...(normalizedChildren && {
        children: [],
      }),
    });
    const item = getItem();
    const docsItem = getItem();
    if ("children" in docsItem) {
      const { collapsed } = extendedMeta.theme;
      if (typeof collapsed === "boolean") {
        docsItem.theme = {
          collapsed,
        };
      }
    }
    const pageItem = getItem();
    docsItem.isUnderCurrentDocsTree = underCurrentDocsRoot;
    if (type === "separator") {
      item.isUnderCurrentDocsTree = underCurrentDocsRoot;
    }
    if (currentItem.route === route) {
      activePath = [item];
      activeType = type;
      activeThemeContext = {
        ...activeThemeContext,
        ...extendedPageThemeContext,
      };
      switch (type) {
        case "page":
        case "menu":
          activeIndex = topLevelNavbarItems.length;
          break;
        case "doc":
          activeIndex = flatDocsDirectories.length;
      }
    }
    if (normalizedChildren) {
      if (
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- fixme
        normalizedChildren.activeIndex !== void 0 &&
        normalizedChildren.activeType !== void 0
      ) {
        activeThemeContext = normalizedChildren.activeThemeContext;
        activeType = normalizedChildren.activeType;
        activePath = [
          item,
          // Do not include folder which shows only his children
          ...normalizedChildren.activePath.filter(
            (item2) => item2.display !== "children"
          ),
        ];
        switch (activeType) {
          case "page":
          case "menu":
            activeIndex =
              topLevelNavbarItems.length + normalizedChildren.activeIndex;
            break;
          case "doc":
            activeIndex =
              flatDocsDirectories.length + normalizedChildren.activeIndex;
            break;
        }
        if ("frontMatter" in currentItem && type === "doc") {
          activeIndex++;
        }
      }
      switch (type) {
        case "page":
        case "menu":
          pageItem.children.push(...normalizedChildren.directories);
          docsDirectories.push(...normalizedChildren.docsDirectories);
          if (normalizedChildren.flatDocsDirectories.length) {
            const route2 = findFirstRoute(
              normalizedChildren.flatDocsDirectories
            );
            if (route2) pageItem.firstChildRoute = route2;
            topLevelNavbarItems.push(pageItem);
          } else if ("frontMatter" in pageItem) {
            topLevelNavbarItems.push(pageItem);
          }
          break;
        case "doc":
          docsItem.children.push(...normalizedChildren.docsDirectories);
          if ("frontMatter" in item && display !== "children") {
            flatDocsDirectories.push(docsItem);
          }
      }
      flatDocsDirectories.push(...normalizedChildren.flatDocsDirectories);
      item.children.push(...normalizedChildren.directories);
    } else {
      switch (type) {
        case "page":
        case "menu":
          topLevelNavbarItems.push(pageItem);
          break;
        case "doc": {
          const withHrefProp = "href" in item;
          if (!withHrefProp) {
            flatDocsDirectories.push(docsItem);
          }
        }
      }
    }
    if (type === "doc" && display === "children") {
      if (docsItem.children) {
        directories.push(...docsItem.children);
        docsDirectories.push(...docsItem.children);
      }
    } else {
      directories.push(item);
    }
    switch (type) {
      case "page":
      case "menu":
        docsDirectories.push(pageItem);
        break;
      case "doc":
        if (display !== "children") {
          docsDirectories.push(docsItem);
        }
        break;
      case "separator":
        docsDirectories.push(item);
    }
  }
  const activeMetadata = activePath.at(-1)?.frontMatter;
  const result = {
    activeType,
    activeIndex,
    activeThemeContext,
    activeMetadata,
    activePath,
    directories,
    docsDirectories: docsDirectories.filter(
      (item) => item.isUnderCurrentDocsTree
    ),
    flatDocsDirectories,
    topLevelNavbarItems,
  };
  return result;
}
export { normalizePages };
