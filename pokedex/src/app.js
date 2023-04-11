import  React, { useState, useEffect } from 'react';
import PokemonList from './pokemonList';
import axios from 'axios';

import './app.css';

function App() 
{
  const [pokemon, setPokemon] = useState([]);
  const [curPage, setCurPage] = useState('https://pokeapi.co/api/v2/pokemon/');
  
  const [prevPage, setPrevPage] = useState('');
  const [nextPage, setNextPage] = useState('');

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon').then(res => {setPokemon(res.data.results.map(p => p.name))})
  }, [curPage])

  
  return (
    <div className="app">
      <PokemonList pokemon={pokemon}/>
    </div>
  );
}

export default App;
