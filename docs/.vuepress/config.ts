
import {defineUserConfig, viteBundler} from "vuepress";
import { gungnirTheme, i18n } from "vuepress-theme-gungnir";
import { navbar, sidebar } from "./configs";
import {searchPlugin} from "@vuepress/plugin-search";

const isProd = process.env.NODE_ENV === "production";


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

  // site-level locales config
  lang: 'zh-CN',
  title: 'mint candy',
  description: '薄荷糖的博客',


  // 打包工具vite
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),

  // configure default theme
  theme: gungnirTheme({
    repo: "mintCandy1/mintCandy1.github.io",
    docsDir: "docs",

    hitokoto: "https://v1.hitokoto.cn?c=i", // enable hitokoto (一言) or not?

    // personal information
    personalInfo: {
      name: "薄荷糖",
      avatar: "/img/avatar.jpg",
      description: "mint candy's blog",
      sns: {
        github: "mintCandy1",
        // linkedin: "xiaohan-zou-55bba0160",
        // facebook: "renovamen.zou",
        // twitter: "renovamen_zxh",
        // zhihu: "chao-neng-gui-su",
        email: "haitaobu@qq.com",
        // rss: "/rss.xml",
        // customized sns
        bilibili: {
          icon: "ri-bilibili-line",
          link: "https://space.bilibili.com/293049156"
        }
      }
    },

    // header images on home page
    homeHeaderImages: [
      {
        path: "/img/home-bg/1.jpg",
        mask: "rgba(40, 57, 101, .4)"
      },
      {
        path: "/img/home-bg/2.jpg",
        mask: "rgb(251, 170, 152, .2)"
      },
      {
        path: "/img/home-bg/3.jpg",
        mask: "rgba(68, 74, 83, .1)"
      },
      {
        path: "/img/home-bg/4.jpg",
        mask: "rgba(19, 75, 50, .2)"
      }
    ],

    // other pages
    pages: {
      tags: {
        subtitle: "Black Sheep Wall",
        bgImage: {
          path: "/img/pages/tags.jpg",
          mask: "rgba(211, 136, 37, .5)"
        }
      },
      links: {
        subtitle:
          "When you are looking at the stars, please put the brightest star shining night sky as my soul.",
        bgImage: {
          path: "/img/pages/links.jpg",
          mask: "rgba(64, 118, 190, 0.5)"
        }
      }
    },

    // theme-level locales config
    navbar: navbar.zh,
    // sidebar
    sidebar: sidebar.zh,

    themePlugins: {
      // only enable git plugin in production mode
      git: isProd,
      katex: true,
      mermaid: true,
      chartjs: true,
      //评论系统使用了基于 GitHub Discussions 的 Giscus。
      // giscus: {
      //   repo: "This-is-an-Apple/gitalk-comments",
      //   repoId: "MDEwOlJlcG9zaXRvcnkyMTA1MjQyMTQ=",
      //   category: "Announcements",
      //   categoryId: "DIC_kwDODIxYNs4CAO1u",
      //   lazyLoad: true
      // },
      mdPlus: {
        all: true
      },
      //站点统计：谷歌统计（基于插件 plugin-google-analytics）
      // ga: "G-EE8M2S3MPB",
      //站点统计：百度统计（基于插件 plugin-baidu-tongji）
      // ba: "10b7bc420625758a319d6b23aed4700f",
      // rss: {
      //   siteURL: "https://v2.vuepress-theme-gungnir.vercel.app",
      //   copyright: "Renovamen 2018-2022"
      // },
      // pwa: true,
      search: false // use @vuepress/plugin-docsearch instead
    },

    footer: `
      &copy; <a href="https://github.com/mintCandy1" target="_blank">薄荷糖</a> 2024-2028
      <br>
      Powered by <a href="https://v2.vuepress.vuejs.org" target="_blank">VuePress</a> &
      <a href="https://github.com/Renovamen/vuepress-theme-gungnir" target="_blank">Gungnir</a>
    `
  }),

  // markdown: {
  //   headers: {
  //     level: [2,3,4]
  //   }
  // },
  plugins: [
    searchPlugin({
      maxSuggestions: 10,
      isSearchable: (page) => !["Tags", "Links", "HomePage"].includes(page.frontmatter.layout)
    })
  ],

  // plugins: [
  //   docsearchPlugin({
  //     appId: "3DDLGP0IG4",
  //     apiKey: "6556adaa82b31485309b440a525f264a",
  //     indexName: "v2-vuepress-theme-gungnir",
  //     locales: {
  //       "/zh/": {
  //         placeholder: "搜索文档",
  //         translations: {
  //           button: {
  //             buttonText: "搜索文档",
  //             buttonAriaLabel: "搜索文档"
  //           },
  //           modal: {
  //             searchBox: {
  //               resetButtonTitle: "清除查询条件",
  //               resetButtonAriaLabel: "清除查询条件",
  //               cancelButtonText: "取消",
  //               cancelButtonAriaLabel: "取消"
  //             },
  //             startScreen: {
  //               recentSearchesTitle: "搜索历史",
  //               noRecentSearchesText: "没有搜索历史",
  //               saveRecentSearchButtonTitle: "保存至搜索历史",
  //               removeRecentSearchButtonTitle: "从搜索历史中移除",
  //               favoriteSearchesTitle: "收藏",
  //               removeFavoriteSearchButtonTitle: "从收藏中移除"
  //             },
  //             errorScreen: {
  //               titleText: "无法获取结果",
  //               helpText: "你可能需要检查你的网络连接"
  //             },
  //             footer: {
  //               selectText: "选择",
  //               navigateText: "切换",
  //               closeText: "关闭",
  //               searchByText: "搜索提供者"
  //             },
  //             noResultsScreen: {
  //               noResultsText: "无法找到相关结果",
  //               suggestedQueryText: "你可以尝试查询",
  //               reportMissingResultsText: "你认为该查询应该有结果？",
  //               reportMissingResultsLinkText: "点击反馈"
  //             }
  //           }
  //         }
  //       }
  //     }
  //   })
  // ]
});
