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
  })
  .catch(error => {
    console.error('Erro ao ler o arquivo JSON:', error);
  });
