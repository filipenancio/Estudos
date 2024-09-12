const fs = require('fs')
const bancoCsv = 'database.csv'
const dados = fs.readFileSync(bancoCsv, "utf-8")

const regex = /\d{3}[.-]?\d{3}[.-]?\d{3}[-]?\d{2}/g

const matchRegex = dados.match(regex)
console.log(matchRegex);