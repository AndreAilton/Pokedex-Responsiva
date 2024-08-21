let offset = 0
let limit = 10
const ListPokemon = document.getElementById("ListPokemon");
const LoadButton = document.getElementById("PokemonLoad")

function convertType(pokemonTypes) {
    return pokemonTypes.map(
        slot =>  ` <h2 class="PokemonT ${slot['type']['name']}"> ${slot['type']['name']}</h2> `

        
    )
}

function Htmlpokemon(pokemon) {
    return `
    <li>             
        <div class="PokemonB ${'tipo pokemon'}">
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
            
    </li>`                   } 

{/* <h2 class="PokemonT">${pokemon['types']['0']['type']['name']}</h2> */}

function loadPokemon(offset,limit){
pokeApi.getPokemons(offset,limit).then((pokemons = []) => {
    ListPokemon.innerHTML += pokemons.map(Htmlpokemon).join('') })
    
}

LoadButton.addEventListener('click',() => {
    offset += limit
    loadPokemon(offset,limit)
    
})


if (offset == 0 ) {
    loadPokemon()
}