const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })

const server = require('./api')(app)

app.prepare()
  .then(server)
