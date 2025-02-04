import { useEffect, useState } from 'react';

import Button from '../components/button';
import PokemonCard from '../components/pokemon-card';
import SearchSection from '../components/search-section';
import '../css/pokemon-list.css';
import Mocks from '../mock-pokemons';

const Mock = 1;
localStorage.setItem('result', JSON.stringify(Mock));

export default function Pokedex() {
  const [pokemonResult, setPokemon] = useState(0);
  useEffect(() => {
    const stockPokemon = localStorage.getItem('result');
    if (stockPokemon) {
      const pokemons = JSON.parse(stockPokemon);
      setPokemon(pokemons);
    }
  }, []);

  return (
    <section className='pokemon-section'>
      <SearchSection title='Pokélist' />
      {pokemonResult.length > 0 ? (
        <ul className='pokemon-list'>
          {pokemonResult.map((pokemon) => {
            return <PokemonCard key={pokemon.name} pokemon={pokemon} />;
          })}
        </ul>
      ) : (
        <div className='oups'>
          <p>
            Oups... seems like you don’t have any Pokémon in your Pokédex yet...
            <br />
            Go and try to find some in the quiz !
          </p>
          <Button className='button--red center' link={true}>
            Play
          </Button>
        </div>
      )}
      {pokemonResult.length > 0 ? (
        <Button className='button--red center' link={true}>
          Play
        </Button>
      ) : (
        ''
      )}
    </section>
  );
}
