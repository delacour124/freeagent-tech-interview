import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  // create state
  const [pokemon, setPokemon] = useState();

  // fetch data
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
      const pokemon = await response.json();
      setPokemon(pokemon);
    }

    fetchData();
  }, [])

  console.log(pokemon);
  

  if (!pokemon) return null;

  const pokemonName = pokemon.species.name;
  const pokemonImgURL = pokemon.sprites.front_default;

  return (
    <div>
      <h1>{pokemonName}</h1>
      <img src={pokemonImgURL} alt='ditto'/>
    </div>
  )
}

export default App;
