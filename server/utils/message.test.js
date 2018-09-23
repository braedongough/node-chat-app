const expect = require('expect')

const {generateMessage, generateLocationMessage} = require('./message')

describe('generateMessage', () => {
    it('should generate the correct message object', () => {

        const from = 'Braedon'
        const text = 'This is a message'
        const message = generateMessage(from, text)

        expect(message).toMatchObject({
            from,
            text
        })
        expect(typeof message.createdAt).toBe('number')
    })
})

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        const from = 'Braedon'
        const lat = 1
        const long = 4
        const url = 'https://www.google.com/maps/search/1,4'
        const locationMessage = (from, lat, long)

        expect(locationMessage).toMatchObject({
            from,
            url
        })
        expect(typeof locationMessage.createdAt).toBe('number')
    })
})