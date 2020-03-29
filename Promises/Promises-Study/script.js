/* 
  * JAVASCRIPT É UMA LINGUAGEM SINGLE THREAD -- Processamento linha por linha;
  * I/O não bloqueante -- Ele não boqueia os processos;
  * 
  * lINGUAGEM ASSINCRONA
  * EX: Banco de dados --> Pegar o CEP
  *     CEP --> Os elementos são preenchidos nos campos dos Correios
  * 
  * PROMISES -- É uma funcionalidade que o javascript prove para gerenciar toda essa parte assincrona e assim se ter o controle do codigo com qualidade.
  * É um objeto javascript que dá um conjunto de funcionalidades para gerenciar e ter um melhor controle dessa parte assincrona da linguagem.
  * EX MENTAL: Espere este resultado para consultar o outro serviço.   
*/

/*-- DEMONSTRANDO O MODO SINCRONO --*/

console.log('Primeiro');

//É um agendador que se especifica que apos tantos milesegundos se executa tal função.
setTimeout( () => {
  console.log('Segundo');
}, 0);

console.log('Terceiro');

//A execução do segundo ficará por ultimo
/*
  O motor de que processa o javascript de fato não é assincrono e sim o eco sistema inteiro do javascript é o que o torna de modo assincrono.
*/

// -- PROMISES -- //

/*
  ---- APRESENTA 4 ESTADOS ----

  * Pendente      -- Ainda não realizado.
  * Realizado     -- Concluido.
  * Rejeitado     -- Erro no request
  * Estabelecida  -- Resultado final independente de realizado ou rejeitado.
  * 
  * Elas pertencem a uma fila especial (preferencial)
*/

//PROMISE JÁ RESOLVIDA -- Promise.resolve()//
/*
Uma função que é assincrona por fazer tal operação tem que retornar uma promise.
NOTA MENTAL: É como uma promessa de que se tratará o assincrono e será dito se foi realizada, rejeitada ou foi em pendente. 
*/
function jaRealizada() {
  return Promise.resolve('Concluido');
}

//PROMISE REJEITADA -- Promise.reject()//
function jaRejeitado() {
  return Promise.reject('Rejeitado');
}

//INVOCANDO UMA FUNÇÃO QUE RETORNA UM PROMISE
/*
  * .then() Utilizado quando a promise é resolvida 
  * No then se passa uma função que se quer chamar para quando a promise seja resolvida.
  * 
  * .catch() Utilizado para tratar quando a promise for rejeitada
*/
jaRealizada().then( (dado) => {
  console.log('Promise Resolve! Result:', dado);
})


jaRejeitado().catch( (dado) => {
  console.log('Promise Reject! Result:', dado);
})

// -- TRABALHANDO DE FORMA ASSINCRONA COMPLETA -- //
/*
  * new Promise() -> recebe uma função anonima com dois parametros resolve e reject
*/

function promiseCompleta() {
  return new Promise( (resolve, reject) => {
    resolve('Hello Concluida com sucesso!');
    reject('Bye... Failed!');
  });
}

promiseCompleta()
  .then( (message) => {
    console.log(message);
  })
  .catch( (err) => {
    console.log(err);
  }) 

//===============================================

//REALIZANDO UM REQUEST

//API
//https://viacep.com.br/ws/01001000/json/

/*
  * Metodo fetch() --> Realiza uma requisição que já retorna uma promisse
*/

fetch('https://viacep.com.br/ws/01001000/json/')
  .then( (data) => {
    console.log(data);
    
    //Transforma a resposta em formato json utilizando o metodo json que é um metodo assincrono 
    return data.json()
  })
  .then( (endereco) => {
    console.log(endereco);
  })

  //===============================================

  //REFATORANDO -- Pois é ruin utilizar funçoes anonimas

  function pegaCEP(cep) {
    return fetch(`https://viacep.com.br/ws/${cep}/json/`)
  }

  function extraiEndereco(data) {
    return data.json();
  }

  function imprimeEndereco(endereco) {
    console.log(endereco);
  }

  function trataErro(err) {
    console.log('Promise Failed...', err);
  }

  jaRealizada()
  .then(pegaCEP)
  .then(extraiEndereco)
  .then(imprimeEndereco)
  .catch(trataErro)
  //Sempre vai ser executada independente de rejecte ou resolve
  .finally( () => {
    console.log('Sempre executado');
  })

  //PROMISE ALL

  //é um modo de se invocar promises so que uma não pode depender do valor da outra.
  Promise.all([
    jaRealizada(),
    pegaCEP('promisesResolvidas'),
  ]).then( (promisesResolvidas) => {
    console.log(promisesResolvidas);
  })