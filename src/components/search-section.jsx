import { useState } from 'react';

import '../css/search-section.css';

export default function Search({ title }) {
  const [searchBy, setSearchBy] = useState('name');

  const handleRadioChange = (event) => {
    setSearchBy(event.target.value);
  };

  return (
    <div className='search-container'>
      <h2>{title}</h2>
      <div className='search-item-container'>
        <p>Search by</p>
        <label>
          <input
            className='radio'
            type='radio'
            name='searchBy'
            value='type'
            checked={searchBy === 'type'}
            onChange={handleRadioChange}
          />
          Type
        </label>
        <label>
          <input
            className='radio'
            type='radio'
            name='searchBy'
            value='name'
            checked={searchBy === 'name'}
            onChange={handleRadioChange}
          />
          Name
        </label>
        {searchBy === 'type' ? <select>{}</select> : <input type='text' placeholder='Enter a Pokémon name' />}
      </div>
    </div>
  );
}
