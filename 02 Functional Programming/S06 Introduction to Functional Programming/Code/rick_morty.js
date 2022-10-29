// Get character list from Rick & Morty API

let counter = 1;
let charsArray = Immutable.List();

const getCharacter = (id) => {
  return fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((res) => res.json())
    .then((res) => {
      return res;
    });
};

const list = document.getElementById("list");
const generateList = (characters) => {
  const card = document.createElement("div");
  characters.forEach((el) => {
    const name = document.createElement("h3");
    name.textContent = el.get("name");
    card.appendChild(name);
  });

  while (list.hasChildNodes()) list.lastChild.remove();

  const pTag = document.createElement("p");
  pTag.innerHTML = "#############";

  list.appendChild(card);
  list.appendChild(pTag);
};

const characters = document.getElementById("characters");
const generateCard = (character) => {
  const card = document.createElement("div");

  const name = document.createElement("h3");
  name.textContent = counter.toString() + ". " + character.get("name");
  card.appendChild(name);

  const image = document.createElement("img");
  image.src = character.get("image");
  card.appendChild(image);

  const location = document.createElement("p");
  location.textContent = character.get("location").name;
  card.appendChild(location);

  card.innt;
  characters.appendChild(card);
};

const btn = document.getElementById("btn");
btn.addEventListener("click", async () => {
  const char = await getCharacter(counter);
  charsArray = charsArray.push(Immutable.Map(char));
  generateList(charsArray);
  generateCard(Immutable.Map(charsArray.get(charsArray.size - 1)));
  counter++;
});
