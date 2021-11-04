
const axios = require('axios')
axios.defaults.headers.common['Authorization'] = `Bearer ${"pR889Q6+6CI9VuF"}`
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const fs = require('fs')

let time = setInterval(logAPI, 1000)
let endpoint = 'https://appaula.prepara.com.br/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZE1hdGVyaWEiOjEsIklkQXVsYSI6MSwiSWRBbHVubyI6MTE3MTE4NTYsIklkQXRpdmlkYWRlIjoxLCJJZFJlZ2lhbyI6MSwiVGVsYSI6MCwiVGVudGF0aXZhIjoxLCJVcmxBcnF1aXZvc0F0aXZpZGFkZVByYXRpY2EiOiJodHRwczovL3Npc3RlbWFzLm1vdmVlZHUuY29tLmJyL2h1Yi9hcGkvYWNhZGVtaWNvL1NhbHZhckFycXVpdm8vNi9VQ3M1V1dkblVXRmtSbVp4Y2xGSkt5OVRSREF4TkU1NE5rTllabE5CZEM5V05teDNVVUpFYTNCU09EZzVVVFlyTmtOSk9WWjFSbEpTV0ZodU5XMVRZVE53UXpFMWNraFBaMlZwVFdGTGNHZFplVlJEU0hjOVBRPT0vMTc4ODc5NDEvQXVsYTNfVmlydHVhaXMiLCJVcmxBcG9udGFtZW50b3MiOiJodHRwczovL3Npc3RlbWFzLm1vdmVlZHUuY29tLmJyL2h1Yi9hcGkvYWNhZGVtaWNvL0Fwb250YW1lbnRvQXVsYS82L1VDczVXV2RuVVdGa1JtWnhjbEZKS3k5VFJEQXhORTU0TmtOWVpsTkJkQzlXTm14M1VVSkVhM0JTT0RnNVVUWXJOa05KT1ZaMVJsSlNXRmh1TlcxVFlUTndRekUxY2toUFoyVnBUV0ZMY0dkWmVWUkRTSGM5UFE9PS8xMTcxMTg1Ni8xMjM0NTYvMTMvMi8yLzYzNzY2MTc4MDkwOTc0OTk0Ni8wLyMjVGVsYS8xL251bGwiLCJVcmxFbmNlcnJhbWVudG9BdWxhIjoiaHR0cHM6Ly9zaXN0ZW1hcy5tb3ZlZWR1LmNvbS5ici9odWIvRW5jZXJyYW1lbnRvQXVsYSIsIlVybEFub3RhY2FvSW5zZXJpciI6Imh0dHBzOi8vc2VydmljZXMubW92ZWVkdS5jb20uYnIvYXBpL3BvcnRhbGRvYWx1bm8vaW5zZXJpckFub3RhY2FvIiwiSnNvbkJvZHlBbm90YWNhb0luc2VyaXIiOiJ7XCJDb2RpZ29Db250cmF0b1wiOjE2MTg3OTAsXCJDb2RpZ29NYXRlcmlhXCI6MzU1OSxcIlRpcG9cIjpcIkF1bGFcIixcIlBhcmNlaXJvXCI6XCJUZWxlU2FwaWVuc1wiLFwiVGl0dWxvXCI6XCJFbXByZWVuZGVkb3Jpc21vXCIsXCJEZXNjcmljYW9cIjpcIiMjQW5vdGFjYW9cIn0iLCJVcmxBbm90YWNhb0FsdGVyYXIiOiJodHRwczovL3NlcnZpY2VzLm1vdmVlZHUuY29tLmJyL2FwaS9wb3J0YWxkb2FsdW5vL2FsdGVyYXJBbm90YWNhbyIsIkpzb25Cb2R5QW5vdGFjYW9BbHRlcmFyIjoie1wiaWRCbG9jb05vdGFcIjpcIiMjaWRCbG9jb05vdGFcIixcIlBhcmNlaXJvXCI6XCJUZWxlU2FwaWVuc1wiLFwiVGl0dWxvXCI6XCJFbXByZWVuZGVkb3Jpc21vXCIsXCJEZXNjcmljYW9cIjpcIiMjQW5vdGFjYW9cIn0iLCJVcmxBbm90YWNhb0xpc3RhciI6Imh0dHBzOi8vc2VydmljZXMubW92ZWVkdS5jb20uYnIvYXBpL3BvcnRhbGRvYWx1bm8vbGlzdGFyQW5vdGFjYW8iLCJKc29uQm9keUFub3RhY2FvTGlzdGFyIjoie1wiQ29kaWdvQ29udHJhdG9cIjoxNjE4NzkwLCBcIlRpcG9cIjpcIkF1bGFcIiwgXCJQYXJjZWlyb1wiOlwiVGVsZVNhcGllbnNcIn0iLCJpYXQiOjE2MzYwNTQ0ODd9.kjvDyJhX6WknCORn0_VpvSNQTBMMEofOgqQAxejws2c'
let endpointAPI = 'https://appaula.prepara.com.br:5000/api/token'

function escreverArquivoAPP() {
  fs.writeFile('logAPP.txt', `**APP** Hora que parou de funcionar -   ${new Date().getHours()}: ${new Date().getMinutes()}:${new Date().getSeconds()}`, (err) => {
    if (err) throw err
  })
}
function escreverArquivoAPI() {
  fs.writeFile('logAPI.txt', `**API** Hora que parou de funcionar -   ${new Date().getHours()}: ${new Date().getMinutes()}:${new Date().getSeconds()}`, (err) => {
    if (err) throw err
  })
}


function logAPI() {
  axios.get(endpoint)
    .then(data => {
      if (data.status === 200) {
        console.clear()
        console.log('Endpoint APP ', endpoint)
        console.log(`${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`)
        console.log("Status " + data.status)
      } else {
        escreverArquivoAPP()
        clearInterval(time)
      }
    })
    .catch(e => {
      escreverArquivoAPP()
      clearInterval(time)
    })

  /////

  axios.get(endpointAPI)
    .then(data => {
      if (data.status === 200) {
        console.clear()
        console.log('endpointAPI ', endpointAPI)
        console.log(`${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`)
        console.log("Status " + data.status)
      } else {
        escreverArquivoAPI()
        clearInterval(time)
      }
    })
    .catch(e => {
      escreverArquivoAPI()
      clearInterval(time)
    })


}
















