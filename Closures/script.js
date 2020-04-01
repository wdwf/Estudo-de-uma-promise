
/*
  * CLOSURES

  --Caracteristicas--

  *Se aproveita da propriedade Lexical escope

  ** Que é a habilidade da engine javascript que permite uma function dentro de outra function, enxergar, ter visibilidade das variaveis declaradas na function pai, externo

  * Memorização do escopo

  ** Outra caracteristica é a capacidade que um escopo criado ex: uma function que se como filha outra function e nessa filha se utiliza uma variavel declarada no escopo pai.
  Essa function consegue memorizar o escopo onde ela foi criada. então toda vez que exercutar essa function interna ela vai se lembrar qual é o valor dessa variavel mesmo que essa esteja fora de seu escopo.
*/

function imprimeNome() {
  let nome = 'Bob';
  return function() {
    return nome
  }
}

let func = imprimeNome();
console.log(func());


function minhaBiblio() {

  function auxiliar(valor) {
    return 10 + valor;
  }

  //variaveis e funçoes Privadas
  return {
    add5() {
      return auxiliar(5);
    },
    add7() {
      return auxiliar(7);
    }
  }
}

let biblioteca = minhaBiblio();
console.log(biblioteca);

console.log(biblioteca.add5());
console.log(biblioteca.add7());

//==============
function imprimeNomeCompleto(nome) {
  return function() {
    console.log(nome, 'Ferreira');
  }
}

function inicializa() {
  let nome = 'Weslley';
  //Funçao que executa algo apenas uma vez apos determinado tempo
  setTimeout(imprimeNomeCompleto(nome), 1000)
}

inicializa();

