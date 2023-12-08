import React, { useState, useEffect } from 'react';

export default function PanamaQuizPopulator () {
  const [quizContainer, setQuizContainer] = useState(null);
  const [resultsContainer, setResultsContainer] = useState(null);

  useEffect(() => {
    // Function to build the quiz
    function buildQuiz() {
      // variable to store the HTML output
      const output = [];

      // for each question...
      myQuestions.forEach((currentQuestion, questionNumber) => {
        // variable to store the list of possible answers
        const answers = [];

        // and for each available answer...
        for (const letter in currentQuestion.answers) {
          // ...add an HTML radio button
          answers.push(
            <label key={letter}>
              <input type="radio" name={`question${questionNumber}`} value={letter} />
              {letter} : {currentQuestion.answers[letter]}
            </label>
          );
        }

        // add this question and its answers to the output
        output.push(
          <div key={questionNumber} className="question">
            {currentQuestion.question}
          </div>,
          <div key={`${questionNumber}-answers`} className="answers">
            {answers}
          </div>
        );
      });

      // finally combine our output list into one JSX element and put it on the page
      setQuizContainer(output);
    }

    // Function to show quiz results
    function showResults() {
      // gather answer containers from our quiz
      const answerContainers = document.querySelectorAll('.answers');

      // keep track of user's answers
      let numCorrect = 0;

      // for each question...
      myQuestions.forEach((currentQuestion, questionNumber) => {
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        // if answer is correct
        if (userAnswer === currentQuestion.correctAnswer) {
          // add to the number of correct answers
          numCorrect++;

          // color the answers green
          answerContainer.style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        else {
          // color the answers red
          answerContainer.style.color = 'red';
        }
      });

      // show number of correct answers out of total
      setResultsContainer(`${numCorrect} out of ${myQuestions.length}`);
    }

    // Kick things off
    buildQuiz();
    // ... (Your existing code)

    // Add this function to reset the quiz
    function resetQuiz() {
      // Clear any color styling from previous attempts
      const answerContainers = document.querySelectorAll('.answers');
      answerContainers.forEach(container => {
        container.style.color = '';
      });

      // Reset the results display
      setResultsContainer('');

      // Rebuild the quiz
      buildQuiz();
    }

    // Event listener for the restart button
    const restartButton = document.getElementById('restart');
    restartButton.addEventListener('click', resetQuiz);

    // ... (Your existing code)

    // Event listeners
    const submitButton = document.getElementById('submit');
    submitButton.addEventListener('click', showResults);

    // Cleanup function to remove event listeners when the component unmounts
    return () => {
      submitButton.removeEventListener('click', showResults);
      restartButton.removeEventListener('click', resetQuiz);
    };
  }, []); // The empty dependency array ensures the effect runs only once when the component mounts

  return (
    <>
      {/* Render quiz container and results container */}
      <div id="quiz">{quizContainer}</div>
      <div id="results">{resultsContainer}</div>
    </>
  );
};

const myQuestions = [
  {
      question: "Who is considered the 'Father of the Panamanian Nation' for his role in Panama's independence from Colombia?",
      answers: {
        a: "Simón Bolívar",
        b: "Omar Torrijos",
        c: "Arnulfo Arias",
        d: "Manuel Noriega"
      },
      correctAnswer: "c"
    },
    {
      question: "What is the official currency of Panama?",
      answers: {
        a: "Peso",
        b: "Balboa",
        c: "Dollar",
        d: "Lempira"
      },
      correctAnswer: "c"
    },
    {
      question: "Which famous engineering marvel connects the Atlantic and Pacific Oceans in Panama?",
      answers: {
        a: "Suez Canal",
        b: "Kiel Canal",
        c: "Panama Canal",
        d: "Grand Canal"
      },
      correctAnswer: "c"
    },
    {
      question: "What indigenous group primarily resides in the Darien Gap region of Panama?",
      answers: {
        a: "Emberá",
        b: "Guna",
        c: "Ngäbe-Buglé",
        d: "Wounaan"
      },
      correctAnswer: "a"
    },
    {
      question: "Panama celebrates its independence day on which date?",
      answers: {
        a: "November 3",
        b: "September 15",
        c: "August 10",
        d: "July 20"
      },
      correctAnswer: "a"
    },
    {
      question: "What is the traditional Panamanian folk dance often performed during festivals and celebrations?",
      answers: {
        a: "Salsa",
        b: "Cumbia",
        c: "Tamborito",
        d: "Merengue"
      },
      correctAnswer: "c"
    },
    {
      question: "Which volcano, located in western Panama, is one of the country's most active and famous landmarks?",
      answers: {
        a: "Barú Volcano",
        b: "El Valle Volcano",
        c: "Cerro Picacho",
        d: "Tacarcuna Volcano"
      },
      correctAnswer: "a"
    },
    {
      question: "Panama City's historic district, known for its Spanish colonial architecture, is called:",
      answers: {
        a: "San José",
        b: "Casco Viejo",
        c: "Paitilla",
        d: "El Cangrejo"
      },
      correctAnswer: "b"
    },
    {
      question: "What is the traditional Panamanian dish made with rice, chicken, and vegetables?",
      answers: {
        a: "Ceviche",
        b: "Ropa Vieja",
        c: "Sancocho",
        d: "Arroz con Pollo"
      },
      correctAnswer: "d"
    },
    {
      question: "Panama is home to a unique species of tree-dwelling mammal known as:",
      answers: {
        a: "Capybara",
        b: "Sloth",
        c: "Kinkajou",
        d: "Armadillo"
      },
      correctAnswer: "b"
    }
];