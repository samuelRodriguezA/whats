import React from 'react';
import Styles from './Styles';// Adjust the path based on your project structure
import ColumbiaQuizPopulator from './jsxQuiz/columbiaQuizPopulator';

export default function PeruQuiz() {
  return (
    <>
      <Styles /> {/* Include the styles */}

      <main>
        <ColumbiaQuizPopulator />

        <div className="button-container">
          <button id="submit">Submit</button>
          {/* Restart Quiz button */}
          <button id="restart">Restart Quiz</button>
        </div>
      </main>
    </>
  );
}
