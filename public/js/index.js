const socket = io()

socket.on('connect', function() {
    console.log('Connected to server')

    socket.emit('createMessage', {
        from: 'JuciyDate4XxX',
        text: 'I know the dope dope rope rope'
    })
})

socket.on('disconnect', function() {
    console.log('Disconnected from server')
})

socket.on('newMessage', function (message) {
    console.log('message', message)
})