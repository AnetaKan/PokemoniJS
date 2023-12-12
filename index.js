const pokemons = document.getElementById("pokemon-list");

function showPokemons() {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=30")
    .then((res) => res.json())
    .then((data) => {
      data.results.forEach((pokemon) => {
        fetch(pokemon.url)
          .then((res) => res.json())
          .then((pokemonDetails) => {
            const pokemonItem = document.createElement("li");
            const imageSource = pokemonDetails.sprites.front_default;
            const imageElement = document.createElement("img"); 
           // pokemonItem.textContent = pokemonDetails;
            imageElement.src =imageSource;
            imageElement.alt = pokemonDetails.name;

            const textElement = document.createElement("p");
                textElement.textContent = `This pokemon is: ${pokemonDetails.name}, 
                his height is: ${pokemonDetails.height}`;
             
            pokemonItem.appendChild(imageElement);
            pokemonItem.appendChild(textElement);

            pokemons.appendChild(pokemonItem); //dodavanje pokemona u listu


          });
      });
    })
    .catch((error) => console.log("Error"));
}

showPokemons();
