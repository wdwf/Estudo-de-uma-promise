//Definindo a promise
let p = new Promise ( (resolve, reject) => {

  let a = 1 + 1;
  if (a == 2) {
    resolve('Sucess');
  } else {
    reject('Failed');
  }

});


// --- Invocando a promise ---

//.then - Executado quando o resolve é chamado. 
//catch - Executado quando o reject é chamado
p.then((message) => {
  console.log('This is in the then ' + message);
}).catch((err) => {
  console.log('This is the catch ', err);
})