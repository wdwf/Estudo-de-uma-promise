//destructuring

let novoUsuario = {
  nome: 'Weslley',
  idade: 21,
  pais: 'Brasil'
};

// let nome = novoUsuario.nome;
// let pais = novoUsuario.pais;

// console.log(nome);
// console.log(pais);

//======
//Éssa sintaxe é como se estivesse se estraindo do objeto novoUsuario a propriedade idade
let { nome,idade,pais } = novoUsuario;
console.log(nome, idade, pais);

let { nome: primeiroNome } = novoUsuario;
console.log(primeiroNome);



//======================================
// Destructuring nested

let novoUsuario2 = {
  nome: {
    primeiro: 'Weslley',
    segundo: 'Ferreira',
    // terceiro: 'Moraes'
  }
}

// let primeiro = novoUsuario2.nome.primeiro;
// console.log(primeiro);


var { nome: { primeiro } } = novoUsuario2;
console.log(nome);

//======================================
// Destructuring com default value

//Valor por default caso não haja no objeto
let { nome: { terceiro = 'Terceiro inexistente' } } = novoUsuario2;
console.log(terceiro);


//======================================
// Default value nas functions com destructuring
// * É possivel passar um valor especifico de um objeto a função

function imprimeUsuario({ nome, idade, sexo, pais = 'Brasil' }) {
  console.log(nome);
  console.log(idade);
  console.log(sexo);
  console.log(pais);
  
}

let usuarioFunction = {
  nome: 'Weslley Ferreira',
  idade: 21,
  sexo: 'M'
}

imprimeUsuario( usuarioFunction )

//=========================================
// Object.keys e Object.values

// Object.keys --> Vai mostrar todas as chaves presentes no objeto

console.log(Object.keys(usuarioFunction));

//  Object.value --> Vai Retornar apenas os valores

console.log(Object.values(usuarioFunction));

//=========================================

let props = Object.keys(usuarioFunction);
console.log(props);

for(let item of props) {
  console.log(item);
}

for(let item2 in usuarioFunction) {
  console.log(item2,':', usuarioFunction[item2]);
}
//=====================================
// Método hasOwnProperty -- Se veio por herança
for(let item3 in usuarioFunction) {
  if(usuarioFunction.hasOwnProperty(item3)) {
    console.log(item3,':', usuarioFunction[item3]);
  }
  
}