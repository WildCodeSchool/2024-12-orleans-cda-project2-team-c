import up from '../assets/icons/chevron-up-blue.png';
import '../css/button-up.css';

export default function ButtonUp({ className = '' }) {
  function scroll() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <>
      <button className={`button-up ${className}`} title='Return to page top' aria-label='Return to page top'>
        <img src={up} alt='' className='button-up__icon' onClick={scroll} />
      </button>
    </>
  );
}
