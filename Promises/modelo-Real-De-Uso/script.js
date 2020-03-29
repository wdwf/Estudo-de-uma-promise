//Pegando a <ul> do doc html
const ul = document.getElementById('users');

//Definindo a url que retorna dados em json
const url = 'https://jsonplaceholder.typicode.com/users';

//Metodo para Busca -- Buscando os dados pelo fetch
fetch(url)

  //---Aninhando os resultados da promise---

  //Convertendo os dados em um tipo json
  .then( (resp) => resp.json() )

  /*
  * Pegando esses dados é passando por um map onde cada elemento vai criar 1 li os dados pegado serão armazenados dentro dessa li e esse elemento será posto dentro da ul como um elemento filho.
  */
  .then( (data) => {
    console.log(data);

    return data.map(function (user) {
      let li = document.createElement('li');
      li.innerHTML = `${user.name} (${user.username})`
      ul.appendChild(li);
    });
  })
  .catch( (err) => {
    console.log('Oops!' + err);
  })


  //=============================================

  //MODELO 2

  let promisse = Promise.resolve(3);
  let promisse2 = Promise.resolve(4);
  let promisse3 = Promise.resolve(4);

  //Com o Promise all é possivel passar em um array uma lista de promises
  //Ele vai esperar que toda aquelas promessas retornem o resultado para fazer o then ou o catch
  Promisse.all([ promisse, promisse2, promisse3])
    .then(function (value) {

    })
    .catch((err) => {

    });

  //Tem o mesmo conceito que a all só que a primeira promise q retornar tanto resolve quanto reject é apenas o valor dela que ira retornar
  Promise.race
