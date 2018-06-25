const { createServer } = require('http')
const next = require('next')
const routes = require('./routes')

const dev = process.env.NODE_ENV !== 'production'
const port = process.env.BLOG_PORT || process.env.PORT || 3004
const app = next({ dev })
const handler = routes.getRequestHandler(app)

openServer()

async function openServer () {
  await app.prepare()
  createServer(handler).listen(port, (err) => {
    if (err) throw err
    process.stdout.write(`Server open on ${port}${'\n'}`)
  })
}
