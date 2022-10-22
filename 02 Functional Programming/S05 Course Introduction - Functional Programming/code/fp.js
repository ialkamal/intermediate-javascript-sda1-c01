console.log("Functional Programming");
console.log("######");

// Input --> BLACK BOX --> Output
// Object Freeze
// Object assign or spread operator to copy

var dino = [];

Object.freeze(dino);

function myAdd(x, y, arr) {
  //const myArray = Object.assign([], arr);
  const myArray = [...arr];
  myArray.push({ x: 1 });
  console.log("myArray: ", myArray, "dino: ", dino);
  return x + y;
}

//Function chaining
// input --> Box1 --> Box2 --> Box3 --> output

const add = (x, y) => x + y;
const mul = (x) => 5 * x;
const conv = (x) => `The output is: ${x}`;

console.log(conv(mul(add(2, 3))));

//map, filter, reduce, includes, find, forEach
const arr = [1, 2, 3, 4, 5];

//Builtin JavaScript MAP
const newArr = arr.map((x) => x + 1);

// Our own defined MAP [strict functional using recursion]
Array.prototype.myMap = function (cb) {
  const input = [...this];
  const output = [];

  return (function rec(cbArray) {
    // stop condition
    if (cbArray.length === 0) return output;

    //recursive process
    output.unshift(cb(cbArray[cbArray.length - 1], cbArray.length - 1, this));

    cbArray.pop();

    return rec(cbArray);
  })(input);
};

//Our own defined MAP [loose functional using loops]

function myMap(arr, cb) {
  const input = [...arr];
  const output = [];

  for (el of input) {
    output.push(cb(el));
  }
  return output;
}
