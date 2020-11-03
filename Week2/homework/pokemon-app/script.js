'use strict';

function main() {
  const buttonDiv = document.createElement('div');
  const button = document.createElement('button');
  const select = document.createElement('select');
  const imgDiv = document.createElement('div');
  const pokemonImg = document.createElement('img');
  select.style.padding = '5px';
  select.style.marginLeft = '10px';
  button.style.padding = '5px';
  button.style.margin = '10px';
  button.innerText = 'Get pokemon!';
  button.addEventListener('click', () => {
    fetchData();
  });
  buttonDiv.appendChild(button);
  document.body.appendChild(buttonDiv);

  function fetchData() {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=151s'; // Only the OG pokemon B)
    fetch(url)
      // Convert fetched result into readable js if request is successful
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          // display error if something goes wrong
          document.body.innerHTML = `<div>Error ${response.status}. Request failed.</div>`;
          document.body.style.color = 'red';
        }
      })
      .then((data) => {
        // Get each pokemon name back from fetched data
        const pokemonData = data.results.map((pokemon) => pokemon.name);
        addPokemonToDOM(pokemonData);
        return fetch(url);
      })
      .catch((error) => {
        alert(new Error(error));
      });
  }

  function addPokemonToDOM(name) {
    name.forEach((pokemon, index) => {
      const options = document.createElement('option');
      options.innerText = pokemon;
      // since Index starts at 0, I add 1 to get the correct pokemon when fetching 2nd request
      options.value = index + 1;
      options.classList = 'options';
      select.appendChild(options);
    });
    document.body.appendChild(select);
  }
  // Get image from new request that matches option value
  select.addEventListener('change', (e) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${e.target.value}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        pokemonImg.src = data.sprites.front_default;
      });
    imgDiv.appendChild(pokemonImg);
    document.body.appendChild(imgDiv);
  });
}

window.onload = main();
