//use this file to adapt dev files to prd files
const fs = require('fs');
const path = require('path');
const { clearScreenDown } = require('readline');

//Change dominio.js from 'http://localhost:3007' to 'https://mbarcelo.online'
//public
var dominio = path.resolve('./public/js/dominio.js')
var devDominioFile = fs.readFileSync(dominio, 'utf-8')
var prdDominioFile = devDominioFile.replaceAll('http://localhost:3007','https://mbarcelo.online')
fs.writeFileSync(dominio,prdDominioFile)

//controllers
dominio = path.resolve('./src/functions/dominio.js')
devDominioFile = fs.readFileSync(dominio, 'utf-8')
prdDominioFile = devDominioFile.replaceAll('http://localhost:3007','https://mbarcelo.online')
fs.writeFileSync(dominio,prdDominioFile)

//Change config.js from DEV database to PRD database
const config = path.resolve('./database/config/config.js')
const configFile = fs.readFileSync(config, 'utf-8')
let prdConfigFile = configFile.replaceAll('root','fevb_adm') //In WNPower cPanel --> Bases de Datos MySQl --> Añadir usuario a la base de datos --> Usuario
prdConfigFile = prdConfigFile.replaceAll('30941767','=GTJ,i3Lql(%')
prdConfigFile = prdConfigFile.replaceAll('psi_db','fevb')// //In WNPower cPanel --> Bases de Datos MySQl --> Bases de datos actuales
fs.writeFileSync(config,prdConfigFile)

//Change app.js from DEV database to PRD database
const app = path.resolve('./app.js')
let appFile = fs.readFileSync(app, 'utf-8')
appFile = appFile.replaceAll('//store: new FileStore()','store: new FileStore()')
appFile = appFile.replaceAll('store: new FileStore()','//store: new FileStore()')
appFile = appFile.replaceAll('//cookie: { secure: false }','cookie: { secure: false }')
appFile = appFile.replaceAll('cookie: { secure: false }','//cookie: { secure: false }')
fs.writeFileSync(app,appFile)













