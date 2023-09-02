const express = require('express')
const socket = require('socket.io')

const app = express()
const server = app.listen(3000)

app.use(express.static('public'))

const io = socket(server)

/* Bağlantı başarılıysa */
io.on('connection', (socket) => {
    console.log(socket.id)

    /* Chat dinleniyor */
    socket.on('chat', data => {
        io.sockets.emit('chat',data)
    })

    /* Bütün browser'lara yazıyor bilgisi gider. */
    socket.on('typing', data =>{
        socket.broadcast.emit('typing',data)
    })
}) 