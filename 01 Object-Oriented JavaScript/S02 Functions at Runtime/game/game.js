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

ksa_button.addEventListener("click", function () {
  //Enter your code here
});

usa_button.addEventListener("click", function () {
  //Enter your code here
});
