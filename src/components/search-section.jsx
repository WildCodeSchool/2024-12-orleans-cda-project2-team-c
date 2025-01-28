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
      <h1>{title}</h1>
      <form className='search-item-container'>
        <p>Search by</p>

        <label>
          <input
            className='radio'
            type='radio'
            name='searchBy'
            value='name'
            checked={searchBy === 'name'}
            onChange={handelRadio}
          />
          Name
        </label>

        <label>
          <input
            className='radio'
            type='radio'
            name='searchBy'
            value='type'
            checked={searchBy === 'type'}
            onChange={handelRadio}
          />
          Type
        </label>

        {searchBy === 'type' ? (
          <select>
            {types.map((type) => (
              <option key={type.id} value={type.name}>
                {type.name.charAt(0).toUpperCase() + type.name.slice(1)}
              </option>
            ))}
          </select>
        ) : (
          <input type='text' placeholder='Enter a Pokémon name' />
        )}
      </form>
    </div>
  );
}
