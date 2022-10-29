let charList = Immutable.List();
let charCounter = -1;

async function get() {
  const requestURL = "https://rickandmortyapi.com/api/character";

  const request = new Request(requestURL);
  const response = await fetch(request);
  const rmChar = await response.json();

  return rmChar.results;
}

async function addCharacter() {
  const chars = await get();

  charCounter === 19 ? (charCounter = 0) : (charCounter += 1);
  const charResult = chars[charCounter];

  const newMap = Immutable.Map(charResult);
  charList = charList.push(newMap);

  const char = document.getElementById("char");

  //Create Character Card
  const card = document.createElement("div");

  const name = document.createElement("h3");
  name.innerHTML = newMap.get("name");
  card.appendChild(name);

  const photo = document.createElement("img");
  photo.src = newMap.get("image");
  card.appendChild(photo);

  const location = document.createElement("p");
  location.innerHTML = newMap.get("location").name;
  card.appendChild(location);

  char.appendChild(card);

  printList();
}

function printList() {
  const list = document.getElementById("char_list");

  const ul = document.createElement("ul");

  while (list.hasChildNodes()) list.lastChild.remove();

  charList.forEach((char) => {
    const li = document.createElement("li");
    li.innerHTML = char.get("name");
    ul.appendChild(li);
  });

  list.appendChild(ul);
}

document.getElementById("getCharbtn").addEventListener("click", addCharacter);
