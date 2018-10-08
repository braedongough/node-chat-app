const socket = io()

socket.on('updateRoomList', function (rooms)  {
    const select = jQuery('#rooms')

    rooms.forEach(function (room) {
        select.append(new Option(room))
    })
    
})

//What needs to be done next? 

/* currently, a list of options can be generated of the rooms. I'm not sure what happens when someone
creats a new room, or when someone leaves a room. Something must be done then possibly. Also, how 
does a user select and enter a room from the options list.  */