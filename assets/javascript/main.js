const limit = 15; //limite de respostas que eu quero
const offset = 0; //paginação de pokemons
const url = 'https://pokeapi.co/api/v2/pokemon?offset=' + offset + '&limit=' + limit; //endereço da qual estou tirando minhas respostas

fetch(url).then(function (reponse){
    console.log(reponse);
}); //função pra pedir isso tudo e retornar minha respostas

//esse é o processo de requisição pra um servidor e ele me dando uma resposta