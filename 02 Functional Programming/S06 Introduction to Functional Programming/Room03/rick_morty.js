// counter to add the div in initialization
let counter = 0;

document.getElementById('gen').addEventListener('click', getCharacter)
const list = document.getElementById('list');
const characters = document.getElementById('characters');

async function getCharacter() {
  // counter increment
  counter = counter + 1;
  const link = "https://rickandmortyapi.com/api/character/" + counter;
  
  // fetch character
  const char = await fetch(link)
    .then(result => result.json());
  const ichar = Immutable.Map(char);
  
  // initialize div
  if (counter == 1) {
    const container = document.createElement('div');
    
    const sep = document.createElement('p');
    sep.innerHTML = '#############';
    
    list.appendChild(container)
    list.appendChild(sep)
  }
  
  // add name to page
  const name = document.createElement('h3');
  name.innerHTML = ichar.get('name');
  list.childNodes[0].appendChild(name)
  
  // create name element
  const name2nd = document.createElement('h3');
  name2nd.innerHTML = ichar.get('name');
  
  // create image element
  const img = document.createElement('img');
  img.src = ichar.get('image');
  
  // create location element
  const location = document.createElement('p');
  location.innerHTML = ichar.get('location').name;
  
  //
  const div = document.createElement('div');
  div.appendChild(name2nd)
  div.appendChild(img)
  div.appendChild(location)
  
  characters.appendChild(div)
}