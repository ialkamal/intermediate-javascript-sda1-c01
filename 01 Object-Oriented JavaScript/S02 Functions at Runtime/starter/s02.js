// // Objects

// //Create

// const user1 = {};
// const user2 = Object.create({});

// //Copy

const typhoon = {
  name: "Eurofighter Typhoon",
  length: 15.96,
  height: 5.29,
  wingspan: 11,
  "empty load": 10000,
  "max speed": "Mach 1.8",
  "max altitude": 16764,
  origin: ["United Kingdom"],
  in_raf: true,
  speed: 0,
};

// const tornado1 = { ...typhoon };
// const tornado2 = Object.assign({}, typhoon);

// //Read

// console.log(tornado1.height);
// console.log(tornado2["name"]);

// //Compare
// console.log(tornado1 === tornado2);

// //Use JSON Stringify
// console.log(JSON.stringify(tornado1) === JSON.stringify(tornado2));

// console.log(JSON.stringify(tornado1));

// //Delete
// delete tornado1.name;
// console.log(tornado1);

//Add new property
// typhoon.max_distance = 1000;
// console.log(typhoon);

//---
// // Arrays
// const arr1 = [];
// const arr2 = new Array();
// console.log(typeof arr1);

// const arr3 = new Array(1, 2, 3, 4, 5);
// console.log(arr3);

// //Tricky
// const arr4 = new Array(10);
// console.log(arr4);

// arr4[0] = "Hi";
// console.log(arr4);

// const my_set = new Set([1, 2, 1, 5, 5]);
// console.log(my_set);

// const set_array = Array.from(my_set);
// console.log(set_array);

// ///

// const usa_team = [
//   "Turner",
//   "Yedlin",
//   "Long",
//   "Zimmerman",
//   "Dest",
//   "Acosta",
//   "McKennie",
//   "Adams",
//   "Pulisic",
//   "Pepi",
//   "Reyna",
// ];
// const usa_substitutes = [
//   "Morris",
//   "Vines",
//   "Johnson",
//   "delaTorre",
//   "Horvath",
//   "Sargent",
//   "Johnny",
//   "Cannon",
//   "Palmer-Brown",
// ];

// const ksa_team = [
//   "Alyami",
//   "Alghannam",
//   "Alamri",
//   "Albuhayhi",
//   "Abdulhamid",
//   "Alhassan",
//   "Sharahili",
//   "Aldawsari",
//   "Alnajei",
//   "Bahbri",
//   "Albrikan",
// ];
// const ksa_substitutes = ["Madu", "AlQarni", "AlNashri", "Alaqidi", "Camara"];

// //console.table(usa_team);

// usa_team.substitute = function (player_out, player_in) {
//   usa_team[usa_team.indexOf(player_out)] = player_in;
//   usa_substitutes[usa_substitutes.indexOf(player_in)] = player_out;
// };

// console.table(usa_team);
// console.table(usa_substitutes);

// usa_team.substitute("Turner", "Morris");

// console.table(usa_team);
// console.table(usa_substitutes);

// usa_team.pop();

// console.table(usa_team);

// usa_team.shift();

// console.table(usa_team);

// //For Looping

// // for (let i = 0; i < usa_team.length; i++) {
// //   console.log(usa_team[i]);
// // }
// // console.log("-----------");
// // for (let player in usa_team) {
// //   console.log(usa_team[player]);
// // }
// // console.log("-----------");
// // for (let player of usa_team) {
// //   console.log(player);
// // }
// console.log("-----------");
// usa_team.forEach(function (player, index) {
//   console.log(player, index);
// });
// console.log("-----------");
// const usa_details = usa_team.map((player) => {
//   return {
//     name: player,
//     defence: Math.floor(Math.random() * 100 + 1),
//     offence: Math.floor(Math.random() * 100 + 1),
//   };
// });

// console.table(usa_details);
// console.log("-----------");

// const top_offence = usa_details.filter((player) => player.offence > 70);

// console.table(top_offence)

// console.log("-----------");

// let team_defence = usa_details.reduce(
//   (result, player) => {
//     return result + player.defence;},
//   0
// );
// console.table(team_defence)

//Functions

// function add1(x, y) {
//   return x + y;
// }
// console.log(add1(2, 3));
// console.log("-----------");

// //Function Expression
// const add2 = function (x, y) {
//   return x + y;
// };
// console.log(add2(2, 3));
// console.log("-----------");

// //Arrow Function
// const add3 = (x, y) => x + y;
// console.log(add3(2, 3));
// console.log("-----------");

// const add4 = (x, y) => {
//   console.log(x, y);
//   return x + y;
// };
// console.log(add4(2, 3));
// console.log("-----------");

//Functions First Class
//op is higher order function
//cb is called a callback function
// function op(cb, ...args) {
//   return cb(args);
// }

// //Callback1
// function add(...args) {
//   let result = 0;
//   for (val of args[0]) {
//     result += val;
//   }
//   return result;
// }

// //Callback2
// function mul(...args) {
//   let result = 1;
//   for (val of args[0]) {
//     result *= val;
//   }
//   return result;
// }
// console.log(op(add, 5, 2, 3));
// console.log(op(mul, 5, 2, 3));
// console.log("-----------");

//Scope

//Block Scope
// if (1 > 0) {
//   const x_block = 5;
//   console.log("X Inside the block: ", x_block);
// }

// console.log("X Outside the block: ", x_block);

//Function Scope
// let a = 5;

// function f1(arg1) {

//   let b = a + arg1;
//   return f2(3);
//   function f2(arg2) {
//     let c = a + b + arg1 + arg2;
//     return c;
//   }
// }

// console.log(f1(2));

//Closure
function inc(intial_value) {
  let count = intial_value;
  return function increment() {
    ++count;
    return count;
  };
}

const increase = inc(0);

console.log(increase());
console.log(increase());
console.log(increase());
console.log(increase());

console.log("-----------");

//IIFE
const decrease = (function (num) {
  let count = num;
  return function decrement() {
    --count;
    return count;
  };
})(10);

console.log(decrease());
console.log(decrease());
console.log(decrease());
console.log(decrease());
