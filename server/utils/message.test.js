const expect = require('expect')

const {generateMessage} = require('./message')

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