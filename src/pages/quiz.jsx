import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import Button from '../components/button';
import QuizGame from '../components/quiz-game';
import QuizStart from '../components/quiz-start';
import '../css/quiz.css';
import ApiConnection from '../utils/api-connection';

ApiConnection.getQuizPokemons();

export default function Quiz() {
  const pokemons = useLoaderData();
  const [hasStarted, setHasStarted] = useState(false);

  return hasStarted ? <QuizGame /> : <QuizStart setHasStarted={setHasStarted} />;
}
