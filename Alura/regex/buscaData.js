const fs = require('fs')
const bancoCsv = 'database.csv'
const dados = fs.readFileSync(bancoCsv, "utf-8")

const regex = /\d{2}[./ ]?\d{2}[./ ]?\d{4}$/gm

const matchRegex = dados.match(regex)
console.log(matchRegex);