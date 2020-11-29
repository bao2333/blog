module.exports = {
  title: '老鸡腿的学习笔记',
  description: 'good good study, day day up',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'vue源码解析', link: '/vue源码解析/' },
      { text: 'javaScript', link: '/javaScript/' },
      { text: 'TypeScript', link: '/TypeScript/' },
      { text: '数据结构与算法', link: '/dataStructureAndAlgorithm/'},
    ],
    sidebar: {
      '/vue源码解析/': [
        '',
        'CREATEELEMENT',
        'MVVM'
      ],
      '/javaScript/': [
        '',
        'TALKABOUT',
        'PROTOTYPE',
        '模块化'
      ],
      '/TypeScript/': [
        '',
      ],
      '/dataStructureAndAlgorithm/': [
        '',
        'DATASTRUCT',
      ]
    }
  },
}