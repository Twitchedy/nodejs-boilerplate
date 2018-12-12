import fs from 'fs'
import path from 'path'
import environment from '~/server/config/environment'

let config = {
    dev: {
        app: {
            name: 'NodeJS Boilerplate (dev)',
            secret: 'xCiqgHPgVAuKm1xOsDo7bzetZFiZYN7ZrjxmcujO'
        }
    },
    prod: {
        app: {
            name: 'NodeJS Boilerplate',
            secret: 'xCiqgHPgVAuKm1xOsDo7bzetZFiZYN7ZrjxmcujO'
        }
    }
}

module.exports = config[environment]
