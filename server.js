//const PORT = process.env.PORT || 8080
const express = require('express')
const app = express()
const path = require('path')

const APP_PORT = process.env.APP_PORT ||8080

const server = app.listen(APP_PORT, () => {
  console.log(`App running on port ${APP_PORT}`)
})

const {Server} = require('socket.io')
io = new Server(server)

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index')
})

io.on('connection', (socket) => {
  console.log('a user connected')
})