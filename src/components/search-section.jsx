import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import '../css/search-section.css';
import pokemonNames from '../utils/pokemon-names';

export default function SearchSection({ title }) {
  const [searchBy, setSearchBy] = useState('name');
  const [types, setTypes] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [clickName, setClickName] = useState('');

  const handelRadio = (event) => {
    setSearchBy(event.target.value);
  };

  useEffect(() => {
    const fetchTypes = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/type/');

        if (response.ok) {
          const data = await response.json();
          setTypes(data.results);
        } else {
          throw new Error('Error while fetching types from API', response.code);
        }
      } catch (error) {
        console.error('Error while fetching types from API', error);
      }
    };

    fetchTypes();
  }, []);

  return (
    <div className='search-container'>
      <h1 className='title'>{title}</h1>
      <form className='search-item-container' role='search'>
        <p>Search by</p>

        <label className='label-radio'>
          <input
            className='search-by-radio'
            type='radio'
            name='searchBy'
            value='name'
            checked={searchBy === 'name'}
            onChange={handelRadio}
          />
          Name
        </label>

        <label className='label-radio'>
          <input
            className='search-by-radio'
            type='radio'
            name='searchBy'
            value='type'
            checked={searchBy === 'type'}
            onChange={handelRadio}
          />
          Type
        </label>

        {searchBy === 'type' ? (
          <select className='types-list'>
            {types.map((type) => (
              <option key={type.id} value={type.name}>
                {type.name.charAt(0).toUpperCase() + type.name.slice(1)}
              </option>
            ))}
          </select>
        ) : (
          <div className='poke-position'>
            <input
              className='search-by-name-inupt'
              type='text'
              placeholder='Enter a Pokémon name'
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <ul className='poke-list'>
              {searchValue &&
                pokemonNames
                  .filter((name) => name.match(new RegExp(`^${searchValue}`, 'i')))
                  .map((name) => {
                    return (
                      <Link
                        to={'/pokemon/' + name}
                        key={name}
                        name={name}
                        className='poke-name capital'
                        value={clickName}
                        onClick={() => setClickName(name)}
                      >
                        {name}
                      </Link>
                    );
                  })}
            </ul>
          </div>
        )}
      </form>
    </div>
  );
}
