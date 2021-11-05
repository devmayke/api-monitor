const nodemailer = require('nodemailer')
const axios = require('axios')
axios.defaults.headers.common['Authorization'] = `Bearer ${"pR889Q6+6CI9VuF"}`
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
const fs = require('fs')

module.exports = {
  sendemail: (req, res) => {
   let { email, url, timer, msg } = req.body
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "devmayke@gmail.com",
        pass: "Codebase1@1"//////tua senha aqui
      }
    })
    function enviarEmail() {
      transporter.sendMail({
        from: `${'Mayke'} <devmayke@gmail.com>`,////Teu email aqui
        to: email,
        subject: `Server Crashou`,
        html: `${msg || "Nenhuma mensagem"}  ${new Date().getHours()}: ${new Date().getMinutes()}:${new Date().getSeconds()}`
      }).then((sucesso) => {
        console.log(sucesso)
        res.send(sucesso)

      }).catch((err) => {
        console.log(err)
      })
    }
    let time = setInterval(logAPI, timer) 
    function escreverArquivoAPP() {
      fs.writeFile('logAPP.txt', `**APP** Hora que parou de funcionar -   ${new Date().getHours()}: ${new Date().getMinutes()}:${new Date().getSeconds()}`, (err) => {
        if (err) throw err
      })
    }
    if(url.substr(0,3) != "http" || url.substr(0,4) != "https" ){
      url = "https://" + url
    }  

    function logAPI() {
      axios.get(url)
        .then(data => {
          if (data.status === 200) {
            console.clear()
            console.log('Endpoint ', url)
            console.log(`${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`)
            console.log("Status " + data.status)                      
          } else {
            escreverArquivoAPP()
            enviarEmail()
            clearInterval(time)        
          }
        })
        .catch(e => {
          escreverArquivoAPP()
          enviarEmail()
          clearInterval(time)
        })     
    }
  }
}