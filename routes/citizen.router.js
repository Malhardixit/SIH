const { response } = require('express')
const express = require('express')
const twilio = require('twilio')
const {alertAuthorities} = require('../controllers/protection.controller')
const {getNearestEnrolmentCentres} = require('../controllers/nearestEnrolmentLocations.controller')
const {updateUpcomingTxns} = require('../controllers/bookUpcomingTxn.controller')
const {generateOTP,verifyOTP} = require('../controllers/generateOTP.controller')

const citizenRouter = express.Router()
citizenRouter.get('',(req,res)=>{
    res.status(200).send({Hello:'World'})
})


//to be called by both the operator and the client
citizenRouter.get('/cashTxn',(req,res)=>{
    var response_t = {}
    if(req.query.service === 'Biometrics'){
        response_t = {
            Service:'biometrics',
            AmountToBePaid:'70',
            UniqueCode:req.query.dob+String(Date.now()),
        }
    }
    else{
        response_t = {
            Service:'demographics',
            AmountToBePaid:'100',
            UniqueCode:req.query.dob+String(Date.now()),
        }
    }
    res.status(200).send(response_t)
})

citizenRouter.get('/enrollmentLocations',getNearestEnrolmentCentres)
citizenRouter.get('/protection',alertAuthorities)
citizenRouter.post('/bookUpcomingTxn',updateUpcomingTxns)
citizenRouter.get('/generateOTP',generateOTP)
citizenRouter.get('/verifyOTP',verifyOTP)
module.exports = {
    citizenRouter
}
