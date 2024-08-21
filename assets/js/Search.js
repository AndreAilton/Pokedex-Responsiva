const pokeApi = {}



pokeApi.getPokemons = (offset=0, limit=10) => {
    const URL = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(URL)
        .then(response => response.json())
        .then(array => array.results)
        .then(pokemons => pokemons.map(pokemon => fetch(pokemon.url).then(response => response.json())))
        .then(completepokemon => Promise.all(completepokemon))
}

