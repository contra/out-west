const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const run = async () => {
  await app.prepare()
  const api = express()

  api.get('/leaderboard', (req, res) => {
    res.json([])
  })
  api.get('/players', (req, res) => {
    res.json([])
  })
  api.get('/me', (req, res) => {
    res.json({})
  })
  api.post('/me', (req, res) => {
    res.json({})
  })

  api.get('*', handle) // SPA magic

  await new Promise((resolve, reject) => {
    api.listen(3000, (err) => err ? reject(err) : resolve)
  })
  console.log('> Ready on http://localhost:3000')
}

run().catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})
