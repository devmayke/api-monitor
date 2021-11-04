
const axios = require('axios')
axios.defaults.headers.common['Authorization'] = `Bearer ${"pR889Q6+6CI9VuF"}`
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const fs = require('fs')

let time = setInterval(logAPI, 1000)
let endpoint = 'https://appaula.prepara.com.br:5000/api/token/'

function escreverAquivo(){
  fs.writeFile('logAPI.txt', `Hora que parou de funcionar -   ${new Date().getHours()}: ${new Date().getMinutes()}:${new Date().getSeconds()}`, (err) => {
    if (err) throw err
  })  
}

function logAPI(){
  axios.get(endpoint)
  .then(data => {   
   if(data.status === 200){ 
     console.clear() 
     console.log('Endpoint ',  endpoint)  
     console.log(`${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`)
     console.log("Status " +data.status)
  }else{
    escreverAquivo()    
     clearInterval(time)
    }
  })
  .catch(e=>{   
    escreverAquivo()
    clearInterval(time)
  })
}











            
 



