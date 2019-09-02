console.log('Starting demo.js');
var a = 'direct variable';
module.exports.printsss = () => {
  console.log('inside function call');
}

var add  = (time, body) => {
  console.log('Adding notes', time, body);
}

var getAll = () => {
  console.log('get all notes');
}

var read = (title) => {
  console.log('get read: ', title);
}

var remove = (title) => {
  console.log('remove : ', title);
}
module.exports = {
  add,
  getAll,
  read,
  remove
}
//console.log(a);
//console.log(module);
