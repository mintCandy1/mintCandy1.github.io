import { defineUserConfig } from "vuepress";
import { Page } from "@vuepress/core";
import { searchPlugin } from "@vuepress/plugin-search";
import pagePlugin from "./plugins/page";
import leoTheme from "./theme";

export default defineUserConfig({
  base: "/",

  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: `/img/logo/favicon-16x16.png`
      }
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: `/img/logo/favicon-32x32.png`
      }
    ],
    ["link", { rel: "manifest", href: "/manifest.webmanifest" }],
    ["meta", { name: "application-name", content: "mint candy" }],
    ["meta", { name: "apple-mobile-web-app-title", content: "mint candy" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" }
    ],
    [
      "link",
      { rel: "apple-touch-icon", href: `/img/logo/apple-touch-icon.png` }
    ],
    ["meta", { name: "theme-color", content: "#377bb5" }],
    ["meta", { name: "msapplication-TileColor", content: "#377bb5" }],
    ["meta", { name: "referrer", content: "no-referrer" }]
  ],


  title: "mintcandy",
  description: "mintcandy's blog",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "mintcandy",
      description: "薄荷糖的博客",
    },
  },
  theme: leoTheme,

  plugins: [
    pagePlugin(),
    searchPlugin({
      locales: {
        "/": {
          placeholder: "Search",
        },
      },
      maxSuggestions: 10,
      isSearchable: (page: Page) => !["Tags", "Links", "HomePage"].includes(page.frontmatter.layout ? page.frontmatter.layout : "layout"),
    }),
  ],
});
