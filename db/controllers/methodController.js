const Method = require('../models/methodsModel')
const { adminId } = require('../../config.json')

const saveMethod = async (method) => {
    const response = await Method(method).save()
    return response
}

const getMethods = async (id) => {
    console.log("id: " + id)
    try {
        if (id) {
            return await Method.find({ userId: id }).populate('adminMethodId')
        } else {
            return await Method.find().populate('adminMethodId')
        }
    } catch (error) {
        console.error(error)
        return false
    }
}

const getMethod = async (_id) => await Method.findOne({ _id })

const getAdminMethods = async () => {
    const response = await Method.find({ userId: adminId })
    return response
}

const deleteMethod = async (_id) => {
    try {
        const deleted = true
        return await Method.findOneAndUpdate({ _id }, { $set: { deleted } })
    } catch (error) {
        console.log("Error en el controlador", error)
    }
}

const updateChangeType = async ({ _id, tipoDeCambio }) => {
    return await Method.findOneAndUpdate({ _id }, { $set: { tipoDeCambio } })
}

const MethodControllers = {
    saveMethod,
    getMethods,
    getAdminMethods,
    deleteMethod,
    getMethod,
    updateChangeType
}

module.exports = MethodControllers;