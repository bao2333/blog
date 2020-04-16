module.exports = {
    base: '/',
    title: '前端总结',
    description: '前端总结',
    head: [
        ['link', {
            rel: 'icon',
            href: '/logo.png'
        }]
    ],
    host: '192.168.2.124',
    post: 8080,
    dest: '_site',
    cache: true,
    themeConfig: {
        navbar: true,
        locales: {
            '/': {
                nav: [{
                    text: 'vue源码解析',
                    link: '/vue/'
                }, {
                    text: 'javaScript',
                    link: '/javaScript/'
                }, {
                    text: '数据结构与算法',
                    link: '/data/'
                }],
                sidebar: {
                    '/vue/': [
                        ['', '源码分析',]
                    ],
                    '/javaScript/': [
                        ['', '简介'],
                    ]
                }
            },
        }
    },
    markdown: {
        lineNumbers: true,
        anchor: {
            permalink: true,
            permalinkBefore: true,
            permalinkSymbol: '#'
        },
        externalLinks: {
            target: '_blank',
            rel: 'noopener noreferrer'
        },
        toc: {
            includeLevel: [2, 3]
        },
        plugins: []
    },
    editLinkText: '在 GitHub 上编辑此页',
    postcss: {
        plugins: [require('autoprefixer')]
    },
    stylus: {
        preferPathResolver: 'webpack'
    },
    scss: {},
    sass: {
        indentedSyntax: true
    },
    less: {},
    evergreen: false,
}