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
  const [buttonsState, setButtonsState] = useState(
    game.rounds[questionNumber].answers.map(() => ({
      disabled: false,
      className: 'button--yellow',
    })),
  );

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
    setButtonsState((prevState) =>
      prevState.map((btn, index) => {
        const isClicked = id === game.rounds[questionNumber].answers[index].id;
        return {
          disabled: true,
          className: isClicked
            ? game.rounds[questionNumber].checkAnswer(id)
              ? 'button--success'
              : 'button--red'
            : 'button--disabled',
        };
      }),
    );

    if (id && game.rounds[questionNumber].checkAnswer(id)) {
      pictureRef.current.classList.remove('quiz-picture--hidden', 'quiz-picture--blurred');
      game.updateScore(game.rounds[questionNumber]);
    }

    if (questionNumber < 9) {
      setIsNextButtonVisible(true);
    } else {
      endGame();
    }

    const storedPokedex = JSON.parse(localStorage.getItem('result')) || [];
    const myPokedex = new Set(storedPokedex);
    game.rounds.forEach((round) => {
      if (round.isValid) {
        myPokedex.add(round.id);
      }
    });
    localStorage.setItem('result', JSON.stringify([...myPokedex]));
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
    setButtonsState(
      game.rounds[questionNumber + 1].answers.map(() => ({
        disabled: false,
        className: 'button--yellow',
      })),
    );
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
        {game.rounds[questionNumber].answers.map((answer, index) => {
          return (
            <Button
              key={answer.id}
              className={`capital ${buttonsState[index].className}`}
              onClick={(e) => endRound(e, answer.id)}
              disabled={buttonsState[index].disabled}
            >
              {answer.value.replace(/-/g, ' ')}
            </Button>
          );
        })}
      </div>
    </section>
  );
}
