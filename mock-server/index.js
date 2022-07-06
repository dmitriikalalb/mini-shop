const jsonServer = require('json-server')
const server = jsonServer.create()
const middlewares = jsonServer.defaults()
const router = jsonServer.router('mock-server/db.json')

server.use(middlewares)
server.use(router)

export default server
