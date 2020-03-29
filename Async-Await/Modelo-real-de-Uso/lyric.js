function findLyrics(artist, song) {
  //Promise interna do javascript que tem a funcionalidade de trazer conteudo de uma determinada url
  return fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`); 
}

//Cancelando o comportamento default do formulario
const form = document.querySelector('#lyrics_form');
form.addEventListener('submit', el => {

  el.preventDefault();
  doSubmit();
})

// //------MODO SEM ASYNC AWAIT-----
// //Função criada para subtituir a default do form
// function doSubmit() {
//   const lyrics_el = document . querySelector("#lyrics");
//   const artist = document.querySelector("#artist");
//   const song = document.querySelector("#song");

//   lyrics_el.innerHTML = '<div class="spinner-grow" role="status"><span class="sr-only">Carregando...</span></div>'

//   findLyrics(artist.value, song.value)
//     .then(response => response.json())
//     .then(data => {
//       if (data.lyrics) {
//         console.log(data.lyrics);
        
//         lyrics_el.innerHTML = data.lyrics;
//       } else {
//         lyrics_el.innerHTML = data.error;
//       }

//     })
//     .catch(err => {
//       lyrics_el.innerHTML = `Oops falid ${err}`
//     })
// }

//------MODO COM ASYNC AWAIT-----
//Função criada para subtituir a default do form
async function doSubmit() {
  const lyrics_el = document . querySelector("#lyrics");
  const artist = document.querySelector("#artist");
  const song = document.querySelector("#song");

  lyrics_el.innerHTML = '<div class="spinner-grow" role="status"><span class="sr-only">Carregando...</span></div>'

    //Async await
    try{
      const lyricsResponse = await findLyrics(artist.value, song.value);
      const data = await lyricsResponse.json();
      console.log(data);
      if(data.lyrics)
        lyrics_el.innerHTML = data.lyrics;
      else 
        lyrics_el.innerHTML = data.error;
    } 
    catch(err) {
      console.log(err);
    }
}