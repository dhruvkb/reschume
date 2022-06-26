const base = "/reschume/";

export default {
  title: "Réschumé",
  description: "A comprehensive schema for documenting résumés.",

  lang: "en-US",
  base,

  head: [
    ["link", { rel: "icon", type: "image/png", href: `${base}favicon.png` }],
  ],

  themeConfig: {
    logo: "/logo.svg", // automatically uses `base`
    nav: [
      { text: "Schemas", link: "/schemas" },
      { text: "GitHub ↗", link: "https://github.com/dhruvkb/reschume" },
    ],
    footer: {
      message: "Réschumé is 100% open-source.",
    },
  },
};
