const pokemonBasicDisplay = document.getElementById('pokemon-basic-info');
const pokemonMoreDisplay = document.getElementById('pokemon-more-content');

function displayPokemonBasicInfo (pokemon){
    return '<div class="control-setting"><a href="/index.html"><p><</p></a></div> <div id="pokemon"><h1>' + pokemon.name + '</h1> <div class="pokemon-type align-types ' + pokemon.type + '">' +  pokemon.types.map((type) => '<li class="'+ pokemon.type +'">' + type +'</li>').join(' ') + '</div></div> <div class="poke-image"><img src="' + pokemon.image+ '" alt="' + pokemon.name + '"></div>'
}

function displayPokemonDetailInfo(pokemon){
    return '<h2>About</h2><div class="general-info"><div class="g-label"><ul><li>Height</li><li>Weight</li></ul></div><div class="g-responses"><ul><li>' + pokemon.height + '</li><li>' + pokemon.weight + '</li></ul></div></div><button class="interactive-button '+ pokemon.type+'">Know More!</button>'
}

function showPokemonFullScreen(){
    pokeApi.getPokemonsDisplayDetails().then((pokemons = []) => {

        const newDetails = pokemons.map((pokemons) => displayPokemonBasicInfo(pokemons)).join(' ');
        pokemonBasicDisplay.innerHTML += newDetails;

    })
    pokeApi.getPokemonsDisplayDetails().then((pokemons = []) => {
        const moreInfo = pokemons.map((pokemons) => displayPokemonDetailInfo(pokemons)).join(' ');
        pokemonMoreDisplay.innerHTML+= moreInfo;
    })
    .catch((error) => console.log(error));
}

showPokemonFullScreen();