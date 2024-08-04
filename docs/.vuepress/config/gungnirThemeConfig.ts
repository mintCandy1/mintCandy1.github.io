import { gungnirTheme } from "vuepress-theme-gungnir";
import { navbar } from "./index";
import { getAllDirsFiles } from "./sidebar/autoSidebar";
import path from "path-browserify";

const workspace = path.resolve(__dirname, "..");
let sidebarObject = getAllDirsFiles("notes", path.join(workspace, "./docs/notes"), [], ".md");

export const gungnirThemeOptions = gungnirTheme({
  editLink: false,
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
  // navbarTitle: "HOME",
  // 首页
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
      mask: "rgba(19, 75, 50, .2)"
    }
  ],
  pages: {
    // 标签页配置
    tags: {
      subtitle: "Black Sheep Wall",
      bgImage: {
        path: "/img/pages/tags.jpg",
        mask: "rgba(40, 57, 101, 0.4)",
        // mask: "rgba(211, 136, 37, .5)",
      },
    },
    // 链接页
    links: {
      subtitle: "When you are looking at the stars, please put the brightest star shining night sky as my soul.",
      bgImage: {
        path: "/img/pages/links.jpg",
        mask: "rgba(64, 118, 190, 0.5)",
      },
    },
  },
  sidebarDepth: 0,
  locales: {
    "/": {
      navbar: navbar.navbar,
      // sidebar: sidebar.sidebar,
      sidebar: sidebarObject,
    },
  },
  footer: `
      &copy; <a href="https://github.com/mintCandy1" target="_blank">薄荷糖</a> 2024-2028
      <br>
      Powered by <a href="https://v2.vuepress.vuejs.org" target="_blank">VuePress</a> &
      <a href="https://github.com/Renovamen/vuepress-theme-gungnir" target="_blank">Gungnir</a>
    `,

  // 导航栏搜索
  searchText: "Search",
  searchIcon: "bi-search",
  themePlugins: {
    search: false, // 取消自带的搜索
    katex: true, // 数学公式
    chartjs: {
      // JavaScript 图表库 Chart.js
      token: "chart",
    },
    mermaid: {
      token: "mermaid",
      theme: "default", // 默认："default"
      darkTheme: "dark", // 默认："dark"
    },
    mdPlus: {
      // all: true, // 全部启用（默认：false）
      footnote: true, // 脚注
      mark: true, // 高亮标记
      sub: true, // 下标
      sup: true, // 上标
    },
    container: {},
    //评论
    giscus: {
      repo: "mintCandy1/GitHub-Discussions",
      repoId: "R_kgDOMfC4Sw",
      category: "Announcements",
      categoryId: "DIC_kwDOMfC4S84ChY5w",
      lazyLoad: true
    },
  },
});
