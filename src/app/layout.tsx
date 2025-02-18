import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import React from "react";
import "./globals.css";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  description: "Règles du jeu pour le jeu de rôle Tranchons & Traquons",
  metadataBase: new URL("https://tranchons-et-traquons.vercel.app/"),
  keywords: ["Tranchons & Traquons", "Tranchons et Traquons"],
  generator: "Next.js",
  applicationName: "Tranchons & Traquons",
  appleWebApp: {
    title: "Tranchons & Traquons",
  },
  title: {
    default: "Tranchons & Traquons – Règles en ligne",
    template: "%s | Tranchons & Traquons",
  },
  openGraph: {
    // https://github.com/vercel/next.js/discussions/50189#discussioncomment-10826632
    url: "./",
    siteName: "Tranchons & Traquons",
    locale: "fr_FR",
    type: "website",
  },
  other: {
    "msapplication-TileColor": "#fff",
  },
  twitter: {
    site: "https://tranchons-et-traquons.vercel.app/",
  },
  alternates: {
    // https://github.com/vercel/next.js/discussions/50189#discussioncomment-10826632
    canonical: "./",
  },
};

const docsRepositoryBase =
  "https://github.com/em-squared/tranchons-et-traquons";

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
const navbar = (
  <Navbar logo={<b>Tranchons & Traquons</b>} projectLink={docsRepositoryBase} />
);
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
          docsRepositoryBase={docsRepositoryBase}
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
