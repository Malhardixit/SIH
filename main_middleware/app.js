const express = require('express')
const {citizenRouter} = require('../routes/citizen.router')
const {operatorRouter} = require('../routes/operator.router')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())
app.use(citizenRouter)
app.use(operatorRouter)
app.use(express.static(`${__dirname}\\static`))
// app.use(express.static())
console.log(`${__dirname}`)
module.exports = {
    app
}