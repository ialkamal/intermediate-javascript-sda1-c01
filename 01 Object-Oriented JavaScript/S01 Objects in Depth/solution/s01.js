const MACH_TO_KMH = 1235;

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
    const maxSpeed = Number(this["max speed"].match(/\d.?\d*/));
    console.log(maxSpeed);
    if (this.speed <= maxSpeed * MACH_TO_KMH - 10) {
      this.speed += 10;
    }
    this.print_speed(this.speed);
  },
  decrease: function () {
    if (this.speed >= 10) {
      this.speed -= 10;
    }
    this.print_speed(this.speed);
  },
  print_speed: function (speed) {
    console.log(`The speed now is: ${speed}`);
  },
};
typhoon.decrease();
typhoon.increase();
