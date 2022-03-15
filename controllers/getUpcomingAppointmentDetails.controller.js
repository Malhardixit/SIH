const {firebaseApp} = require('../models/database.model')

async function upcomingAppointments(req,res){
    //requires uid,booking_id
    const upcomingAppointmentsArray = []
    const upcomingAppointments = await firebaseApp.firestore().collection('Citizen').doc(`${req.query.uid}Txns`).collection('UpcomingTxns').get()
    upcomingAppointments.forEach((doc)=>{
        upcomingAppointmentsArray.push(doc.data())
        console.log(typeof(doc.data().DateOfAppointment))
    })
    res.status(200).send(upcomingAppointmentsArray)
}

module.exports = {
    upcomingAppointments
}