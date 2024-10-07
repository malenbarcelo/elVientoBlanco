//use this file to adapt prd files to dev files
const fs = require('fs');
const path = require('path');
const { clearScreenDown } = require('readline');

//Change dominio.js from 'http://localhost:3007' to 'https://mbarcelo.online'
//public
var dominio = path.resolve('./public/js/dominio.js')
var devDominioFile = fs.readFileSync(dominio, 'utf-8')
var prdDominioFile = devDominioFile.replaceAll('https://mbarcelo.online','http://localhost:3007')
fs.writeFileSync(dominio,prdDominioFile)

//controllers
dominio = path.resolve('./src/functions/dominio.js')
devDominioFile = fs.readFileSync(dominio, 'utf-8')
prdDominioFile = devDominioFile.replaceAll('https://mbarcelo.online','http://localhost:3007')
fs.writeFileSync(dominio,prdDominioFile)

//Change config.js from DEV database to PRD database
const config = path.resolve('./database/config/config.js')
const configFile = fs.readFileSync(config, 'utf-8')
let prdConfigFile = configFile.replaceAll('fevb_adm','root')
prdConfigFile = prdConfigFile.replaceAll('=GTJ,i3Lql(%','30941767')
prdConfigFile = prdConfigFile.replaceAll('fevb_db','psi_db')
fs.writeFileSync(config,prdConfigFile)

//Change app.js from PRD to DEV
const app = path.resolve('./app.js')
let appFile = fs.readFileSync(app, 'utf-8')
appFile = appFile.replaceAll('//store: new FileStore()','store: new FileStore()')
appFile = appFile.replaceAll('//cookie: { secure: false }','cookie: { secure: false }')
fs.writeFileSync(app,appFile)

