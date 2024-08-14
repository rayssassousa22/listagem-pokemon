

function convertPokemonDetails(pokemon){
    return '<li class="pokemon '+ pokemon.type +'"> <p>' + pokemon.name + '</p><div class="details"><ol class="pokemon-type"> '+ pokemon.types.map((type) => '<li class="type '+ pokemon.type +'">' + type +'</li>').join(' ')  +' </ol><img src="' + pokemon.image + '" alt="'+ pokemon.name+'"></div></li>';
} 

const pokemonList = document.getElementById('cards');


 //pega as informaçoes do arquivo pokeApi e adiciona como manipulaveis no html
pokeApi.getPokemons().then((pokemons) => {

    const newList = pokemons.map((pokemons) => convertPokemonDetails(pokemons))

    const newPokemons = newList.join(' ');

    pokemonList.innerHTML += newPokemons;
})
.catch((error) => console.log(error));

/*innerHTML x appendChild

o innerhtml trata como texto
appendChild trata como objeto */



/* MANIPULAÇÃO DE REQUISIÇÕES USANDO FETCH, PROMISES AND CONVERTENDO OS RESULTADOS*/ 