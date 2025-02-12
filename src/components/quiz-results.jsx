import right from '../assets/icons/check-green.png';
import wrong from '../assets/icons/cross-red.png';
import newBadge from '../assets/icons/new-gold-badge.png';
import Game from '../models/Game';
import ApiConnection from '../utils/api-connection';
import Button from './button';

export default function QuizResults({ game, setHasFinished, setGame }) {
  return (
    <section className='quiz-section quiz-section--result'>
      <h1>Results !</h1>
      <p className={`score ${game.score > 20 ? 'score-green' : game.score < 10 ? 'score-red' : 'score-orange'}`}>
        {game.score}/30
      </p>
      <Button
        className={'button--yellow'}
        onClick={async () => {
          setHasFinished(false);
          setGame(new Game(await ApiConnection.getQuizPokemons()));
        }}
      >
        {'New game'}
      </Button>
      <div className='results-container'>
        {game.rounds.map((round, index) => (
          <div className='result-item' key={index}>
            <div className={`result-item--img ${round.isValid ? 'right-answer' : 'wrong-answer'}`}>
              {round.new ? <img className='new-badge' src={newBadge} alt='badge new pokemon' /> : ''}
              <img
                src={round.picture}
                alt={round.name}
                className={`pokemon-img ${round.isValid ? '' : 'pokemon-img--disabled'}`}
              />
              <img src={round.isValid ? right : wrong} alt='' className='answer-icon' />
            </div>
            {round.isValid ? (
              <p className='pokemon-name capital'>
                {round.name.replace(/-/g, ' ')}
                <span className='pokemon-id'> N°{round.id}</span>
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
