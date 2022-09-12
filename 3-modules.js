//CommonsJs - every file is a module (by default)
//Module - encapsulated code(share mimimum)
const names = require('./4-names.js')
const sayHi = require('./5-utils.js')
const data = require('./6-alternative-flavor.js')
require('./7-mind-grade.js')

console.log(data);

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)