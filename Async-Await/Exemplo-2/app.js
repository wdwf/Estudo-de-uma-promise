function bestRockBand(band) {
  return new Promise((resolve, reject) => {
    if (band == 'Queen') {
      resolve({
        success: true,
        bandName: band,
        msg: band + ' is the best rock band ever!'
      })
    } else {
      reject({
        success: false,
        msg: 'I\'m not so sure!'
      })
    }
  })
}

function bestRockSong(response) {
  return new Promise((resolve, reject) => {
    if (response.success) {
      resolve('Bohemian Rhapsody by' + response.bandName);
    } else {
      reject('Do you know Queen?');
    }
  });
}

bestRockBand('Queen')
  .then(response => {
    console.log('Checking the answer...');
    return bestRockSong(response);
  })

  .then(response => {
    console.log('Finding the best song...');
    console.log(response);
  })
  .catch(err => {
    console.log(err.msg);
  })

/*
 * O problema que o async Await veio resolver foi em questão do aninhamento 
 * Nota: O Await só é utilizado em uma chamada que leva async ou seja os dois estão interligados. 
 * Ao utilizar o async await não se tera mais o tratamento de erro padrão para isso se terá que adicionar o bloco try{} catch
 */
//Definindo uma função await
 async function doTheJob() {
  try{
    const bestRockBandResponse = await bestRockBand('Queen');
    console.log(bestRockBandResponse);
    
    //Fazendo a chamada da proxima promise
    const bestRockSongResponse = await bestRockSong(bestRockBandResponse)
    console.log(bestRockSongResponse);
  } 
  catch(err) {
    console.log(err.msg);
  }
    
 }

 doTheJob();