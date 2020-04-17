module.exports = {
  title: '一个前端小青年的学习笔记',
  description: 'good good study, day day up',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'vue源码解析', link: '/vue源码解析/' },
      { text: 'javaScript', link: '/javaScript/' },
      { text: '数据结构与算法', link: '/dataStructureAndAlgorithm/'},
    ],
    sidebar: {
      '/vue源码解析/': [
        '',
        'CREATEELEMENT'
      ],
      '/javaScript/': [
        '',
        'TALKABOUT',
        'PROTOTYPE',
        '模块化'
      ],
      '/dataStructureAndAlgorithm/': [
        '',
        'DATASTRUCT',

      ]
    }
  },
}