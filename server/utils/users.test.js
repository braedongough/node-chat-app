const expect = require('expect')

const {
    Users
} = require('./users')

describe('Users', () => {
    let users;
    
    beforeEach(() => {
        users = new Users()
        users.users = [{
            id: '1',
            name: 'Bob',
            room: 'Node Course'
        }, {
            id: '2',
            name: 'Steve',
            room: 'React Course'
        }, {
            id: '3',
            name: 'DickButt',
            room: 'Node Course'
        }]
    })

    it('should add new users', () => {
        const users = new Users()
        const user = {
            id: 123,
            name: 'Braedon',
            room: 'The office'
        }
        const res = users.addUser(user.id, user.name, user.room)

        expect(users.users).toEqual([user])
    })

    it('should remove a user', () => {
        let removedUser = users.removeUser('1')
        
        expect(users.users.length).toBe(2)
        expect(removedUser).toMatchObject({
            id: '1',
            name: 'Bob',
            room: 'Node Course'
        })
    })

    it('should not remove a user', () => {
        let removedUser = users.removeUser('666')
        
        expect(users.users.length).toBe(3)
        expect(removedUser).toBeUndefined()
    })

    it('should find user', () => {
        const user = users.getUser('1')
        expect(user).toMatchObject({
            id: '1',
            name: 'Bob',
            room: 'Node Course'
        })
    })

    it('should not find user', () => {
        const user = users.getUser('666')
        expect(user).toBeUndefined()
    })
    
    it('should return names for Node Course', () => {
        const userList = users.getUserList('Node Course')

        expect(userList).toEqual(['Bob', 'DickButt'])
    })

    it('should return names for React Course', () => {
        const userList = users.getUserList('React Course')

        expect(userList).toEqual(['Steve'])
    })
})