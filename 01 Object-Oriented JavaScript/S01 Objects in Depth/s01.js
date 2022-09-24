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
    max = mach_to_kmh(Number(this["max speed"].split(" ")[1]));
    if (this.speed <= max) this.speed += 10;
    else this.speed = max;
    print_speed(this.speed);
  },
  decrease: function () {
    min = 0;
    if (this.speed >= 10) this.speed -= 10;
    else this.speed = 0;
    print_speed(this.speed);
  },
};

const tornado = {
  name: "Panavia Tornado",
  length: 16.72,
  height: 5.95,
  wingspan: 13.91,
  "empty load": 13890,
  "max speed": "Mach 2.34",
  "max altitude": 15240,
  origin: ["Italy", "United Kingdom", "Germany"],
  in_raf: true,
};

const f15 = {
  name: "McDonnell Douglas F-15 Eagle",
  length: 19.45,
  height: 5.65,
  "empty load": 20411,
  "max speed": "Mach 2.5",
  "max altitude": 19697,
  origin: ["United States of America"],
  in_raf: true,
};

const mach_to_kmh = (mach_speed) => mach_speed * 1234.8;
const print_speed = (speed) => console.log(`Speed is now: ${speed}`);

const jeddah_airshow = { planes: { typhoon, tornado, f15 }, count: 11 };

console.log("F15 Max Altitude: ", jeddah_airshow.planes.f15.origin[0]);

const quiz = {
  length: 10,
  difficulty: "easy",
};

//-------

//let exam = new Object();
const exam = Object.assign({}, quiz);

console.log("Quiz: ", quiz);
console.log("Exam: ", exam);

//--------

exam.length = 60;
exam.difficulty = "hard";

delete exam.length;

console.log("Exam: ", exam);
console.log("Quiz: ", quiz);
