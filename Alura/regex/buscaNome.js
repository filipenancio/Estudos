const fs = require('fs')
const bancoCsv = 'database.csv'
const dados = fs.readFileSync(bancoCsv, "utf-8")

const regex = /^([A-Za-zÀ-ÿ]+)(?:\s[A-Za-zÀ-ÿ]+)+/gm

const matchRegex = dados.match(regex)
console.log(matchRegex);