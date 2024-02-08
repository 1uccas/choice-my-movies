const json = "src/movies.json";
const button = document.querySelector("#button_movie");
const classMovies = document.querySelector('.movies');
const img = document.createElement("img");

fetch(json)
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro ao carregar o arquivo JSON');
    }
    return response.json();
  })
  .then(data => {
    let arraySelectFilms = [];
    let maxArray = (data.length-1) //Obs: o array acrescenta uma posição a mais e a função não consegue detectar;

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

    button.addEventListener("click", ()=>{
      console.log(data[sortMovies()]);

      const position = data[sortMovies()];

      classMovies.innerHTML = "";
      img.src = position.path;
      classMovies.innerHTML += position.title;
      classMovies.appendChild(img);
    })
    
  })
  .catch(error => {
    console.error('Erro ao ler o arquivo JSON:', error);
  });
