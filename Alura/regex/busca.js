const fs = require('fs')
const bancoCsv = 'database.csv'
const dados = fs.readFileSync(bancoCsv, "utf-8")

const regex = /Anna/

const matchRegex = dados.match(regex)
console.log(matchRegex);
