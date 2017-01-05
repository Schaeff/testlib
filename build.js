var testlib = require('.')
var fs = require('fs')

console.log(testlib)

var output = {
	compiled: testlib
}

console.log(output)

fs.writeFileSync('dist/testlib.js', "module.exports = " + JSON.stringify(output))

console.log("done!")
