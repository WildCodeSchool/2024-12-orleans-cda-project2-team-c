import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

import Badge from '../components/badge-type';
import Button from '../components/button';
import '../css/pokemon-display.css';

const typeWeaknesses = {
  steel: ['fire', 'fighting', 'ground'],
  fighting: ['flying', 'psychic', 'fairy'],
  dragon: ['ice', 'dragon', 'fairy'],
  water: ['electric', 'grass'],
  fire: ['water', 'ground', 'rock'],
  electric: ['ground'],
  fairy: ['poison', 'steel'],
  ice: ['fire', 'fighting', 'rock', 'steel'],
  bug: ['fire', 'flying', 'rock'],
  normal: ['fighting'],
  grass: ['fire', 'ice', 'poison', 'bug'],
  poison: ['ground', 'psychic'],
  psychic: ['bug', 'ghost', 'dark'],
  rock: ['water', 'grass', 'fighting', 'ground', 'steel'],
  ground: ['water', 'grass', 'ice'],
  ghost: ['ghost', 'dark'],
  dark: ['fighting', 'bug', 'fairy'],
  flying: ['electric', 'ice', 'rock'],
};

export default function PokemonDisplay() {
  const [pokemon, nextPokemon, prevPokemon] = useLoaderData();

  return (
    <section className='pokemon-display'>
      <Button link={true} href={'/pokelist'} className={'button button--red'}>
        {' '}
        {'<  Back to Pokélist'}{' '}
      </Button>

      <div className='pokemon-container'>
        <p>
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
              <h3 className='item-title'>Base stats</h3>
              {pokemon.stats.map((stat, index) => {
                return (
                  <p key={index} className='capital'>
                    {stat.stat.name.replace(/-/g, ' ')} :<strong> {stat.base_stat}</strong>
                  </p>
                );
              })}
            </div>

            <div className='item'>
              <h3 className='item-title'>Moves</h3>
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
              <h3 className='item-title'>Abilities</h3>
              {pokemon.abilities.map((ability, index) => {
                return (
                  <p key={index} className='capital'>
                    {ability.ability.name.replace(/-/g, ' ')}
                  </p>
                );
              })}
            </div>

            <div className='item'>
              <h3 className='item-title'>Types</h3>
              <div>
                {pokemon.types.map((type, index) => {
                  return <Badge key={index} typeName={type.type.name} />;
                })}
              </div>
            </div>

            <div className='item'>
              <h3 className='item-title'>Weaknesses</h3>
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
          <img className='artwork' src={pokemon.sprites.other['official-artwork'].front_default} alt='' />
        </div>
      </div>
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
