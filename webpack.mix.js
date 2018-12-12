let mix = require('laravel-mix')

/**
 * A mix extension that runs eslint as part of the build process.
 */
class Eslint {
    dependencies () {
        this.requiresReload = `
            Dependencies have been installed. Please run "npm run dev" again.
        `

        return ['eslint', 'eslint-loader']
    }

    register (options = {}) {
        this.options = options
    }

    webpackRules () {
        return {
            enforce: 'pre',
            test: /\.(vue|js)$/,
            exclude: /node_modules/,
            loader: 'eslint-loader',
            options: this.options
        }
    }
}
mix.extend('eslint', new Eslint())

/**
 * Compile assets.
 */
mix.js('src/client/js/app.js', 'public').eslint({
    fix: false,
    cache: false
})
    .sass('src/client/scss/app.scss', 'public')

mix.webpackConfig({
    devtool: 'source-map'
})
    .sourceMaps()
