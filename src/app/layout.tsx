import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import React from "react";
import "./globals.css";
import Link from "next/link";

export const metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
};

const banner = (
  <Banner storageKey="looking-for-job">
    <Link
      href="https://emsquared.me"
      target="_blank"
      rel="noreferrer"
      className="x:focus-visible:nextra-focus x:text-primary-600 x:underline x:hover:no-underline x:decoration-from-font x:[text-underline-position:from-font]"
    >
      EMSQUARED.ME
    </Link>{" "}
    est à l'écoute d'opportunités !
  </Banner>
);
const navbar = <Navbar logo={<b>Tranchons & Traquons</b>} />;
const footer = (
  <Footer>
    <div className="mx-auto">
      <div className="text-center text-sm mx-auto">
        CC BY-SA 4.0 |{" "}
        <Link
          href="https://emsquared.me"
          target="_blank"
          rel="noreferrer"
          className="x:focus-visible:nextra-focus x:text-primary-600 x:underline x:hover:no-underline x:decoration-from-font x:[text-underline-position:from-font]"
        >
          Maxime « Em-squared » Moraine
        </Link>
      </div>
      <div className="text-center text-sm mx-auto">
        <span className="font-semibold">
          <em>Tranchons & Traquons</em>
        </span>{" "}
        est un jeu de Kobayashi
      </div>
    </div>
  </Footer>
);

export default async function RootLayout({ children }) {
  return (
    <html lang="fr" dir="ltr" suppressHydrationWarning>
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/em-squared/tranchons-et-traquons"
          footer={footer}
          editLink="Éditer cette page"
          feedback={{ content: "Une question ?" }}
          toc={{ backToTop: "Haut de page", title: "Sur cette page" }}
          themeSwitch={{
            dark: "Sombre",
            light: "Clair",
            system: "Système",
          }}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
