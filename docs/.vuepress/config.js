module.exports = {
    base: "/Blog/", //目录根地址，应与Github仓库名字相同
    title: '知码学院6666',
    description: '君哥带你上王者',
    // dest: './dist',
    port: '7777',
    head: [
        ['link', { rel: 'icon', href: '/logo1.jpg' }]
    ],
    markdown: {
        lineNumbers: false
    },
    //theme: 'reco',
    themeConfig: {
        // type: 'blog',
        nav: require('./nav'),
        sidebar:  require('./sidebar'),
        //sidebar: 'auto',
        sidebarDepth: 2,
        searchMaxSuggestoins: 10,
        serviceWorker: {
            updatePopup: {
                message: "有新的内容.",
                buttonText: '更新'
            }
        },
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: "https://github.com/FC0511/Blog",
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: "Github",
        // 以下为可选的编辑链接选项
        // 假如文档不是放在仓库的根目录下：
        docsDir: "docs",
        // 假如文档放在一个特定的分支下：
        docsBranch: "master",
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: "在 Github 上编辑此页",
        smoothScroll: true, //页面滚动效果
        lastUpdated: "最后更新" // string | boolean
    },
    plugins: [
        "@vuepress/medium-zoom", //zooming images like Medium（页面弹框居中显示）
        "@vuepress/nprogress", //网页加载进度条
        "@vuepress/back-to-top", //返回页面顶部按钮
        "@vuepress/nprogress", //提示加载进度
        "reading-progress", //提示阅读进度
        "vuepress-copycode"
    ]
}





