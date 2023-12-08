import React from 'react';
import Styles from './Styles'; // Adjust the path based on your project structure
import PhilippinesQuizPopulator from './jsxQuiz/philippinesQuizPopulator';

export default function PhilippinesQuiz() {
  return (
    <>
      <Styles /> {/* Include the styles */}

      <main>
        <PhilippinesQuizPopulator />

        <div className="button-container">
          <button id="submit">Submit</button>
          {/* Restart Quiz button */}
          <button id="restart">Restart Quiz</button>
        </div>
      </main>
    </>
  );
}
