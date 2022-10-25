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

//imperative

let a = 2;
let b = 3;
let c = a + b;
let d = c * 5;
let e = `The result of the imperative program is: ${d}`;
console.log(e);

//Object Oriented

class Operations {
  add(a, b) {
    return a + b;
  }

  mul(x) {
    return 5 * x;
  }

  conv(num) {
    return `The result of the OO program is: ${num}`;
  }
}

const op = new Operations();
const r1 = op.add(2, 3);
const r2 = op.mul(r1);
const r3 = op.conv(r2);
console.log(r3);

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

//Our own defined Filter

Array.prototype.myFilter = function (cb) {
  const ArrCopy = [...this];
  const result = [];

  return (function rec(cbArray) {
    if (cbArray.length === 0) return result;
    if (cb(cbArray[cbArray.length - 1], cbArray.length - 1, this))
      result.unshift(cbArray[cbArray.length - 1]);
    cbArray.pop();
    return rec(cbArray);
  })(ArrCopy);
};

//Our own defined Reduce

Array.prototype.myReduce = function (cb, initial) {
  const ArrCopy = [...this];
  let total = initial;

  return (function rec(cbArray) {
    if (cbArray.length === 0) return total;
    total = cb(total, cbArray[cbArray.length - 1], cbArray.length - 1, this);
    cbArray.pop();
    return rec(cbArray);
  })(ArrCopy);
};
