import errorImg from '../assets/images/error-404-mewtwo.png';
import Button from '../components/button';
import '../css/error-404.css';

export default function Error404() {
  return (
    <>
      <Button link href={'/pokelist'} className={'button button--red'}>
        {'<  Back to Pokélist'}
      </Button>
      <section className='error-container'>
        <p className='error-404'>404</p>
        <img src={errorImg} alt='Dark Mewtwo' className='error-img' />
        <h1>Page not found !</h1>
      </section>
    </>
  );
}
