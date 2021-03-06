const path = require('path')
const http = require('http')
const express = require('express')
const socketIO = require('socket.io')

const {generateMessage, generateLocationMessage} = require('./utils/message')
const {isRealString, isUniqueUsername} = require('./utils/validation')
const {Users} = require('./utils/users')
const publicPath = path.join(__dirname, '../public')
const port = process.env.PORT || 3000
const app = express()
const server = http.createServer(app)
const io = socketIO(server)
const users = new Users()

app.use(express.static(publicPath))

//dropdown list of all current rooms

io.on('connection', (socket) => {
    io.emit('updateRoomList', users.getRoomList())

    socket.on('join', (params, callback) => {

        if (!isRealString(params.name) || !isRealString(params.room)){
            return callback('Name and room name are required.')
        } else if (isUniqueUsername(users, params.room, params.name)) {
            return callback('A user already exists with this name. Please choose another.')
        }

        const room = params.room.toLowerCase()

        socket.join(room)
        users.removeUser(socket.id)
        users.addUser(socket.id, params.name, room)
 
        io.to(room).emit('updateUserList', users.getUserList(room))
        socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'))
        socket.broadcast.to(room).emit('newMessage', generateMessage('Admin', `${params.name} has joined`))
        callback()
    })

    socket.on('createMessage', (message, callback) => {
        const user = users.getUser(socket.id)

        if (user && isRealString(message.text)){
            io.to(user.room).emit('newMessage', generateMessage(user.name, message.text))
        }
        callback()
    })

    socket.on('createLocationMessage', (coords) => {
        const user = users.getUser(socket.id)

        if (user){
            io.to(user.room).emit('newLocationMessage', generateLocationMessage(user.name, coords.latitude, coords.longitude))
        }
        
    })

    socket.on('disconnect', () => {
        const user = users.removeUser(socket.id)

        if (user) {
            io.to(user.room).emit('updateUserList', users.getUserList(user.room))
            io.to(user.room).emit('newMessage', generateMessage('Admin', `${user.name} has left.`))
        }
    })
})

server.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})