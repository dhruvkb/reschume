const base = "/reschume/";

export default {
  title: "Réschumé",
  description: "Réschumé is a comprehensive schema for documenting résumés.",

  lang: "en-US",
  base,

  head: [
    ["link", { rel: "icon", type: "image/png", href: `${base}favicon.png` }],
  ],

  themeConfig: {
    logo: "/logo.svg", // automatically uses `base`
    nav: [
      { text: "Schemas", link: "/schemas" },
      { text: "npm ↗", link: "https://www.npmjs.com/package/reschume" },
      { text: "GitHub ↗", link: "https://github.com/dhruvkb/reschume" },
    ],
    footer: {
      message: "Réschumé is 100% open-source.",
    },
  },
};
