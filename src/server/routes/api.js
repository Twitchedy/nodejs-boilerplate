import express from 'express'
import config from '~/server/config/config'

const router = express.Router()

// API routes for the app.
// https://expressjs.com/en/guide/routing.html#express-router

// Authenticate if not using a local environment.
router.use((req, res, next) => {
    let authenticated = true
    if (authenticated) {
        next()
    } else {
        res.status(403).send('Forbidden')
    }
})

// Get app data.
// Route: '/api/app'
router.get('/app', (req, res) => {
    res.json({
        name: config.app.name
    })
})

module.exports = router
