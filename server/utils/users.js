class Users {
    constructor () {
        this.users = []
    }
    addUser (id, name, room) {
        const user = {id, name, room}
        this.users.push(user)
        return user
    }

    removeUser (id) {
        let removedUser
        this.users = this.users.filter((user) => {
            if (user.id === id) {
                removedUser = user
            }
            return user.id !== id
        })

        return removedUser
    }
    
    getUser (id) {
        const user = this.users.filter((user) => user.id === id)
        return user[0]
    }

    getUserList (room) {
        const users = this.users.filter((user) => user.room === room)
        const namesArr = users.map((user) => user.name)

        return namesArr
    }

    getRoomList () {
        const rooms = new Set(this.users.map((user) => user.room))
        return Array.from(rooms)
    }
}

module.exports = {Users}