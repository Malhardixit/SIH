const {firebaseApp} = require('../models/database.model')
const Stripe = require('stripe')

const stripePublishableKey = "pk_test_51KcrhYSEKHQrMKMmG3kTG1bEH7aZa7lMcuNgErUAiVkk4VhGxGMVvM9VNm9f51gBz2b1t9BvUQqrp6eS93fD5vJl00R8CEZayU"
const stripeSecretKey = "sk_test_51KcrhYSEKHQrMKMm2bOFNrYsp2T2kSc2vjWxwzPpauyRjuPQNGkTlRwFbtEDEl8yq4gwQ1ugIjCyOuocninynbNY00echxqI3i"


const stripeClient = Stripe(stripeSecretKey)

async function digitalCheckout(req,res){
    //We need the amount to be paid by the citizen
    // for this we need service opted.
    //Lets get it from operator
    //Operator_1Txns->booking_id->Service
    const getTxnDetails = await firebaseApp.firestore().collection('Operator').doc(`${req.query.Operator_ID}Txns`).collection('PendingTxns').doc(`${req.query.booking_id}`).get()
    console.log()
    const amount_to_be_paid = getTxnDetails.data().AmountToBePaid
    const service = getTxnDetails.data().Service
    const session = await stripeClient.checkout.sessions.create({       
        mode:'payment',
        line_items:[
            {
                price_data:{
                    currency:'inr',
                    product_data:{
                        name:`Update Service Payment (${service})`,
                    },
                    unit_amount:amount_to_be_paid*100,
                },
                quantity: 1
            }
        ],
        success_url:'https://www.google.com/',
        cancel_url:'https://www.bing.com/?toWww=1&redig=5721A53EFDEA4A188A40C0AAFC26F9B0'
    })
    res.send({
        url:session.url
    })
}

module.exports = {
    digitalCheckout
}
