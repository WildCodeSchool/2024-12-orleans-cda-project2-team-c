import { useState } from 'react';

import close from '../assets/icons/close-blue.png';
import menuIcon from '../assets/icons/menu-dots-blue.png';
import logo from '../assets/images/pokexplorer-logo.png';
import '../css/header.css';
import Button from './button';

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  function openClick() {
    setIsActive(() => !isActive);
  }

  return (
    <header>
      <a href='/' aria-label='Go back to the homepage' title='Go back to the homepage' className='header__logo'>
        <img src={logo} alt='' aria-hidden='true' />
      </a>

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

      <nav
        className={`main-navigation ${isActive ? 'main-navigation--active' : ''} `}
        id='main-navigation'
        onClick={openClick}
      >
        <Button link={true} href='/pokelist' className='button--yellow' title='Browse Pokémon list'>
          PokéList
        </Button>
        <Button link={true} href='/pokedex' className='button--yellow' title='See my Pokédex'>
          My Pokédex
        </Button>
        <Button link={true} href='/quiz' className='button--yellow' title='Play quiz'>
          Quiz
        </Button>
      </nav>
    </header>
  );
}
