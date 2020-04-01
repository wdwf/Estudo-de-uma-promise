let cor = "Amarelo"

//Objeto

let lista = {
  tarefa: 'Cozinhar',
  item: 'Macarrão',
  resultado: 'Espaguete',
  teste: 'blabla',
  cor,
  //Array
  colecao: {
    pedras: ['Escuras', 'Redondas', 'Achatadas'],
    figurinhas: ['Yu-gi-ho', 'Pokemon', 'dungeondragon']
  }
}

console.log(`Eu preciso ${lista.tarefa} um ${lista.item} pra conseguir um ${lista.resultado}`);


//Função
let usuario2 ={
  //1° Tipo
  digaOI: (nome) => {
    return `Hello World ${nome}`
  },
  //2° Tipo
  digaBye(nome) {
    return `Bye ${nome}`
  }
}

console.log(usuario2);
console.log(usuario2.digaOI('Wesley'));

console.log('-------');

console.log(usuario2);
console.log(usuario2.digaBye('Wesley'));

console.log('-----------------------');

//Adicionando novas chaves
lista.ano = 2020;

console.log(lista);
console.log(lista.ano);

console.log('-----------------------');

//alterando valores das chaves
lista.tarefa = "Comer"
console.log(lista.tarefa);

console.log('-----------------------');



//Apagando novas chaves
delete lista.teste;

console.log(lista.teste);

console.log('-----------------------');

//Array em um objeto
lista.hobbies = ['Desenhar', 'Programar', 'Ler'];

console.log(lista);

console.log('-----------------------');

lista.competencias = {
  linguagens: ['Javascript', 'Python', 'PHP'],
  Leitura: ['Caveira de cristal', 'A mauldição do tigre', 'Interferencia']
}

console.log(lista);

console.log('-----------------------');

//=================================================
//Itens que levam infens(-) ou caracters especiais
let obj1 = {
  primeiroItem: 'dado',
  'Segundo-Item': 'tesoura'
}

console.log(obj1.primeiroItem);
console.log(obj1['Segundo-Item']);

//=================================================

//Merge(unificação de objetos) de objetos

let usuario3 = {
  nome: 'Bob',
  idade: 26
};

var extraInfo = {
  pais: 'Brasil',
  estado: 'São paulo'
}

//--metodo .assign
/*
  * Este metodo cria um objeto ou altera um objeto ja definido 
  * Ele recebe 2 ou mais parametros:
  *   1° - Objeto alvo -- Nota: Passando um objeto vazio '{}' ele quer dizer que se quer criar um objeto novo
  *   2° - Outros parametros que se quer mergiar 
  * Por preferencia sempre gere um objeto novo
*/
let novoUsuario = Object.assign({}, usuario3, extraInfo);
let novoUsuario2 = Object.assign(usuario3, extraInfo);

console.log('novoUsuario', novoUsuario);
console.log('novoUsuario2', novoUsuario2); 
console.log(usuario3);//Usuario3 alterado permanentemente

//
//Forma curta de mergiar um objeto

let novoUsuario3 = {
  //Espred - espalhar
  ...usuario3,
  ...extraInfo,
  sexo: 'M',
  profissao: 'Programador'

}

console.log(novoUsuario3);
//=================================================

//Getters e Setters
let usuario4 = [
  {
    nome: 'Iris',
    idade: 22
  },
  {
    nome: 'Jão',
    idade: 21
  },
  {
    nome: 'Mari',
    idade: 21
  },
]

console.log(usuario4);
console.log(usuario4[0].nome);

let usuario5 = {
  posicao: 0,
  //RETORNAR UM VALOR
  get atual() {
    return usuario4[this.posicao] 
  },
  //DEFINIR UM VALOR
  set atual(posicao) {
    //O valor passado no parametro vai sobscrever a posição do obj
    this.posicao = posicao
  },
  proximo() {
    ++this.posicao;
  },
  anterior() {
    --this.posicao;
  },

}

/*
  NOTA: Pode se observar que o atual no objeto representa uma função já na chamada dele é passado apenas como um obj comun. Para fazer isso é necessario passar na definição da função dentro do objeto a palavra 'get'. Assim toda vez que invocada a função não é necessario passar os parametros da mesma

*/
console.log(usuario5.atual); //{nome: iris...}
usuario5.proximo()

console.log(usuario5.atual); //{nome: Jão}
usuario5.proximo()

console.log(usuario5.atual); //{nome: Mari}
usuario5.anterior()

console.log(usuario5.atual); //{nome: Jão}
usuario5.atual = 0;

console.log(usuario5.atual); //{nome: iris...}
usuario5.atual = 2;

console.log(usuario5.atual); //{nome: Mari}


//=================================================
//Iterando sobre um array de objetos
let usuario = [
  {
    nome: 'Weslley',
    idade: 21,
    email: 'info@email.com' 
  },
  {
    nome: 'Bob',
    idade: 22,
    email: 'info@email.com' 
  },
  {
    nome: 'lis',
    idade: 22,
    email: 'info@email.com' 
  }

]

for(let item of usuario) {
    console.log(item.nome);
    console.log(item.idade);
    console.log(item.email);
    console.log('-----------------');
}
