import { useEffect, useState } from 'react';

import '../css/search-section.css';

export default function Search({ title }) {
  const [searchBy, setSearchBy] = useState('name');
  const [types, setTypes] = useState([]);

  const handelRadio = (event) => {
    setSearchBy(event.target.value);
  };

  useEffect(() => {
    const fetchTypes = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/type/');
        const data = await response.json();
        setTypes(data.results);
      } catch (error) {
        console.error('Error while fetching types from API', error);
      }
    };

    fetchTypes();
  }, []);

  return (
    <div className='search-container'>
      <h1 className='title'>{title}</h1>
      <form className='search-item-container'>
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
          <input className='search-by-name-inupt' type='text' placeholder='Enter a Pokémon name' />
        )}
      </form>
    </div>
  );
}
