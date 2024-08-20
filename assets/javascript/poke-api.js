const pokeApi = {} //declarando o objeto para guardar as informações do pokemon em especifico

function convertPokeApiToClass (pokeDetail){
    const pokemon = new Pokemon();
    pokemon.id = pokeDetail.id;
    pokemon.name = pokeDetail.name;
    pokemon.image = pokeDetail.sprites.other.dream_world.front_default;

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
    const [type] = types;

    pokemon.types = types;
    pokemon.type = type;

    pokemon.weight = pokeDetail.weight;
    pokemon.height = pokeDetail.height;
    
    return pokemon;
}


pokeApi.getPokemonDetails = (pokemon) => {
    return fetch(pokemon.url)
    .then((response) => response.json())
    .then(convertPokeApiToClass)
}


pokeApi.getPokemons = (offset = 0, limit = 5) => {

    const url = 'https://pokeapi.co/api/v2/pokemon?offset=' + offset + '&limit=' + limit; 

    return fetch(url)
    .then((response) => response.json()) 
    .then((jsonBody) => jsonBody.results)
    .then((pokemonDetails) => pokemonDetails.map((pokeApi.getPokemonDetails)))
    .then((detailsRequests) => Promise.all(detailsRequests))
    .then ((pokemons) => pokemons)
    .catch((error) => console.log(error));
}

pokeApi.getPokemonsDisplayDetails = (offset = 0, limit = 1) => {

    const url = 'https://pokeapi.co/api/v2/pokemon?offset=' + offset + '&limit=' + limit; 

    return fetch(url)
    .then((response) => response.json()) 
    .then((jsonBody) => jsonBody.results)
    .then((pokemonDetails) => pokemonDetails.map((pokeApi.getPokemonDetails)))
    .then((detailsRequests) => Promise.all(detailsRequests))
    .then ((pokemons) => pokemons)
    .catch((error) => console.log(error));
}