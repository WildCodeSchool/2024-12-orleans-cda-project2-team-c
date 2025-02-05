import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import QuizGame from '../components/quiz-game';
import QuizResults from '../components/quiz-results';
import QuizStart from '../components/quiz-start';
import '../css/quiz.css';
import Game from '../models/Game';
import ApiConnection from '../utils/api-connection';

ApiConnection.getQuizPokemons();

export default function Quiz() {
  // const game =
  const [game, setGame] = useState(new Game(useLoaderData()));

  const [hasStarted, setHasStarted] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  return hasStarted ? (
    hasFinished ? (
      <QuizResults game={game} />
    ) : (
      <QuizGame game={game} setHasFinished={setHasFinished} />
    )
  ) : (
    <QuizStart setHasStarted={setHasStarted} />
  );
}
