export default {
    mode: 'spa',
    target: 'static',
    head: {
        title: "L U K A",
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: "Luka Salevic, or Sensanaty, is a freelance fullstack web developer skilled in Rails, Vue, React, and much more." },
            { name: 'msapplication-TileColor', content: 'da532c' },
            { name: 'theme-color', content: '#ffca3a' }
        ],
        link: [
            { rel: 'icon', type: 'image/png', href: '/favicon-16x16.png' },
            { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png' },
            { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
            { rel: 'manifest', href: '/site.webmanifest' },
            { rel: 'mask-icon', href: '/safari-pinned-tab.png', color: '#5bbad5' }
        ]
    },
    css: [
        '@/assets/styles/normalize.css',
        '@/assets/scss/base.scss'
    ],
    styleResources: {
        scss: ['@/assets/scss/variables/*.scss']
    },
    plugins: [],
    components: true,
    buildModules: [
        '@nuxtjs/style-resources'
    ],
    modules: [
        '@nuxt/content',
        'nuxt-svg-loader'
    ],
    content: {
        liveEdit: false,
        markdown: {
            prism: {
                theme: 'prism-themes/themes/prism-material-dark.css'
            }
        }
    },
    build: {},
    loading: {
        color: "#F7CA3B",
        height: "3px"
    },
    loadingIndicator: {
        name: "wandering-cubes",
        color: "#F7CA3B",
        background: "#272727"
    }
}
