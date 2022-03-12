const {firebaseApp} = require('../models/database.model')
const axios = require('axios')
function deg2rad(deg){
    return deg*(Math.PI/180)
}
function calcDistance(lat1,lat2,long1,long2){
    var R = 6371;
    const dLat = (lat2-lat1)*(Math.PI/180)
    const dLon = (long2-long1)*(Math.PI/180)
    var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  return d;

}

async function getNearestEnrolmentCentres(req,res){
    const citizenRegDetails = await firebaseApp.firestore().collection('Citizen').doc(req.query.uid).get()
    console.log(citizenRegDetails.data())
    const operatorList = await firebaseApp.firestore().collection('Operator').get()
    const operatorArray = []
    const citizenLatitude = citizenRegDetails.data().location._latitude
    const citizenLongitude =  citizenRegDetails.data().location._longitude
    console.log(operatorList.forEach(e=>{
        operatorArray.push({
            id: e.id,
            latitude: e.data().Operator_Location._latitude,
            longitude: e.data().Operator_Location._longitude,
            distance_from_resident_home_inKM: calcDistance(citizenLatitude,e.data().Operator_Location._latitude,citizenLongitude,e.data().Operator_Location._longitude)
        })
    }))
    console.log(operatorArray)
    res.status(200).send(operatorArray)
}

module.exports = {
    getNearestEnrolmentCentres
}