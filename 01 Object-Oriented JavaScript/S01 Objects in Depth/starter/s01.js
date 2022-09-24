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
  increase: function () {
    this.speed += 10;
    console.log(`The speed now is: ${this.speed}`);
  },
};

//Copying Objects
const tornado = { ...typhoon };
const f15 = Object.assign({}, typhoon);

console.log("Typhoon: ", typhoon);
console.log("Tornado: ", tornado);
console.log("F15: ", f15);

tornado.name = "Big Fighter";

console.log("Tornado: ", tornado);
console.log("Typhoon: ", typhoon);
console.log("F15: ", f15);
