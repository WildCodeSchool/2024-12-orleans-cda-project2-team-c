import { useEffect, useRef, useState } from 'react';

import Badge from './badge-type';
import Button from './button';

export default function QuizGame({ game, setHasFinished }) {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [timer, setTimer] = useState(15000);
  const [timerIsRunning, setTimerIsRunning] = useState(true);
  const [usedHints, setUsedHints] = useState([false, false]);
  const [areTypesVisible, setAreTypesVisible] = useState(false);
  const [isPictureBlurred, setIsPictureBlurred] = useState(false);
  const [isNextButtonVisible, setIsNextButtonVisible] = useState(false);
  const quizOptionsRef = useRef(null);
  const pictureRef = useRef(null);

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
  function endRound(e = null, id = null) {
    setTimerIsRunning(false);

    [...quizOptionsRef.current.children].forEach((button) => {
      button.disabled = true;
      button.classList.replace('button--yellow', 'button--disabled');
    });

    if (id) {
      if (game.rounds[questionNumber].checkAnswer(id)) {
        e.target.classList.replace('button--disabled', 'button--success');
        pictureRef.current.classList.remove('quiz-picture--hidden', 'quiz-picture--blurred');
        game.updateScore(game.rounds[questionNumber]);
      } else {
        e.target.classList.replace('button--disabled', 'button--red');
      }
    }

    if (questionNumber < 9) {
      setIsNextButtonVisible(true);
    } else {
      endGame();
    }
  }

  function nextRound() {
    setQuestionNumber(questionNumber + 1);
    pictureRef.current.classList.add('quiz-picture--hidden');
    setIsNextButtonVisible(false);
    setTimerIsRunning(true);
    setAreTypesVisible(false);
    setIsPictureBlurred(false);
    setUsedHints([false, false]);
    setTimer(15000);
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
    setIsPictureBlurred(true);
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

      <img
        src={game.rounds[questionNumber].picture}
        alt=''
        className={`quiz-picture ${isPictureBlurred ? 'quiz-picture--blurred' : 'quiz-picture--hidden'}`}
        ref={pictureRef}
      />

      <div className='quiz-data'>
        <p className='quiz-data__score'>
          Score: <span>{game.score}/30</span>
        </p>
        <p className={`quiz-data__timer ${timer / 1000 < 6 ? 'quiz-data__timer--danger' : ''}`}>{`00:${
          (timer / 1000).toString().length === 1 ? '0' + timer / 1000 : timer / 1000
        }`}</p>
        {isNextButtonVisible && (
          <Button className='button-yellow' onClick={nextRound}>
            Next
          </Button>
        )}
      </div>

      <div className='quiz-options' ref={quizOptionsRef}>
        {game.rounds[questionNumber].answers.map((answer) => {
          return (
            <Button
              className='button--yellow capital'
              key={answer.id}
              onClick={(e) => {
                endRound(e, answer.id);
              }}
            >
              {answer.value.replace(/-/g, ' ')}
            </Button>
          );
        })}
      </div>
    </section>
  );
}
