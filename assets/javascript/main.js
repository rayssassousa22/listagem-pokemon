const limit = 15; //limite de respostas que eu quero
const offset = 0; //paginação de pokemons
const url = 'https://pokeapi.co/api/v2/pokemon?offset=' + offset + '&limit=' + limit; //endereço da qual estou tirando minhas respostas

fetch(url) //função pra pedir isso tudo e retornar minha respostas

    .then(function (response){ // para evitar encadeamento esse then pega a resposta
        return response.json();
    })
    .then(function(jsonBody){ //esse then recebe a resposta e converte em modificável
        console.log(jsonBody);
    })
    .catch(function (error) {//funçãopara caso dar errado
        console.log(error);
    })
    .finally(function(){ //função final que irá ocorrer independente da resposta da promise
        console.log('concluído');
    }); 

//esse é o processo de requisição pra um servidor e ele me dando uma resposta, e interface básica de requisição de informações
