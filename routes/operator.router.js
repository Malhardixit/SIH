const express = require('express')
const {getPendingTxns} = require('../controllers/operatorViewPendingTxns.controller')
const operatorRouter = express.Router()
operatorRouter.get('/getPendingTxns',getPendingTxns)
module.exports = {
    operatorRouter
}