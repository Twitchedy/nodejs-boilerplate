import express from 'express'
import routes from '~/server/routes'
import environment from '~/server/config/environment'
import bodyParser from 'body-parser'

// Express app.
const app = express()

// Print env.
console.log('Environment: "' + environment + '".')

// Port.
const port = process.env.PORT || 8080

// Parse application.
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))

// Routes.
routes(app)

// Run app.
app.listen(port, '0.0.0.0', () => console.log(`Express server listening on port ${port}.`))
