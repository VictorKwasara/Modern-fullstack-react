import { createServer } from 'node:http'

const server = createServer((req, res) => {
  res.statusCode = 200
  res.end('Hello HTTP world!')
})

const host = 'localhost'
const port = 3000

server.listen(port, host, () => {
  console.log(`Serever listening on http://${host}:${port}`)
})
