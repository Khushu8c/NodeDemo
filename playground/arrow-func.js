var square = (x) => {
  return x*x;
}
console.log(square(2));

var user = {
  name: 'soniya',
  setHi:() => {
    // arrow function is not allowing this key word
    //output of below line: Hello   undefined
    console.log(`Hello   ${this.name}`);
    console.log(arguments);
  },
  setHiAlt () {
    console.log(arguments);
    console.log(`Hello   ${this.name}`);
    // output of above line: Hello   soniya
  }
}

user.setHiAlt(1,2,3);
user.setHi(1);
