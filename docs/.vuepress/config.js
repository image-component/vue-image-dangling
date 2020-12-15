// More: https://vuepress.vuejs.org/config/

const title = 'vue-image-dangling';

module.exports = {
  dest: './docs-dist/',
  base: `/${title}/`,     // For GitHub Pages
  title,
  description: 'A Vue image component. Dangling interaction effect.',
  port: 8888,
  head: [
    ['link', { rel: 'icon', href: `https://avatars1.githubusercontent.com/u/75532006?s=200&v=4` }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
  ],
  themeConfig: {
    nav: [
      { text: 'GitHub', link: 'https://github.com/image-component/vue-image-dangling' },
    ],
    sidebar: {
      '/': [
        '',
        'changelog',
        'demo'
      ]
    },
    smoothScroll: true,
  },
}
