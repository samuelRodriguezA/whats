import React from 'react';
import Styles from './Styles'; // Adjust the path based on your project structure
import PanamaQuizPopulator from './jsxQuiz/panamaQuizPopulator';

export default function PanamaQuiz() {
  return (
    <>
      <Styles /> {/* Include the styles */}

      <main>
        <PanamaQuizPopulator />

        <div className="button-container">
          <button id="submit">Submit</button>
          {/* Restart Quiz button */}
          <button id="restart">Restart Quiz</button>
        </div>
      </main>
    </>
  );
}
