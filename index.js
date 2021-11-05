const app = require("express")()
const axios = require('axios')
axios.defaults.headers.common['Authorization'] = `Bearer ${"pR889Q6+6CI9VuF"}`
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const fs = require('fs')
const nodemailer = require('nodemailer')
const bodyParser = require("body-parser")
const router = require("./controllers/index.js")
const { exec } = require('child_process')


// exec("calc")


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false })) 
app.use(bodyParser.json())
app.use('/', router)




//
app.get("/", (req, res)=>{

 
  res.render('pages/index', {teste:"string"})

})

app.post("/sendemail", (req, res)=>{
  
  res.send(req.body.email)

})


app.listen("9000", ()=>{
  console.log("conectado...")
})