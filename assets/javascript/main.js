const limit = 15; 
const offset = 0; 
const url = 'https://pokeapi.co/api/v2/pokemon?offset=' + offset + '&limit=' + limit; 


// faz aquela estrutura html dos cards
function convertPokemonDetails(pokemon){
    return '<li class="pokemon"> <p>' + pokemon.name + '</p><div class="details"><ol class="pokemon-type"><li class="type">Fire</li></ol><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg" alt="Charizard"></div></li>';
} 

const pokemonList = document.getElementById('cards');

/*innerHTML x appendChild

o innerhtml trata como texto
appendChild trata como objeto */

fetch(url ) //função pra pedir isso tudo e retornar minha respostas

    .then((response) => response.json()) 
    .then((jsonBody) => jsonBody.results) //devolve apenas os resultados e passa pro próximo then as caractérisitica de cada pokemon
    .then((pokemons) => {
        
        //percorre cada pokemon do meu limite substituindo as informações
        for(let i = 0; i < pokemons.length; i++){
            const pokemon = pokemons[i];
            pokemonList.innerHTML += convertPokemonDetails(pokemon);
        }
    })
    .catch((error) => console.log(error))
    .finally(function(){
        console.log('concluído');
    }); 