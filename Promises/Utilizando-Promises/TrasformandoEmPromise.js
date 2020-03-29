const betterDeveloper = 'Iris'

function whoIsBetterCallback(callback, errorCalback) {

  return new Promise ( (resolve, reject) => {


    if (betterDeveloper != 'Iris' && betterDeveloper != 'Weslley') {
      reject({
        name: 'This is wrong',
        message: betterDeveloper + '? Really'
      })
    } else {
      resolve({
        name: betterDeveloper,
        message: 'Programação na veia!'
      })
    }

  });

}

whoIsBetterCallback()
  .then((result) => {
    console.log(result.name + ' ? yeah! ' + result.message);
  })
  .catch((error) => {
    console.log(erro.name + ' ' + error.message);
  });