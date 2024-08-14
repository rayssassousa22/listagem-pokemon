const pokeApi = {

} //declarando o objeto para guardar as informações do pokemon em especifico


//funcao que vai no url e retorna as informações pro arquivo main
pokeApi.getPokemons = () => {
    const limit = 10; 
    const offset = 0; 
    const url = 'https://pokeapi.co/api/v2/pokemon?offset=' + offset + '&limit=' + limit; 

    return fetch(url)
    .then((response) => response.json()) 
    .then((jsonBody) => jsonBody.results)
    .catch((error) => console.log(error));
}