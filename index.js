const fs = require('fs')
const routes = require('./routes')
const dev = process.env.NODE_ENV !== 'production'
const port = process.env.BLOG_PORT || process.env.PORT || 3004
const fastify = require('fastify')
const Next = require('next')
const app = Next({ dev })
const handler = routes.getRequestHandler(app)
const babel = require('babel-core')

app.prepare()
  .then(() => {
    const server = fastify()

    server.get('/samples/sem-ssr/react-puro/app.js', (req, res) => {
      res.type('text/plain; charset=utf-8').code(200)
      const path = req.params['*']
      // console.log('heeere', req.params)
      return fs.readFile(`${__dirname}/samples/${path}/index.html`, 'utf8', (e, content) => {
        return res.send(babel.transform(content, { presets: ["next/babel", "react"] }))
      })
    })

    server.get('/samples/*', (req, res) => {
      res.type('text/html').code(200)
      const path = req.params['*']
      return fs.readFile(`${__dirname}/samples/${path}/index.html`, 'utf8', (e, content) => {
        return res.send(content)
      })
    })

    server.get('/*', (req, res) => {
      return handler(req.req, res.res)
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })
