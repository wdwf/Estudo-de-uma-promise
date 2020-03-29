/*
  -- Importação de --

  * Variaveis

  * Funçoes simples

  * Funçoes avançadas

  * async await
*/

//Importando os valores do outro arquivo
const helper = require('./helper')


//------------//
//  Variaveis //
//------------//

let userDetails = `nome: ${helper.name}, email: ${helper.email}`;
console.log(userDetails);

//-----------------//
// Funçoes simples //
//-----------------//

helper.sayHello();

//-------------------//
// Funçoes avançadas //
//-------------------//

let total = helper.addVat(100);
console.log(total); //120


//-------------//
// async await //
//-------------//

helper.doStuff(100).then((result) => {
  console.log(result);
}).catch((err) => {
  console.log(err);
})