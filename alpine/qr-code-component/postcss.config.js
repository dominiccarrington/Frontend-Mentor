module.exports = (ctx) => ({
    plugins: [
        require('postcss-font-magician')({
            foundries: ['google']
        }),
        require('postcss-media-minmax')(),
        require('postcss-nested')(),
        require('autoprefixer')(),
    ]
});