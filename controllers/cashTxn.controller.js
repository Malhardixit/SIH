const {firebaseApp} = require('../models/database.model')

async function cashTxnController(req,res){
    //requires citizen_uid,Operator_id,ServiceOpted,booking_id,dob
        var response_t = {}
        if(req.query.service === 'Biometrics'){
            response_t = {
                Service:'biometrics',
                AmountToBePaid:'70',
                UniqueCode:req.query.dob+String(Date.now()),
            }
            const updateTxnMethodCitizen = await firebaseApp.firestore().collection('Citizen').doc(`${req.query.uid}Txns`).collection('UpcomingTxns').doc(`${req.query.booking_id}`).update({
                isCashTxn:true,
                CashTxnValue: response_t.AmountToBePaid
            })
        }
        else{
            response_t = {
                Service:'demographics',
                AmountToBePaid:'100',
                UniqueCode:req.query.dob+String(Date.now()),
            }
            const updateTxnMethodCitizen = await firebaseApp.firestore().collection('Citizen').doc(`${req.query.uid}Txns`).collection('UpcomingTxns').doc(`${req.query.booking_id}`).update({
                isCashTxn:true,
                CashTxnValue: response_t.AmountToBePaid
            })
        }
        res.status(200).send(response_t)
}
module.exports = {
    cashTxnController
}