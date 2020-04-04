// Descobrindo o comprimento de uma string
let texto = "Hello World!";

console.log( texto.length ); //12

// Recuperando caractere especifico
console.log( texto[0] );

// Pegando o ultimo caractere da string
console.log( texto[texto.length - 1] );

//================================================

// Encontrando uma Substring dentro de uma string
console.log( texto.indexOf('llo') ); //2

// Exemplo de uso
if (texto.indexOf('llo') != -1) {
    //Faz coisas com a string ou outras ações
    console.log('Achei!!');
}

//================================================

// Extraindo uma parte da string
console.log( texto.slice(0, 5) );//Hello
console.log( texto.slice(0, -1) );//Hello World

//================================================

//Mudando para maiusculo
console.log( texto.toUpperCase() );

//================================================

//Mudando para minusculo
console.log( texto.toLowerCase() );

//================================================

//Atuaçizando parte de uma string
let texto2 = texto.replace('Hello', 'Champion');
console.log(texto2);

//================================================



