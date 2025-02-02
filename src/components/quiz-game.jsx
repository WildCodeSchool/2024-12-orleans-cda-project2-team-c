import { useState } from 'react';

import Button from './button';

export default function QuizGame({ game }) {
  const [questionNumber, setQuestionNumber] = useState(0);

  function handleClickPokemonBtn() {}

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
      </article>

      <img src='' alt='' className='quiz-picture quiz-picture--hidden' />

      <div className='quiz-data'></div>

      <div className='quiz-options'>
        <Button className={'button--yellow'} onClick={handleClickPokemonBtn} />
      </div>
    </section>
  );
}
