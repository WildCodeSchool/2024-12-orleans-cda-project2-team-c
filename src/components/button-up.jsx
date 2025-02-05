import up from '../assets/icons/chevron-up-blue.png';
import '../css/button-up.css';

export default function Btnup() {
  function scroll() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <>
      <div className='circle'>
        <img src={up} alt='' className='button-up' onClick={scroll} />
      </div>
    </>
  );
}
