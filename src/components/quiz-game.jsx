import { useEffect, useState } from 'react';

import Badge from './badge-type';
import Button from './button';

export default function QuizGame({ game, setHasFinished }) {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [timer, setTimer] = useState(3000);
  const [timerIsRunning, setTimerIsRunning] = useState(true);
  const [usedHints, setUsedHints] = useState([false, false]);
  const [areTypesVisible, setAreTypesVisible] = useState(false);
  const [pictureState, setPictureState] = useState('hidden');
  const [clickedButton, setClickedButton] = useState(null);
  const [buttonText, setButtonText] = useState(null);
  const isAnswerRight = clickedButton && game.rounds[questionNumber].checkAnswer(clickedButton);

  // timer managment **************************************************
  useEffect(() => {
    let timerInterval;
    if (timer === 0) {
      endRound();
    } else if (timerIsRunning) {
      timerInterval = setInterval(() => {
        setTimer(timer - 1000);
      }, 1000);
    }

    return () => {
      clearInterval(timerInterval);
    };
  }, [timerIsRunning, timer]);

  // functions **************************************************
  function endRound(id = null) {
    setTimerIsRunning(false);

    setClickedButton(id);

    if (id && game.rounds[questionNumber].checkAnswer(id)) {
      setPictureState('');
      game.updateScore(game.rounds[questionNumber]);
    }

    if (questionNumber < 9) {
      setButtonText('Next');
    } else {
      setButtonText('Finish');
    }
  }

  function nextRound() {
    setQuestionNumber(questionNumber + 1);
    setPictureState('hidden');
    setTimerIsRunning(true);
    setAreTypesVisible(false);
    setUsedHints([false, false]);
    setTimer(15000);
    setClickedButton(null);
    setButtonText(null);
  }

  function endGame() {
    setHasFinished(true);
  }

  function handleClickHintBtn(index) {
    setUsedHints((actualState) => {
      actualState[index] = true;
      return [...actualState];
    });
    game.rounds[questionNumber].setPenalty();
    if (index) {
      revealBlurredPicture();
    } else {
      revealTypes();
    }
  }

  function revealTypes() {
    setAreTypesVisible(true);
  }

  function revealBlurredPicture() {
    setPictureState('blurred');
  }

  // markup **************************************************
  return (
    <section className='quiz-section quiz-section--game'>
      <h1>
        <span>{questionNumber}/10</span> - Which pokémon is it ?
      </h1>

      {/* hints */}
      <article className='hints-container'>
        <h2>
          Hints <span>({2 - game.rounds[questionNumber].penalty}/2)</span>
        </h2>

        <Button
          className={usedHints[0] ? 'button--disabled' : 'button--red'}
          onClick={() => handleClickHintBtn(0)}
          disabled={usedHints[0]}
        >
          Hint 1
        </Button>

        {areTypesVisible && game.rounds[questionNumber].types.map((type, i) => <Badge typeName={type} key={i} />)}

        <Button
          className={usedHints[1] ? 'button--disabled' : 'button--red'}
          onClick={() => handleClickHintBtn(1)}
          disabled={usedHints[1]}
        >
          Hint 2
        </Button>
      </article>

      <img src={game.rounds[questionNumber].picture} alt='' className={`quiz-picture quiz-picture--${pictureState}`} />
      <div className='quiz-data'>
        <p className='quiz-data__score'>
          Score: <span>{game.score}/30</span>
        </p>
        <p className={`quiz-data__timer ${timer / 1000 < 6 ? 'quiz-data__timer--danger' : ''}`}>{`00:${
          (timer / 1000).toString().length === 1 ? '0' + timer / 1000 : timer / 1000
        }`}</p>
        {buttonText === 'Next' && (
          <Button className='button--yellow' onClick={nextRound}>
            {buttonText}
          </Button>
        )}
        {buttonText === 'Finish' && (
          <Button className='button--yellow' onClick={endGame}>
            {buttonText}
          </Button>
        )}
      </div>

      <div className='quiz-options'>
        {game.rounds[questionNumber].answers.map((answer) => {
          return (
            <Button
              key={answer.id}
              className={`capital ${
                clickedButton
                  ? clickedButton === answer.id
                    ? isAnswerRight
                      ? 'button--success'
                      : 'button--red'
                    : 'button--disabled'
                  : 'button--yellow'
              }`}
              onClick={() => endRound(answer.id)}
              disabled={clickedButton}
            >
              {answer.value.replace(/-/g, ' ')}
            </Button>
          );
        })}
      </div>
    </section>
  );
}
