const limit = 15; //limite de respostas que eu quero
const offset = 0; //paginação de pokemons
const url = 'https://pokeapi.co/api/v2/pokemon?offset=' + offset + '&limit=' + limit; //endereço da qual estou tirando minhas respostas

fetch(url ) //função pra pedir isso tudo e retornar minha respostas

    .then((response) => response.json()) //isso é uma arrowfunction, simplificação do encadeamento fetch
    .then((jsonBody) => console.log(jsonBody))
    .catch((error) => console.log(error))
    .finally(function(){
        console.log('concluído');
    }); 

//esse é o processo de requisição pra um servidor e ele me dando uma resposta, e interface básica de requisição de informações
