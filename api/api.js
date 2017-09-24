// Well setup the express server here
const morgan = require('morgan')

const api = require('express')()

api.use(morgan('combined'))

module.exports = api
