import { useState } from 'react';

import Close from '../assets/icons/close-blue.png';
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
        aria-label='Open navigation menu'
        title='Open navigation title'
        aria-controls='main-navigation'
        onClick={openClick}
      >
        <img src={isActive ? Close : menuIcon} alt='' aria-hidden='true' />
      </button>

      <nav className={`main-navigation ${isActive ? 'main-navigation--active' : ''} `} id='main-navigation'>
        <Button link={true} href='/pokelist' className='button--yellow'>
          PokéList
        </Button>
        <Button link={true} href='/pokedex' className='button--yellow'>
          My Pokédex
        </Button>
        <Button link={true} href='/quiz' className='button--yellow'>
          Quiz
        </Button>
      </nav>
    </header>
  );
}
