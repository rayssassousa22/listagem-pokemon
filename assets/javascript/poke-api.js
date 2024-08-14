const pokeApi = {

} //declarando o objeto para guardar as informações do pokemon em especifico
pokeApi.getPokemonDetails = (pokemon) => {
    return fetch(pokemon.url)
    .then((response) => response.json());
}

//funcao que vai no url e retorna as informações pro arquivo main
pokeApi.getPokemons = () => {
    const limit = 5; 
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

