const pokeApi = {

} //declarando o objeto para guardar as informações do pokemon em especifico

function convertPokeApiToClass (pokeDetail){
    const pokemon = new Pokemon();
    pokemon.name = pokeDetail.name;
    pokemon.image = pokeDetail.sprites.other.dream_world.front_default;

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
    const [type] = types;

    pokemon.types = types;
    pokemon.type = type;

    return pokemon;
}


pokeApi.getPokemonDetails = (pokemon) => {
    return fetch(pokemon.url)
    .then((response) => response.json())
    .then(convertPokeApiToClass)
}

//funcao que vai no url e retorna as informações pro arquivo main
pokeApi.getPokemons = () => {
    const limit = 50; 
    const offset = 0; 
    const url = 'https://pokeapi.co/api/v2/pokemon?offset=' + offset + '&limit=' + limit; 

    return fetch(url)
    .then((response) => response.json()) 
    .then((jsonBody) => jsonBody.results)
    .then((pokemonDetails) => pokemonDetails.map((pokeApi.getPokemonDetails)))
    .then((detailsRequests) => Promise.all(detailsRequests))
    .then ((pokemons) => pokemons)
    .catch((error) => console.log(error));
}

