module.exports = {
    configureWebpack: {
        resolve: {
            // 取别名
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views'
            }
        }
    },
  lintOnSave: false
}
