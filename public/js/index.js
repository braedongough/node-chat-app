const socket = io()

const select = jQuery('#rooms')

socket.on('updateRoomList', function (rooms)  {

    rooms.forEach(function (room) {
        select.append(new Option(room))
    })
    
})
const roomNameInput = jQuery('#room-name')
select.on('change', (e) => {
    const optionSelected = select.find('option:selected').text();
    const roomNameInput = jQuery('#room-name')

    roomNameInput[0].value = optionSelected
})