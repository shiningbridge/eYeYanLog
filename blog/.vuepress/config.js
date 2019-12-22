module.exports = {
  title: '我的VuePress Blog Example',
  description: 'This is a blog example built by VuePress',
  theme: '@vuepress/theme-blog', // OR shortcut: @vuepress/blog
  // theme: 'ktquez', // OR shortcut: @vuepress/ktquez
  themeConfig: {
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#modifyblogpluginoptions
     */
    modifyBlogPluginOptions(blogPluginOptions) {
      return blogPluginOptions
    },
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#nav
     */
    nav: [
      {
        text: 'Blog',
        link: '/',
      },
      {
        text: 'Tags',
        link: '/tag/',
      },
    ],
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#footer
     */
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/ulivz',
        },
        {
          type: 'twitter',
          link: 'https://twitter.com/_ulivz',
        },
      ],
      copyright: [
        {
          text: 'Privacy Policy',
          link: 'https://policies.google.com/privacy?hl=en-US',
        },
        {
          text: 'MIT Licensed | Copyright © 2018-present Vue.js',
          link: '',
        },
      ],
    },
  },
  markdown: {
    // markdown-it-anchor 的选项
    anchor: { permalink: false },
    // markdown-it-toc 的选项
    toc: { includeLevel: [1, 2] },
    extendMarkdown: md => {
      md.set({ breaks: true })
      // md.use(require('markdown-it-plantuml'),{server: 'http://192.168.99.100:8080'})
      md.use(require('markdown-it-plantuml'),options)
    }
  },
}
const options = {
  openMarker: '```plantuml',
  closeMarker: '```',
  // imageFormat: 'png',
  server: 'http://192.168.99.100:8080',
  // server: 'http://www.plantuml.com/plantuml',
}