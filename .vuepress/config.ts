import { defineConfig } from "vuepress/config";
import navbar from "./navbar";
import sidebar from "./sidebar";
import footer from "./footer";
import extraSideBar from "./extraSideBar";

const author = "安得广厦千万间";
const domain = "https://codefather.cn";
const tags = ["程序员", "编程", "计算机", "PC DIY", "客制化键盘"];

export default defineConfig({
  title: "安得广厦千万间",
  description: "我的博客，用于记录整理各类知识、想法、观点",
  head: [
    // 站点图标
    ["link", { rel: "icon", href: "/favicon.ico" }],
    // SEO
    [
      "meta",
      {
        name: "keywords",
        content:
          "编程学习路线, Java, 编程导航, 后端, 前端, 开发, 编程分享, 电脑DIY, ITX, 客制化键盘",
      },
    ],
    // 百度统计
    [
      "script",
      {},
      `
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?2675818a983a3131404cee835018f016";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();
      `,
    ],
  ],
  // permalink: "/:slug",

  // 监听文件变化，热更新
  extraWatchFiles: [".vuepress/*.ts", ".vuepress/sidebars/*/*"],
  markdown: {
    // 开启代码块的行号
    lineNumbers: true,
    // 支持 4 级以上的标题渲染
    extractHeaders: ["h2", "h3", "h4", "h5", "h6"],
  },
  // @ts-ignore
  plugins: [
    ["@vuepress/back-to-top"],
    // Google 分析
    [
      "@vuepress/google-analytics",
      {
        ga: "GTM-WVS9HM6W", // 补充自己的谷歌分析 ID，比如 UA-00000000-0
      },
    ],
    ["@vuepress/medium-zoom"],
    // https://github.com/lorisleiva/vuepress-plugin-seo
    [
      "seo",
      {
        siteTitle: (_, $site) => $site.title,
        title: ($page) => $page.title,
        description: ($page) =>
          $page.frontmatter.description || $page.description,
        author: (_, $site) => $site.themeConfig.author || author,
        tags: ($page) => $page.frontmatter.tags || tags,
        type: ($page) => "article",
        url: (_, $site, path) =>
          ($site.themeConfig.domain || domain || "") + path,
        image: ($page, $site) =>
          $page.frontmatter.image &&
          (($site.themeConfig.domain &&
            !$page.frontmatter.image.startsWith("http")) ||
            "") + $page.frontmatter.image,
        publishedAt: ($page) =>
          $page.frontmatter.date && new Date($page.frontmatter.date),
        modifiedAt: ($page) => $page.lastUpdated && new Date($page.lastUpdated),
      },
    ],
    // https://github.com/ekoeryanto/vuepress-plugin-sitemap
    [
      "sitemap",
      {
        hostname: domain,
      },
    ],
    // https://github.com/IOriens/vuepress-plugin-baidu-autopush
    ["vuepress-plugin-baidu-autopush"],
    // https://github.com/zq99299/vuepress-plugin/tree/master/vuepress-plugin-tags
    ["vuepress-plugin-tags"],
    // https://github.com/znicholasbrown/vuepress-plugin-code-copy
    [
      "vuepress-plugin-code-copy",
      {
        successText: "代码已复制",
      },
    ],
    // https://github.com/webmasterish/vuepress-plugin-feed
    [
      "feed",
      {
        canonical_base: domain,
        count: 10000,
        // 需要自动推送的文档目录
        posts_directories: [],
      },
    ],
    // https://github.com/tolking/vuepress-plugin-img-lazy
    ["img-lazy"],
    // 进度条
    // https://github.com/tolking/vuepress-plugin-reading-progress
    ["reading-progress", {
      readingDir: /[^/]+$/
    }],
    // 建议阅读时间
    // https://github.com/darrenjennings/vuepress-plugin-reading-time
    ['vuepress-plugin-reading-time'],
    // 分享插件
    // https://github.com/ntnyq/vuepress-plugin-social-share/blob/v1/docs/guide/README.md
    ['social-share', {
      networks: ['qq', 'wechat', 'twitter'],
    }],
    // 评论区
    // https://xxholly32.github.io/vuepress-plugin-gitalk-maker/guide/#%E7%94%A8%E6%B3%95
    ['gitalk-maker', {
      gitalkConfig: {
        clientID: 'Ov23ctuxNxQU3HQDEW8K',
        clientSecret: '473724b1a1a75a3ede07928dd09135a6adc999a1',
        repo: 'wml107.github.io',
        owner: 'wml107',
        admin: ['wml107'],
        distractionFreeMode: false, // Facebook-like distraction free mode
        id: 'Blog Comment',
      },
    },]
  ],
  // 主题配置
  themeConfig: {
    logo: "/logo.png",
    nav: navbar,
    sidebar,
    lastUpdated: "最近更新",

    // GitHub 仓库位置
    repo: "wml107",
    docsBranch: "master",

    // 编辑链接
    editLinks: false,
    //editLinkText: "完善页面",

    // @ts-ignore
    // 底部版权信息
    footer,
    // 额外右侧边栏
    extraSideBar,
  },
});
