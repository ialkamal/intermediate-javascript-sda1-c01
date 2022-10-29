import { Map, List } from "immutable";

// rick and morty character api
const apiURL = "https://rickandmortyapi.com/api/character";

let id = 1;

// fetch a character from the api
const fetchCharacter = async () => {
  const response = await fetch(`${apiURL}/${id}`);
  const data = await response.json();
  id++;
  return data;
};

// create immutable list
let characters = List();

// button event listerner
const button = document.getElementById("btn");
button.addEventListener("click", () => {
  fetchCharacter().then((character) => {
    characters = characters.push(Map(character));
    // render a list of characters
    renderCharacters(characters);
    renderCharacterNames(characters);
  });
});

// render a list of characters
const renderCharacters = (characters) => {
  const root = document.getElementById("characters");
  root.innerHTML = "";

  characters.forEach((character) => {
    const div = document.createElement("div");
    div.innerHTML = `
        <h2>${character.get("name")}</h2>
        <img src="${character.get("image")}" />
        <p> ${character.get("location").name} </p>
        `;
    root.appendChild(div);
  });
};

// render character names as an unordered list
const renderCharacterNames = (characters) => {
  const ul = document.getElementById("list");
  ul.innerHTML = "";
  characters.forEach((character) => {
    const li = document.createElement("li");
    li.innerHTML = character.get("name");
    ul.appendChild(li);
  });
};
