var testlib = require('.')
var fs = require('fs')

var output = {
	compiled: testlib
}

fs.writeFileSync('dist/testlib.js', "module.exports = " + JSON.stringify(output))