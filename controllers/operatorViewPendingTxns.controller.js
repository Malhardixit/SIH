const {firebaseApp} = require('../models/database.model')

async function getPendingTxns(req,res){
    const pendingTxns = await firebaseApp.firestore().collection('Operator').doc(`${req.query.operatorID}Txns`).collection('PendingTxns').get()
    const pendingTxnsArray = []
    pendingTxns.forEach((doc)=>{
        pendingTxnsArray.push(doc.data())
    })
    res.status(200).send(pendingTxnsArray)
}

module.exports = {
    getPendingTxns
}