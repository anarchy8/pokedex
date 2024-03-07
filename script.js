const pokeContainer = document.getElementById("poke-container");
const pokeInput = document.getElementById("poke-input");
const btnSearch = document.getElementById("btn-search");

const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#d6b3ff",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
  ice: "#e0f5ff ",
};

const pokeNum = 152;

const initPoke = async () => {
  for (let i = 1; i <= pokeNum; i++) {
    await getPoke(i);
  }
};

const getPoke = async (id) => {
  let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  let response = await fetch(url);
  let data = await response.json();
  createPokeBox(data);
};

const createPokeBox = (pokemon) => {
  let box = document.createElement("div");
  box.classList.add("poke-box");
  pokeContainer.appendChild(box);
   
  let name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  let id = pokemon.id.toString().padStart(3,"0");
  let type = pokemon.types[0].type.name; 
  let color = colors[type];

  box.style.backgroundColor = color;

  box.innerHTML = `
  <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png"
  />
  <h4 class="poke-name">${name}</h4>
  <p class="poke-id">#${id}</p>
  <p class="poke-type">Type:${type}</p>
  `;
};

initPoke();


pokeInput.addEventListener("input",(event)=>{
 
 let pokeNames = document.querySelectorAll(".poke-name");
 const search = pokeInput.value.toLowerCase();
  
 pokeNames.forEach((pokename)=>{
   
  pokename.parentElement.style.display = "block";

  if (!pokename.innerText.toLowerCase().includes(search)) {
    
    pokename.parentElement.style.display = "none";

  }

 })

})