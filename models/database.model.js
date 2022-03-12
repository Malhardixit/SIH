const firebase_admin = require('firebase-admin')
const service_key = require('../sihpaymentapp-firebase-adminsdk-xz8pz-de0b0d8591.json')

const firebaseApp = firebase_admin.initializeApp({
    credential: firebase_admin.credential.cert(service_key)
})

module.exports = {
    firebaseApp
}
