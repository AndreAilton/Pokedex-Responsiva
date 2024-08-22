let offset = 0
let limit = 10
const ListPokemon = document.getElementById("ListPokemon");
const LoadButton = document.getElementById("PokemonLoad");
const Insert = document.getElementById("InsertHere");


const pokemonImage = document.querySelector('.Pokemon__image');
const pokemonName = document.querySelector('.pokemon__name');
const pokemonNumber = document.querySelector('.pokemon__number');
const input = document.querySelector('.input__search');
const form = document.querySelector('.SearchP');

const buttonup = document.querySelector('.up');
const buttondown = document.querySelector('.down');
const buttonleft = document.querySelector('.left');
const buttonright = document.querySelector('.right');

let searchPokemon = 1;

function convertType(pokemonTypes) {
    return pokemonTypes.map(
        slot =>  ` <h2 class="PokemonT ${slot['type']['name']}"> ${slot['type']['name']}</h2> `

    )
}

function Htmlpokemon(pokemon) {
    return `
        <div class="PokemonB ${pokemon['types']['0']['type']['name']}" id=${pokemon.id}>
                <div class="circleP">
                    <!-- Insira Imagem -->
                    <img src="${pokemon.sprites.front_default}" alt="">
                </div>
                <div class="PokemonN">
                    <!-- Inserir Nome -->
                    <h1>${pokemon.name}</h1>
                    <div class="PokemonT">
                        <!-- Inserir Tipos -->
                        ${convertType(pokemon.types).join('')}
                        
                    </div>
                </div>
            </div>
            `
 } 



function loadPokemon(offset,limit){
pokeApi.getPokemons(offset,limit).then((pokemons = []) => {
    ListPokemon.innerHTML += pokemons.map(Htmlpokemon).join('') })
    
}

LoadButton.addEventListener('click',() => {
    offset += limit
    loadPokemon(offset,limit)
    ListButton()
    
})


if (offset == 0 ) {
    loadPokemon()
}

const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  
    if (APIResponse.status === 200) {
      const data = await APIResponse.json();
      return data;
    }
  }


const renderPokemon = async (pokemon) => {

    pokemonName.innerHTML = 'Loading...';
    pokemonNumber.innerHTML = '';
  
    const data = await fetchPokemon(pokemon);
  
    if (data) {
      pokemonImage.style.display = 'block';
      pokemonName.innerHTML = data.name;
      pokemonNumber.innerHTML = data.id;
      pokemonImage.src = data.sprites.other.showdown.front_default;
      input.value = '';
      searchPokemon = data.id;
    } else {
      pokemonImage.style.display = 'none';
      pokemonName.innerHTML = 'Not found :c';
      pokemonNumber.innerHTML = '';
    }
  }
  

form.addEventListener('submit', (event) => {
event.preventDefault();
renderPokemon(input.value.toLowerCase());
});

buttonleft.addEventListener('click', () => {
  if (searchPokemon > 1) {
    searchPokemon -= 1;
    renderPokemon(searchPokemon);
  }
});

buttonright.addEventListener('click', () => {
  searchPokemon += 1;
  renderPokemon(searchPokemon);
});

buttondown.addEventListener('click', () => {
    if (searchPokemon > 10) {
      searchPokemon -= 10;
      renderPokemon(searchPokemon);
    }
  });
  
  buttonup.addEventListener('click', () => {
    searchPokemon += 10;
    renderPokemon(searchPokemon);
  });


  function ListButton(){
    setTimeout(() => {
        // Seu código para buscar os itens
        const List = document.querySelector('.ListPokemon');
        const filhos = List.children;
        console.log(List)
    
        for (let i = 0; i < filhos.length; i++) {
            console.log(i)
            filhos[i].addEventListener('click', function() {
                renderPokemon(filhos[i].id)
            });
        }
    }, 500);
    
    }


renderPokemon(searchPokemon);





