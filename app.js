console.log('Starting app.js');
console.log('Hello world!');
const fs = require('fs');
const os = require('os');
const demo = require('./demo.js')
const lodash = require('lodash');
const yarg = require('yargs');

var a = process.argv;
var command = a[2];
console.log(command);
var yarg_value = yarg.argv;
console.log('yargs: ', yarg_value);

if (command === 'add') {
demo.add(yarg_value.title, yarg_value.body);
} else if (command === 'list') {
  demo.getAll();
} else if (command === 'read') {
  demo.read(yarg_value.title);
} else if (command === 'remove') {
  demo.remove(yarg_value.title);
} else {
  console.log('Unknown command: ', command);
}




//console.log(loda);
//console.log(lodash.isString('soniya'));
//console.log(lodash.isString(true));
//var filteredVal = lodash.uniq(['soniya',1,2,3,'soniya',1,5,4]);
//console.log(filteredVal);



//console.log(demo.printsss());
//console.log(demo.add(3,7));
//var a = os.userInfo();
//fs.appendFile('message.txt', `Hello ${a.username} !`, (err) => {
//  if (err) throw err;
//  console.log('The "data to append" was appended to file!');
//});

//console.log('sssssssssssssssssss');

//console.log(a);
//console.log(fs);
//console.log(os);
