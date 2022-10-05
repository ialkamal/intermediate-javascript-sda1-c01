const start = document.querySelector("#game_start");
const timer_label = document.getElementById("timer");

const ksa_button = document.getElementById("ksa_button");
const usa_button = document.getElementById("usa_button");

const ksa_score = document.getElementById("ksa_score");
const usa_score = document.getElementById("usa_score");

const breikan = document.getElementById("breikan");
const pepi = document.getElementById("pepi");

ksa_button.disabled = true;
usa_button.disabled = true;

start.addEventListener("click", function () {
  start.disabled = true;
  ksa_button.disabled = false;
  usa_button.disabled = false;
  let time = 30;
  const timer = setInterval(() => {
    --time;
    time !== 1
      ? (timer_label.textContent = `Time Left: ${time} seconds`)
      : (timer_label.textContent = `Time Left: ${time} second`);
  }, 1000);

  setTimeout(() => {
    alert(`KSA: ${ksa_score.textContent} US: ${usa_score.textContent}`);
    start.disabled = false;
    ksa_button.disabled = true;
    usa_button.disabled = true;
    ksa_score.textContent = 0;
    usa_score.textContent = 0;
    breikan.style.transform = `translateX(0px)`;
    pepi.style.transform = `translateX(0px)`;
    clearInterval(timer);
    timer_label.textContent = `Time Left: 30 seconds`;
  }, 30000);
});

// ksa_button.addEventListener("click", function () {
//   //Enter your code here
// });

// usa_button.addEventListener("click", function () {
//   //Enter your code here
// });

// Yousef Miskhas

ksa_button.addEventListener(
  "click",
  (function () {
    //initialize
    let score = 0;
    let required_clicks = getRandomNumber();
    let count_clicks = 0;
    let move = 0;

    // keep updating until a certain condition
    return function () {
      count_clicks += 1;
      breikan.style.transform = `translateX(${move++}px)`;

      if (count_clicks === required_clicks) {
        score++;
        ksa_score.textContent = score;
        required_clicks = getRandomNumber();
        count_clicks = 0;
      }
    };
  })()
);

usa_button.addEventListener(
  "click",
  (function () {
    //initialize
    let score = 0;
    let required_clicks = getRandomNumber();
    let count_clicks = 0;
    let move = 0;

    // keep updating until a certain condition
    return function () {
      count_clicks += 1;
      pepi.style.transform = `translateX(${move--}px)`;

      if (count_clicks === required_clicks) {
        score++;
        usa_score.textContent = score;
        required_clicks = getRandomNumber();
        count_clicks = 0;
      }
    };
  })()
);

function getRandomNumber() {
  // Returns a random number between 1-20
  return Math.floor(Math.random() * 20 + 1);
}

//Faisal Maghram
//              My Extension

// const clicker = {
//   ksaClicks: 0,
//   ksaMoves: 0,
//   usaClicks: 0,
//   usaMoves: 0,
// };

// function getRandom(max_num) {
//   return Math.floor(Math.random() * max_num + 1);
// }

// const randomizer = (function () {
//   let chance = getRandom(20);

//   return {
//     chance,
//     shuffler: function () {
//       this.chance = getRandom(20);
//     },
//   };
// })();

// // ----------------------------------------------------
// start.addEventListener("click", function () {
//   start.disabled = true;
//   ksa_button.disabled = false;
//   usa_button.disabled = false;
//   let time = 30;
//   const timer = setInterval(() => {
//     --time;
//     time !== 1
//       ? (timer_label.textContent = `Time Left: ${time} seconds`)
//       : (timer_label.textContent = `Time Left: ${time} second`);
//   }, 1000);

//   setTimeout(() => {
//     alert(`KSA: ${ksa_score.textContent} US: ${usa_score.textContent}`);
//     start.disabled = false;
//     ksa_button.disabled = true;
//     usa_button.disabled = true;
//     ksa_score.textContent = 0;
//     usa_score.textContent = 0;
//     breikan.style.transform = `translateX(0px)`;
//     pepi.style.transform = `translateX(0px)`;
//     clicker.ksaClicks = 0;
//     clicker.usaClicks = 0;
//     clicker.ksaMoves = 0;
//     clicker.usaMoves = 0;
//     clearInterval(timer);
//     timer_label.textContent = `Time Left: 30 seconds`;
//   }, 30000);
// });

// ksa_button.addEventListener("click", function () {
//   //Enter your code here

//   breikan.style.transform = `translateX(${clicker.ksaMoves++}px)`;
//   clicker.ksaClicks++;
//   if (clicker.ksaClicks === randomizer.chance) {
//     ksa_score.textContent = Number(ksa_score.textContent) + 1;
//     randomizer.shuffler();
//     clicker.ksaClicks = 0;
//   }
// });
// usa_button.addEventListener("click", function () {
//   //Enter your code here

//   pepi.style.transform = `translateX(-${clicker.usaMoves++}px)`;
//   clicker.usaClicks++;
//   if (clicker.usaClicks === randomizer.chance) {
//     usa_score.textContent = Number(usa_score.textContent) + 1;
//     randomizer.shuffler();
//     clicker.usaClicks = 0;
//   }
// });
