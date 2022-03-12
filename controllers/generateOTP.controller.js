const twilio = require('twilio')
const {firebaseApp} = require('../models/database.model')

const twilioCreds = {
    // serviceID : "VAe3c25ddebe95e74633d67d58ebb097b6",
    // accountSID : "AC0d6146395bb5cf4840da991128a12475",
    // authToken : "37c4ad7152dca6ee2997c36c979bfc4a"
   
    // serviceID : "VA865ca356165fc22ed9d0f6354efb8c2b",
    // accountSID : "ACcdf6fd924cd03835b7d9e3f39fa5928e",
    // authToken : "08c102981fc01e08c5ed4873328069d4"
   
    serviceID: "VA65f6e3eb99ff24dd71e5032ec24b1a20",
    accountSID: "ACc43eae8b582b8cdfcbf03d8e1186aaf4",
    authToken: "fe09117323879303465b5d3c431824e4",

}
var phno = ''
function generateOTP(req,res){
    const client = twilio(twilioCreds.accountSID,twilioCreds.authToken)
    if(!req.query.phoneNumber){
        res.status(200).send({Message:"Request Failed"})    
    }
    else{
        const phoneNumber = req.query.phoneNumber
        phno = req.query.phoneNumber
        client.verify.services(twilioCreds.serviceID).verifications.create(
            {
                to:`+91${phoneNumber}`,
                channel: 'sms'
            }
        ).then(res=>{
            console.log(res)
        })
        res.status(200).send({Message:"Sent Request"})
    }
}

async function verifyOTP(req,res){
    const client = twilio(twilioCreds.accountSID,twilioCreds.authToken)
    if(!req.query.code){
        res.status(200).send({Message:"Verification Failed",
        Reason:"Code missing"
    })   
    }
    else{
        const OTPverification_response = await client.verify.services(twilioCreds.serviceID).verificationChecks.create({
            to: `+91${phno}`,
            code:`${req.query.code}`
        })
        const citizenArray = await firebaseApp.firestore().collection('Citizen').where('PhNo','==',phno).get()
        var docID = ""
        var citizenDetails = null
        citizenArray.forEach((doc)=>{
            docID = doc.id
        })
        OTPverification_status = OTPverification_response.status
        console.log(docID)
        console.log(OTPverification_status)
        if(docID == ""){
            console.log(`docID invalid`)
            res.status(200).send({Message:"Not Verified"})
        }
        else if(OTPverification_status=='approved'){
            const citizen = await firebaseApp.firestore().collection('Citizen').doc(docID).get()
            citizenDetails = citizen.data()
                res.status(200).send({Message:"Verified",
                Name:citizenDetails.Name,
                DOB:citizenDetails.DOB,
                Aadhaar_uid:citizenDetails.Aadhaar_uid,
                Location_latitude:citizenDetails.location._latitude,
                Location_longitude:citizenDetails.location._longitude,
        })
        }
        else{
                res.status(200).send({Message:"Not Verified"})
        }
    }
}
module.exports = {
    generateOTP,
    verifyOTP
}
