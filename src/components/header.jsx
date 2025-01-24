import pokéxplorer from '../assets/icons/pokéxplorer.png';
import './header.css';

export default function Header() {
  return (
    <header>
      <img src={pokéxplorer} alt='logo' className='logo' />
      <div className='flexButton'>
        <button>PokéList</button>
        <button>My Pokédex</button>
        <button>Quizz</button>
      </div>
    </header>
  );
}
