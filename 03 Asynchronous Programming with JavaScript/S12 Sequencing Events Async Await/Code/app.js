const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = (canvas.width = 600);
const CANVAS_HEIGHT = (canvas.height = 600);

const playerImage = new Image();
playerImage.src = "./shadow_dog.png";
const spriteWidth = 575;
const spriteHeight = 523;

let gameInc = 0;
let spriteSpeed = 5;
let playerState = document.getElementById("animations").value;

document.getElementById("animations").addEventListener("click", (e) => {
  playerState = e.target.value;
});

const spriteAnimations = [];
const animationStates = [
  {
    name: "idle",
    frames: 7,
  },
  {
    name: "jump",
    frames: 7,
  },
  {
    name: "fall",
    frames: 7,
  },
  {
    name: "run",
    frames: 9,
  },
  {
    name: "dizzy",
    frames: 7,
  },
  {
    name: "sit",
    frames: 5,
  },
  {
    name: "roll",
    frames: 7,
  },
  {
    name: "bite",
    frames: 7,
  },
  {
    name: "ko",
    frames: 12,
  },
  {
    name: "getHit",
    frames: 4,
  },
];

animationStates.forEach((state, index) => {
  let frames = {
    loc: [],
  };

  for (let i = 0; i < state.frames; i++) {
    positionX = spriteWidth * i;
    positionY = spriteHeight * index;
    frames.loc.push({ x: positionX, y: positionY });
  }

  spriteAnimations[state.name] = frames;
});

console.log(spriteAnimations);

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  let position =
    Math.floor(gameInc / spriteSpeed) %
    spriteAnimations[playerState].loc.length;

  ctx.drawImage(
    playerImage,
    position * spriteWidth,
    spriteAnimations[playerState].loc[position].y,
    spriteWidth,
    spriteHeight,
    0,
    0,
    CANVAS_WIDTH,
    CANVAS_HEIGHT
  );

  gameInc++;
  requestAnimationFrame(animate);
}

animate();
