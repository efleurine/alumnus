import log from './libs/logger'

const express = require('express')

const port = parseInt(process.env.PORT, 10) || 3000


module.exports = function Server(app) {
  const server = express()
  const handle = app.getRequestHandler()

  // no custom routes for now
  server.get('*', (req, res) => handle(req, res))

  server.listen(port, (err) => {
    if (err) throw err
    log(`> Ready on http://localhost:${port}`)
  })
}
