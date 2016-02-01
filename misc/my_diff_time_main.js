// http://www.sitepoint.com/understanding-module-exports-exports-node-js/
var my_module = require("./my_diff_module.js");

// https://stackoverflow.com/questions/4351521/how-do-i-pass-command-line-arguments-to-node-js
var args = process.argv.slice(2);
var start = args[0];
var end = args[1];
var output = my_module.my_diff(start, end);
console.log(output);

