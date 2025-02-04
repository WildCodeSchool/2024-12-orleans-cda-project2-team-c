import { useLocation } from 'react-router-dom';

import errorImg from '../assets/images/error-404-mewtwo.png';
import Button from '../components/button';
import '../css/error-404.css';

export default function Error404() {
  const location = useLocation();
  return (
    <>
      <Button link={true} href={'/pokelist'} className={'button button--red'}>
        {' '}
        {'<  Back to Pokélist'}{' '}
      </Button>
      <section className='error-container'>
        <p className='error404'>404</p>
        <img src={errorImg} alt='Dark Mewtwo' className='error-img' />
        <h2>Page not found !</h2>
      </section>
    </>
  );
}
