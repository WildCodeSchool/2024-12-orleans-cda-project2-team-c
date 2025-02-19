import { useState } from 'react';
import { Link } from 'react-router-dom';

import close from '../assets/icons/close-blue.png';
import menuIcon from '../assets/icons/menu-dots-blue.png';
import logo from '../assets/images/pokexplorer-logo.png';
import '../css/header.css';
import pokemonNames from '../utils/pokemon-names';
import Button from './button';

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  function openClick() {
    setIsActive(() => !isActive, setSearchValue(''));
  }

  return (
    <header>
      <Link to='/' aria-label='Go back to the homepage' title='Go back to the homepage' className='header__logo'>
        <img src={logo} alt='' aria-hidden='true' />
      </Link>

      <button
        type='button'
        className='mobile-navigation__toggler'
        title={isActive ? 'Close navigation menu' : 'Open navigation menu'}
        aria-label={isActive ? 'Close navigation menu' : 'Open navigation menu'}
        aria-controls='main-navigation'
        aria-expanded={isActive ? 'true' : 'false'}
        onClick={openClick}
      >
        <img src={isActive ? close : menuIcon} alt='' aria-hidden='true' />
      </button>

      <nav className={`main-navigation ${isActive ? 'main-navigation--active' : ''} `} id='main-navigation'>
        <form role='search'>
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
                        to={'/pokemon/' + name.replaceAll(/\W/g, '-').replaceAll(/--/g, '-')}
                        key={name}
                        name={name}
                        className='poke-name capital'
                        onClick={openClick}
                      >
                        {name}
                      </Link>
                    );
                  })}
            </ul>
          </div>
        </form>
        <Button link href='/pokelist' className='button--yellow' title='Browse Pokémon list' onClick={openClick}>
          PokéList
        </Button>
        <Button link href='/pokedex' className='button--yellow' title='See my Pokédex' onClick={openClick}>
          My Pokédex
        </Button>
        <Button link href='/quiz' className='button--yellow' title='Play quiz' onClick={openClick}>
          Quiz
        </Button>
      </nav>
    </header>
  );
}
