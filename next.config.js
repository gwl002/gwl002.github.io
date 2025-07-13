const isProd = process.env.NODE_ENV === 'production'


module.exports = {
    // assetPrefix: isProd ? config.CDN_URL : "",
    // basePath: config.IS_PREVIEW ? "/preview" : "",
    generateBuildId: async () => {
        return 'next-build'
    },
    output:'export',
    distDir: 'dist',
    typescript: {
        ignoreBuildErrors: true,
    },
}