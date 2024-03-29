//listar todos los usuarios
const express = require('express')
const router = express.Router()
const { deleteUser } = require('../../db/controllers/userController')
const validateToken = require('../../midelwares/validateToken')
const responser = require('../../network/response')

router.post('/', validateToken, async (req, res) => {
    const { _id } = req.body
    try {
        if (!_id) throw 'Debe indicar el _id del usuario'

        const response = await deleteUser({ _id })

        if (!response) throw 'Usuario no encontrado err .01'

        if (response.deletedCount === 0) throw "Usuario no encontrado err .02"

        responser.success({ res, message: 'success', body: response })

    } catch (error) {
        responser.error({ res, message: error.message || error })
    }
})

module.exports = router;