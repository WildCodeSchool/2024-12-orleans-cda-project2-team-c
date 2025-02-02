import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import QuizGame from '../components/quiz-game';
import QuizStart from '../components/quiz-start';
import '../css/quiz.css';
import Game from '../models/Game';
import ApiConnection from '../utils/api-connection';

ApiConnection.getQuizPokemons();

export default function Quiz() {
  const game = new Game(useLoaderData());

  const [hasStarted, setHasStarted] = useState(false);

  return hasStarted ? <QuizGame game={game} /> : <QuizStart setHasStarted={setHasStarted} />;
}
