const expect = require('expect')
const {isRealString} = require('./validation')

//isrealstring
    //should reject non-string values
    //should reject strings with only spaces. 
    //should allow string with non-space characters
describe('isRealString', () => {
    it('should reject non-string values', () => {
        expect(isRealString(null)).toBeFalsy()
    })
    it('should reject strings with only spaces', () => {
        const emptyString = '           '
        expect(isRealString(emptyString)).toBeFalsy()
    })
    it('should reject strings with only spaces', () => {
        const validString = '       G O T    '
        expect(isRealString(validString)).toBeTruthy()
    })
})
