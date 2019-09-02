var obj = {
  name: 'Soniya'
};

var stringObj = JSON.stringify(obj);
console.log(typeof stringObj);
console.log(stringObj);

var personString = '{"name": "soniya", "age": 28}';
var person = JSON.parse(personString);
console.log(typeof person);
console.log(person);
