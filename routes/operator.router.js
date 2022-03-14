const express = require('express')
const {getPendingTxns} = require('../controllers/operatorViewPendingTxns.controller')
const {OperatorCashTxnAmountView} = require('../controllers/cashTxn.controller')
const {getOperatorCredentials} = require('../controllers/operatorCredentials.controller')
const operatorRouter = express.Router()


operatorRouter.post('/operatorCredentials',getOperatorCredentials)
operatorRouter.get('/getPendingTxns',getPendingTxns)
operatorRouter.get('/getCashTxnDetails',OperatorCashTxnAmountView)
module.exports = {
    operatorRouter
}