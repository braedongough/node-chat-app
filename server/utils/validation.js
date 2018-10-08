const isRealString = (str) => {
    return typeof str === 'string' && str.trim().length > 0
}

const isUniqueUsername = (users, room, name) => {
    return users.getUserList(room).includes(name)
}

module.exports = {
    isRealString,
    isUniqueUsername
}