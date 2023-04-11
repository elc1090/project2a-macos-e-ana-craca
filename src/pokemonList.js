import React from 'react';

export default function PokemonList({ pokemon })
{
  return (
    <div className='pokemon-list'>
      {pokemon.map(p => (<div key={p}>{p}</div>))}
    </div>
  )
}