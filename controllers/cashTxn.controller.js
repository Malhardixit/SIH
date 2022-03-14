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
            const updateTxnDetailsOperator_1 = await firebaseApp.firestore().collection('Operator').doc(`${req.query.Operator_id}Txns`).collection('PendingTxns').doc(`${req.query.booking_id}`).update({
                AmountToBePaid:response_t.AmountToBePaid,
                CashTxnID:response_t.UniqueCode
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
            const updateTxnDetailsOperator_1 = await firebaseApp.firestore().collection('Operator').doc(`${req.query.Operator_id}Txns`).collection('PendingTxns').doc(`${req.query.booking_id}`).update({
                AmountToBePaid:response_t.AmountToBePaid,
                CashTxnID:response_t.UniqueCode
            })
        }
        res.status(200).send(response_t)
}
//Here operator verifies UniqueCashTxn Code and validates the txn from his end. After that happens
//Users updates are finally fwded to the UIDAI 
// Upcomimg Txn goes to Previous Txn
async function OperatorCashTxnAmountView(req,res){
    //required params, booking_id,uniqueCashTxnID,Operator_ID
    const PendingTxnDetails = await firebaseApp.firestore().collection('Operator').doc(`${req.query.Operator_ID}Txns`).collection('PendingTxns').doc(`${req.query.booking_id}`).get()
    const data = PendingTxnDetails.data()
    res.status(200).send(data)
}

module.exports = {
    cashTxnController,
    OperatorCashTxnAmountView
}