import right from '../assets/icons/check-green.png';
import wrong from '../assets/icons/cross-red.png';
import Button from './button';

export default function QuizResults({ game }) {
  return (
    <section className='quiz-section quiz-section--result'>
      <h1>Results !</h1>
      <p className={`score ${game.score > 6 ? 'score-green' : game.score < 4 ? 'score-red' : 'score-orange'}`}>
        {game.score}
      </p>
      <Button link href={'/pokelist'} className={'button--yellow'}>
        {'New game'}
      </Button>
      <div className='results-container'>
        {game.rounds.map((round, index) => (
          <div className='result-item' key={index}>
            <div className='result-item--img'>
              <img
                src={round.picture}
                alt={round.name}
                className={`pokemon-img ${round.isValid ? 'right-answer' : 'wrong-answer'}`}
              />
              <img src={round.isValid ? right : wrong} alt='' className='answer-icon' />
            </div>
            {round.isValid ? (
              <p className='pokemon-name'>
                {round.name}
                <span className='pokemon-id'> {round.id}</span>
              </p>
            ) : (
              <p className='pokemon-name'>???</p>
            )}
          </div>
        ))}
      </div>

      <Button link href={'/pokedex'} className={'button--red'}>
        {'My pokédex'}
      </Button>
    </section>
  );
}
