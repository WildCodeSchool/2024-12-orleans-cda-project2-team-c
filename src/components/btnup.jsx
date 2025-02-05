// import { useRef } from 'react'
import up from '../assets/icons/chevron-up-blue.png';
import '../css/btnup.css';

export default function Btnup({ upRef }) {
  function Scroll() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
  if (upRef.current) {
    upRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <>
      <div className='circle'>
        <img src={up} alt='' className='btn-up' onClick={Scroll} />
      </div>
    </>
  );
}
