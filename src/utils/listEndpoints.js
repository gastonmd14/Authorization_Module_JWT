var app = require('../../app')
const log = require('./eventLogger')
const expressListEndpoints = require('express-list-endpoints')

const endpoints = expressListEndpoints(app);

const list = () => {
    for (const el of endpoints) {
        log.info(`[${el.methods}] ${el.path}`)        
    }
}

module.exports = {
    list
};