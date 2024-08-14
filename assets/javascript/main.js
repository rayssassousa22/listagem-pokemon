
//pega os types de cada pokemon
function convertPokemonType (pokemonTypes){
    return pokemonTypes.map((typeSlot) => {
        return '<li class="type">' +  typeSlot.type.name + '</li>'
    })
}

function convertPokemonDetails(pokemon){
    return '<li class="pokemon"> <p>' + pokemon.name + '</p><div class="details"><ol class="pokemon-type"> '+ convertPokemonType(pokemon.types).join('') +' </ol><img src="' + pokemon.sprites.other.dream_world.front_default + '" alt="'+ pokemon.name+'"></div></li>';
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