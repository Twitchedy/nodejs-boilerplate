import apiRoutes from '~/server/routes/api'
import environment from '~/server/config/environment'
import express from 'express'
import path from 'path'

const publicPath = path.join(__dirname, '../../../public')

module.exports = (app) => {
    // Route: '/api/*'.
    app.use('/api', apiRoutes)

    // Route: '/public/*'.
    app.use('/public', express.static(publicPath))

    // Fall through to SPA.
    // Route: '*'.
    app.get('*', (req, res, next) => {
        res.sendFile(path.join(publicPath, 'index.html'))
    })
}
