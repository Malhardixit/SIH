const { response } = require('express')
const express = require('express')
const twilio = require('twilio')
const {alertAuthorities} = require('../controllers/protection.controller')
const {getNearestEnrolmentCentres} = require('../controllers/nearestEnrolmentLocations.controller')
const {updateUpcomingTxns} = require('../controllers/bookUpcomingTxn.controller')
const {generateOTP,verifyOTP} = require('../controllers/generateOTP.controller')
const {cashTxnController} = require('../controllers/cashTxn.controller')

const citizenRouter = express.Router()
citizenRouter.get('',(req,res)=>{
    res.status(200).send({Hello:'World'})
})


//to be called by both the operator and the client


// Routes
citizenRouter.get('/cashTxn',cashTxnController)
citizenRouter.get('/enrollmentLocations',getNearestEnrolmentCentres)
citizenRouter.get('/protection',alertAuthorities)
citizenRouter.post('/bookUpcomingTxn',updateUpcomingTxns)
citizenRouter.get('/generateOTP',generateOTP)
citizenRouter.get('/verifyOTP',verifyOTP)
module.exports = {
    citizenRouter
}
