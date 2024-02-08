const json = "src/movies.json";
const button = document.querySelector("#button_movie");

button.addEventListener("click", ()=>{
  alert("500");
})

fetch(json)
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro ao carregar o arquivo JSON');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);

    let arraySelectFilms = [];
    let maxArray = data.length;

    function sortMovies() {
        if (arraySelectFilms.length == maxArray) {
            if (confirm('You have already exceeded the limit! Do you want to start over?')) arraySelectFilms = [];
            else return;
        }
        let sortNumber = Math.ceil(Math.random() * maxArray); // Escolher um numero ao acaso
        while (arraySelectFilms.indexOf(sortNumber) >= 0) {  // Enquanto o numero já existir, escolher outro
          sortNumber = Math.ceil(Math.random() * maxArray);
        }
        arraySelectFilms.push(sortNumber); // adicionar este numero à array de numeros sorteados para futura referência
        return sortNumber; // devolver o numero único
    }

    console.log(sortMovies());
  })
  .catch(error => {
    console.error('Erro ao ler o arquivo JSON:', error);
  });
