
function convertPokemonDetails(pokemon){
    return '<li class="pokemon"> <p>' + pokemon.name + '</p><div class="details"><ol class="pokemon-type"><li class="type">Fire</li></ol><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg" alt="'+ pokemon.name+'"></div></li>';
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