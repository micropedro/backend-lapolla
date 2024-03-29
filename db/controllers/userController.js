const User = require('../models/userModel')

//buscar usuarios
const findUsers = async () => {
    const response = await User.find()
    return response
}

//guardar usuarios
const saveUser = async (userToRegister) => {
    const response = await User(userToRegister).save()
    return response
}

//buscar un usuario con el email
const findOneUsersWhitEmail = async (email) => await User.findOne({ email })

//buscar un usuario con el email y password
const findOneUsersWhitEmailAndPassword = async (email, password) => {
    const response = await User.findOne({ email, password })
    return response
}

const deleteUser = async (_id) => await User.deleteOne({ _id })

const updateUser = async (user) => {
    const response = await User.findOneAndUpdate({ _id: user._id }, { $set: user })
    return response
}

//update only password in user account
const changeUserPassword = async ({ email, password }) => {
    const response = await User.findOneAndUpdate({ email }, { $set: { password } })
    return response
}

const findOneUser = async (userData) => await User.findOne(userData).sort({ $natural: -1 })

const userControllers = {
    findUsers,
    saveUser,
    findOneUsersWhitEmail,
    findOneUsersWhitEmailAndPassword,
    deleteUser,
    updateUser,
    changeUserPassword,
    findOneUser
}

module.exports = userControllers;