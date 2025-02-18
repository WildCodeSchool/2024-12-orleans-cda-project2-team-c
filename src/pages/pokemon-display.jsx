import { useRef } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

import sound from '../assets/icons/sound-blue.png';
import Badge from '../components/badge-type';
import Button from '../components/button';
import '../css/pokemon-display.css';
import { typeWeaknesses } from '../utils/types';

export default function PokemonDisplay() {
  const [pokemon, nextPokemon, prevPokemon] = useLoaderData();
  const audioRef = useRef(null);

  return (
    // card **************************************************
    <section className='pokemon-display'>
      <Button link={true} href={'/pokelist'} className={'button button--red'}>
        {'<  Back to Pokélist'}
      </Button>
      <article className='pokemon-container'>
        <p className='pokemon-display__id'>
          {pokemon.id.toString().length === 4 ? pokemon.id : '0'.repeat(3 - pokemon.id.toString().length) + pokemon.id}
        </p>
        <div className='left'>
          <div className='left-top box'>
            <h1 className='capital'>{pokemon.name.replace(/-/g, ' ')}</h1>
            <p>
              {pokemon.height / 10}m - {pokemon.weight / 10}kg
            </p>
          </div>
          <div className='column1'>
            <div className='item'>
              <h2 className='item-title'>Base stats</h2>
              {pokemon.stats.map((stat, index) => {
                return (
                  <p key={index} className='capital'>
                    {stat.stat.name.replace(/-/g, ' ')} : <span className='stat-numbers'>{stat.base_stat}</span>
                  </p>
                );
              })}
            </div>

            <div className='item'>
              <h2 className='item-title'>Moves</h2>
              <ul className='moves-list'>
                {pokemon.moves.slice(0, 8).map((move) => {
                  return (
                    <li key={move.move.name} className='capital'>
                      {move.move.name.replace(/-/g, ' ')}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className='column2'>
            <div className='item'>
              <h2 className='item-title'>Abilities</h2>
              {pokemon.abilities.map((ability, index) => {
                return (
                  <p key={index} className='capital'>
                    {ability.ability.name.replace(/-/g, ' ')}
                  </p>
                );
              })}
            </div>

            <div className='item item--types'>
              <h2 className='item-title'>Types</h2>
              <div>
                {pokemon.types.map((type, index) => {
                  return <Badge key={index} typeName={type.type.name} />;
                })}
              </div>
            </div>

            <div className='item item--types'>
              <h2 className='item-title'>Weaknesses</h2>
              <div>
                {[...new Set(pokemon.types.map((type) => typeWeaknesses[type.type.name] || ['Unknown']).flat())].map(
                  (weakness, index) => (
                    <Badge key={index} typeName={weakness} />
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
        <div className='right box'>
          <img
            className='artwork'
            src={pokemon.sprites.other['official-artwork'].front_default}
            alt={pokemon.name.replace(/-/g, ' ')}
          />
          <button
            className='sound-btn'
            onClick={() => audioRef.current.play()}
            title='Play pokémon cry'
            aria-label='Play pokémon cry'
          >
            <img src={sound} alt='' aria-hidden='true' className='sound-icon' />
          </button>
          <audio src={pokemon.cries.latest} ref={audioRef}></audio>
        </div>
      </article>

      {/* navigation ************************************************** */}
      <div className='pokelist-navigation'>
        <Link to={`/pokemon/${prevPokemon.id}`} className='arrow-button left-arrow arrow'>
          <h2 className='capital'>{prevPokemon.name.replace(/-/g, ' ')}</h2>
          <p>
            {prevPokemon.id.toString().length === 4
              ? prevPokemon.id
              : '0'.repeat(3 - prevPokemon.id.toString().length) + prevPokemon.id}
          </p>
        </Link>

        <Link to={`/pokemon/${nextPokemon.id}`} className='arrow-button right-arrow arrow'>
          <p>
            {nextPokemon.id.toString().length === 4
              ? nextPokemon.id
              : '0'.repeat(3 - nextPokemon.id.toString().length) + nextPokemon.id}
          </p>
          <h2 className='capital'>{nextPokemon.name.replace(/-/g, ' ')}</h2>
        </Link>
      </div>
    </section>
  );
}
