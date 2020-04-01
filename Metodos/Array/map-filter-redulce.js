// ====== MAP ====== //

//===== Exercicio: Com base lista numerica voltar todos os numeros porem cada um somado a 2. 

let myNumber = [20, 6, 3, 8];

function power(number) {
  return number + 2;
};

//myNumber.map(power);

console.log(myNumber.map(power)); //22, 8, 5, 10

//===== Exercicio: Com base lista numerica myNumber voltar todos os numeros porem cada um subtraido a 2. 

// É possivel passar a função direto no map.
console.log(
  myNumber.map( n => {
    return n - 2;
  })
);

//OU

// console.log(
//   myNumber.map( function minusTwo(n) {
//     return n - 2;
//   })
// );

//===== Exercicio: Multiplicar os numeros do Array por dois

let listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function multiplica(item) {
  return item * 3;
}

let listaMultiplicada = listaNumeros.map(multiplica);

console.log(listaMultiplicada);

//===== Exercicio: Converter os graus fahrenheit da lista para para graus Celcius

let fahrenheit = [0, 32, 45, 46, 47, 91, 93, 121];

let celcius = fahrenheit.map( item => {
  return Math.round((item - 32) * 5/9);
});

console.log(celcius);

//===== Exercicio: Normalize o padrão das letras por meio do toUpperCase()

// .toUpperCase() - transforma a string em maiuscula

let convidados2 = [
  {nome:"dAnIeL",  vip:true },
  {nome:"GAbRiEl", vip:true },
  {nome:"felipe",  vip:false}
];

let convidadosNormalizados = convidados2.map( item => {
    
  let nome = {nome: item.nome.toUpperCase()};

  // Object.assign() explicado na parte METODOS no readme.md
  return Object.assign(item, nome);

});

console.log(convidadosNormalizados);

//==========================================================================================

// ====== FILTER ====== //


//===== Exercicio: Com base em um array numerico criado retorne um novo array apenas com os multiplos de 2.

let arr = [2, 5, 6, 7, 8];

//Procedimento SEM filter
let newArr = [];

for (let item of arr) {
  if (item % 2 === 0) {
    // .push() - Adiciona o item no final do array newArr 
    newArr.push(item);
  }
}

//Procedimento COM filter
const numeroFilter = arr.filter( num => num % 2 == 0);
console.log(numeroFilter);

//===== Exercicio: Com base em uma lista filtre os nomes que comecem com 'F'

let lista = ['Felipe', 'Juju', 'Fabiano', 'Jani'];

let nomeFiltro = lista.filter( item => {
  return item.charAt(0) == 'F';
})
//NOTA: O charAt() - faz diferenciação de letras maiusculas para minusculas 'F' != f.

console.log(nomeFiltro);


//====== Exercicio: Com base em uma lista numerica separe os pares e os impares

let numeros = [10, 18, 1, 15, 2, 12, 33, 100];

let pares = item => {
  return !(item % 2);
}

let impares = item => {
  return item % 2;
}

let numPares = numeros.filter(pares);
let numImpares = numeros.filter(impares);

console.log(numPares);
console.log(numImpares);

// ==== FILTRANDO OBJETOS ==== //

// Exercicio - 1

let filmes = [
  {
    titulo: "Titanic",
    duracao: 195,
    nota: 8.5
  },
  {
    titulo: "The Avengers",
    duracao: 203,
    nota: 9.5
  },
  {
    titulo: "Mr. Bean",
    duracao: 90,
    nota: 6.5
  }
]

// Nota do exercicio: Só entraram na lista de filmes indicados apenas os filmes que obtiveram uma nota igual ou superior a 8.

let notaDeCorte = 8;

function classificados(item) {
  return item.nota > notaDeCorte; 
}

let notaDosClassificados = filmes.filter(classificados);

console.log(notaDosClassificados);

// Exercicio - 2

let convidados = [
  {
    nome: "Daniel", 
    vip: true,
    idade: 37 
  },
  {
    nome: "Fhelipe", 
    vip: true,
    idade: 21
  },
  {
    nome: "Gabriel", 
    vip: false,
    idade: 20 
  },
]

// Nota do exercicio: Filtre esta lista de convidados permitindo a passagem apenas dos vip: true

function passe(item) {
  return item.vip;
}

let podeEntrar = convidados.filter(passe);

console.log(podeEntrar);

//==========================================================================================