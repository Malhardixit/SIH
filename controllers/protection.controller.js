const express = require('express')
const nodemailer = require('nodemailer')
const twilio = require('twilio')
const sgmail = require('@sendgrid/mail')

const accountSid = "AC0d6146395bb5cf4840da991128a12475"
const authToken = "37c4ad7152dca6ee2997c36c979bfc4a"
const sendGridKey = "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"
sgmail.setApiKey(sendGridKey)

function alertAuthorities(req,res){
    //req params must contain operator_id and uid of client
    const msg = {
        to:'janeprakeerth@gmail.com',
        from:'yorb999@gmail.com',
        subject:'Cash Corruption at Aadhaar Centre',
        text:'Cash Corruption reported by resident with uid: 98739485 at center: w34897',
        html:`<b>Cash Corruption reported by resident with uid: ${req.query.uid} at center of Operator(OperatorID): ${req.query.operatorID}</b>`,
    }    
    sgmail.send(msg).then(d=>{
        res.status(200).send({Mail:'Sent'})
    })
    .catch(e=>{
        res.status(200).send({Mail:'Not Sent, internal error'})
    })
}

module.exports = {
    alertAuthorities
}