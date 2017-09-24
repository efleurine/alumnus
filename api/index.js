const log = require('./libs/logger')
// const express = require('express')
const api = require('./api')

const port = parseInt(process.env.PORT, 10) || 3000


module.exports = function Server(app) {
  // const server = express()
  const handle = app.getRequestHandler()

  // no custom routes for now
  api.get('*', (req, res) => handle(req, res))

  api.listen(port, (err) => {
    if (err) throw err
    log(`> Ready on http://localhost:${port}`)
  })
}
