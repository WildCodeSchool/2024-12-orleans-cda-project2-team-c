import { useState } from 'react';

import '../css/search-section.css';

export default function Search({ title }) {
  const [searchBy, setSearchBy] = useState('type');

  const handleRadioChange = (event) => {
    setSearchBy(event.target.value);
  };

  return (
    <div>
      <h2>{title}</h2>
      <div>
        <p>Search by</p>
        <label>
          <input type='radio' name='searchBy' value='type' checked={searchBy === 'type'} onChange={handleRadioChange} />
          Type
        </label>
        <label>
          <input type='radio' name='searchBy' value='name' checked={searchBy === 'name'} onChange={handleRadioChange} />
          Name
        </label>
      </div>
      {searchBy === 'type' ? (
        <select>{/* options de l'api */}</select>
      ) : (
        <input type='text' placeholder='Enter a Pokémon name' />
      )}
    </div>
  );
}
