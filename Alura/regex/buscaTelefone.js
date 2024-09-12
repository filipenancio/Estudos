const fs = require('fs')
const bancoCsv = 'database.csv'
const dados = fs.readFileSync(bancoCsv, "utf-8")

const regex = /\(\d+\) \d+-\d+/g

const matchRegex = dados.match(regex)
console.log(matchRegex);

const pattern = /\(\d{2}\) \d{4,5}-\d{4}/g

const matchRegexPattern = dados.match(pattern)
console.log(matchRegexPattern);