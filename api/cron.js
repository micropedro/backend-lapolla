/* eslint-disable no-undef */
const express = require('express')
const router = express.Router()
const responser = require('../network/response')
/* const { repartirPremiosMiniQuiniela } = require('../pollabot/services/repartirPremiosMiniQuiniela')
const { createNewMiniQuiniela2 } = require('../pollabot/services/createNewMiniQuiniela')
*/
const { apagarGranQuinielaAnterior } = require('../pollabot/workers/granQuinielaWorker') 

router.get('/:token', async (req, res) => {
  try {

    const token = req.params.token

    /* const { GQ_INIT, MQ_INIT, MIQ_END } = process.env */ 
    const { GQ_INIT } = process.env

    if (token === GQ_INIT) {
      const body = await apagarGranQuinielaAnterior()
      responser.success({ res, message: "Gran quiniela", body})
    }else{
      responser.success({ res, message: "No se detectaron quinielas", body:{}})
    }

   /*  

    if (token == MQ_INIT) {
      const body = await createNewMiniQuiniela2()
      responser.success({ res, message: "bot ejecutado", body })
    }

    if (token == MIQ_END) {
      repartirPremiosMiniQuiniela()
      responser.success({ res, message: "bot ejecutado", body: { hello: "Cuidado tenemos tus datos" } })
    }
 */
  } catch (error) {
    responser.error({ res, message: error?.message || error })
  }
})

module.exports = router