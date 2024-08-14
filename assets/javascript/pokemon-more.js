const pokemonDisplay = document.getElementById('pokemon-basic-info');

function displayPokemonFullScreen (pokemon){
    return '<div class="control-setting"><a href="/index.html"><p><</p></a></div> <div id="pokemon"><h1>Bulbasaur</h1> <div class="pokemon-type"><p>Grass</p><p>Poison</p></div></div> <div class="poke-image"><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt=""></div>'
}

function showPokemonFullScreen(){
    pokeApi.getPokemonsDisplayDetails().then((pokemons = []) => {

        const newDeatils = pokemons.map((pokemons) => displayPokemonFullScreen(pokemons)).join(' ');
        pokemonDisplay.innerHTML += newDeatils;
    })
    .catch((error) => console.log(error));
}

showPokemonFullScreen();