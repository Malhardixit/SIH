const {firebaseApp} = require('../models/database.model')

async function getOperatorCredentials(req,res){
    //post req should contain username,pwd to be entered as application/json
    //params: username:<username>,password:<pwd>
    const operator_doc_snapshot = await firebaseApp.firestore().collection('Operator').where('LoginID','==',req.body.username).get()
    var docID = ""
    var data = {}
    operator_doc_snapshot.forEach((doc)=>{
        docID=doc.id
        data = doc.data()
    })
    if(docID==""){
        res.status(200).send({
            Message:"User Not Found"
        })
    }
    else if(data.Password !== req.body.password){
        res.status(200).send({
            Message:"Authentication Error"
        })
    }
    else if(data.Password === req.body.password){
        delete data.Password
        res.status(200).send(data)
    }
}

module.exports = {
    getOperatorCredentials
}