const { searchPlugin } = require('@vuepress/plugin-search')

const { gungnirTheme } = require("vuepress-theme-gungnir");

module.exports = {
  lang: 'zh-CN',
  title: 'mint candy',
  description: '薄荷糖的博客',


  theme: gungnirTheme({
    //导航栏标题
    navbarTitle: "",
    personalInfo: {
      // 必须：名称，将在首页、移动端侧边栏和文章作者信息处显示
      name: "薄荷糖",
      // 必须：头像，将在首页和移动端侧边栏显示
      avatar: "/img/avatar.jpg",
      // 必须：个人简介，将在首页显示
      description: "吾尝终日而思矣，不如须臾之所学也",
      // sns: {
      //   email: "shouchengyu@outlook.com",
      // }
    },
    // header images on home page
    homeHeaderImages: [
      {
        path: "/img/home-bg/1.jpg",
        mask: "rgba(40, 57, 101, .4)"
      },
      // {
      //   path: "/img/home-bg/2.jpg",
      //   mask: "rgb(251, 170, 152, .2)"
      // },
      // {
      //   path: "/img/home-bg/3.jpg",
      //   mask: "rgba(68, 74, 83, .1)"
      // }
    ],
    navbar:[
      {
        text: "首页",
        link: "/",
        icon: "fa-fort-awesome"
      },
      {
        text: "标签",
        link: "/tags/",
        icon: "fa-tag"
      },
      {
        text: '笔记',
        link: '/note/',
        icon: 'ri-book-read-line'
      },
      {
        text: "链接",
        link: "/links/",
        icon: "fa-satellite-dish"
      },

      {
        text: "关于",
        link: "/about/",
        icon: "fa-paw"
      },

      // {
      //   text: '书签',
      //   link: '/docs/navigation/README.md',
      //   icon: 'md-bookmarkborder'
      // },
    ],
    hitokoto: true,
    themePlugins: {
      search: false,
      // giscus: {
      //   repo: "shoucy/shoucy.github.io",  // 必须，string，格式：user_name/repo_name
      //   repoId: "MDEwOlJlcG9zaXRvcnkzNjczOTM2NDA=",  // 必须，string，在 Giscus 官网上生成
      //   category: "giscus",  // 必须，string
      //   categoryId: "DIC_kwDOFeX7aM4CSQy0",  // 必须，string，在 Giscus 官网上生成
      //   mapping: "pathname",  // 可选，string，default="title"
      //   lazyLoad: false,  // 可选，boolean，default=false（如果设为 true，Giscus 的加载将延迟到用户滚动到评论容器附近）
      //   // crossorigin: "[crossorigin]",  // 可选，string，default="anonymous"
      //   // theme: "[light 模式主题]",  // 可选，string，default="light"
      //   // darkTheme: "[dark 模式主题]"  // 可选，string，default="dark_dimmed"
      // }
    },
    pages: {
      // 标签页配置
      tags: {
        // 可选：标签页副标题
        subtitle: '标签页',

        // 可选：标签页封面图路径和蒙版
        bgImage: {
          path: '/img/pages/tags.jpg',
          mask: 'rgba(211, 136, 37, .5)'
        }
      },

      // 链接页配置
      links: {
        // 可选：链接页副标题
        subtitle: '链接页',

        // 可选：链接页封面图路径和蒙版
        bgImage: {
          path: '/img/pages/links.jpg',
          mask: 'rgba(64, 118, 190, 0.5)'
        }
      }
    }
  }),

  plugins: [
    searchPlugin({
      maxSuggestions: 10,
      isSearchable: (page) => !["Tags", "Links", "HomePage"].includes(page.frontmatter.layout)
    })
  ],
}
