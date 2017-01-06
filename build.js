var testlib = require('.')
var fs = require('fs')

var output = {
	compiled: testlib
}

console.log("abc")

fs.writeFileSync('dist/testlib.js', "module.exports = " + JSON.stringify(output))