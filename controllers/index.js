const express = require('express')

const router = express.Router()
const api = require("./api")





router.post('/sendemail', api.sendemail)



module.exports = router