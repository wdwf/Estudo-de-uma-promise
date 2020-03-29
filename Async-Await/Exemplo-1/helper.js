// Funçoes simples //
function sayHello() {
  console.log('hello you');
}

// Promise //
// function addVat(price) {

//   return new Promise((resolve, reject) => {
//     let total = price * 1.2;

//     if(total > 145) {
//       reject('Bad vibe')
//     }
//     else{
//       console.log(total);
//       resolve(total)
//     } 
//   })
// }

// Funçoes avançadas //
function addVat(price) {
  let total = price * 1.2

  if(total > 145) {
    throw new Error('Bad vibe')
  }
  else{
    console.log(total);
    return total;
  } 
}



//Objeto
module.exports = {
  
  name:   'Bob',
  email:  'Bob@info.com',
  sayHello,
  addVat,

  doStuff: async (price) => {

    let value1 = await addVat(price);
    let value2 = await addVat(value1);
    let value3 = await addVat(value2);
    let value4 = await addVat(value3);
    return value4;
    
  }

}