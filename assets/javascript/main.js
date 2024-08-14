const pokemonList = document.getElementById('cards');
const loadButton = document.getElementById('script-teste');

const firstGenRecords = 18;
const limit = 5;
let offset = 0;

function convertPokemonDetails(pokemon){
    return '<li class="pokemon '+ pokemon.type +'"> <p>' + pokemon.name + '</p><div class="details"><ol class="pokemon-type"> '+ pokemon.types.map((type) => '<li class="type '+ pokemon.type +'">' + type +'</li>').join(' ')  +' </ol><img src="' + pokemon.image + '" alt="'+ pokemon.name+'"></div></li>';
} 

function loadPokemonItens(offset, limit){
    pokeApi.getPokemons(offset,limit).then((pokemons = []) => {

        const newHtml = pokemons.map((pokemons) => convertPokemonDetails(pokemons)).join(' ');
        pokemonList.innerHTML += newHtml;
    })
    .catch((error) => console.log(error));
}

loadPokemonItens(offset, limit);

loadButton.addEventListener('click', () =>{
    offset += limit;
    const qntRecords = offset + limit;
    
    if(qntRecords >= firstGenRecords){
        const newLimit = firstGenRecords - offset;   
        loadPokemonItens(offset, newLimit);

        
        loadButton.parentElement.removeChild(loadButton);

    } else {
        loadPokemonItens(offset, limit);
    }

})

/* MANIPULAÇÃO DE REQUISIÇÕES USANDO FETCH, PROMISES AND CONVERTENDO OS RESULTADOS*/ 