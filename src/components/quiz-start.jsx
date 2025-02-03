import demoPicture from '../assets/images/114.png';
import Button from './button';

export default function QuizStart({ setHasStarted }) {
  return (
    <section className='quiz-section quiz-section--start'>
      <h1>Quiz</h1>
      <div className='pictures-container'>
        <img src={demoPicture} alt='' className='demo-picture demo-picture--hidden' />
        <img src={demoPicture} alt='' className='demo-picture' />
      </div>
      <p>
        Find out to which Pokémon the figure belongs to and try to make a perfect score ! Every Pokémon you discover
        will be added to your personal Pokédex! Go Catch’ em all !
      </p>
      <Button onClick={() => setHasStarted(true)} className='button--red'>
        Start !
      </Button>
    </section>
  );
}
