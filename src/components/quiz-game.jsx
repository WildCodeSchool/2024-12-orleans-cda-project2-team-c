import { useEffect, useRef, useState } from 'react';

import Badge from './badge-type';
import Button from './button';

export default function QuizGame({ game }) {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [timer, setTimer] = useState(3000);
  const [timerIsRunning, setTimerIsRunning] = useState(true);
  const [usedHints, setUsedHints] = useState([false, false]);
  console.log('render');

  // timer managment **************************************************
  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (timer === 0) {
        endRound();
      } else if (timerIsRunning) {
        setTimer(timer - 1000);
      }
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, [timerIsRunning, timer]);

  // functions **************************************************
  function endRound() {
    // couper timer
    setTimerIsRunning(false);

    // vérifier réponse

    // mettre à jour le visuel
    // // mettre à jour la couleur des boutons et afficher le bouton question suivante

    // vérifier numéro du tour, sur dernier tour, endGame, sinon nextROund
  }

  function nextRound() {
    //
  }

  function endGame() {
    //
  }

  function handleClickPokemonBtn(isValid) {
    endRound();
  }

  function handleClickHintBtn(e, index) {
    console.log(e);

    game.rounds[questionNumber].setPenalty();
    setUsedHints((actualState) => {
      actualState[index] = true;
      console.log(actualState);
      console.log(actualState);

      return actualState;
    });
    console.log('donnée mises à jour: ' + usedHints);
  }

  function revealTypes() {}

  function revealBlurredPicture() {}

  // markup **************************************************
  return (
    <section className='quiz-section quiz-section--game'>
      <h1>
        <span>{questionNumber}/10</span> - Which pokémon is it ?
      </h1>

      {/* hints */}
      <article className='hints-container'>
        <h2>
          Hints <span>(2/2)</span>
        </h2>

        {/* <Button className='button--red' onClick={() => handleClickHintBtn(0)} disabled={usedHints[0]}> */}
        <Button
          className={usedHints[0] ? 'button--disabled' : 'button--red'}
          onClick={(e) => handleClickHintBtn(e, 0)}
          disabled={usedHints[0]}
        >
          Hint 1
        </Button>

        {game.rounds[questionNumber].types.map((type, i) => (
          <Badge typeName={type} key={i} />
        ))}

        <Button
          className={usedHints[1] ? 'button--disabled' : 'button--red'}
          onClick={(e) => handleClickHintBtn(e, 1)}
          disabled={usedHints[1]}
        >
          Hint 2
        </Button>
      </article>

      <img src={game.rounds[questionNumber].picture} alt='' className='quiz-picture quiz-picture--hidden' />

      <div className='quiz-data'>
        <p className='quiz-data__score'>
          Score: <span>{game.score}/20</span>
        </p>
        <p className='quiz-data__timer'>{`00:${
          (timer / 1000).toString().length === 1 ? '0' + timer / 1000 : timer / 1000
        }`}</p>
      </div>

      <div className='quiz-options'>
        {game.rounds[questionNumber].answers.map((answer) => {
          return (
            <Button
              className='button--yellow'
              key={answer.id}
              onClick={() => {
                handleClickPokemonBtn(answer.isValid);
              }}
            >
              {answer.value}
            </Button>
          );
        })}
      </div>
    </section>
  );
}
