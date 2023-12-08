import React, { useState, useEffect } from 'react';

export default function PeruQuizPopulator () {
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
      question: "What is the capital city of Peru?",
      answers: {
        a: "Lima",
        b: "Cusco",
        c: "Arequipa",
        d: "Trujillo"
      },
      correctAnswer: "a"
    },
    {
      question: "Which ancient civilization built the city of Machu Picchu in Peru?",
      answers: {
        a: "Inca",
        b: "Moche",
        c: "Nazca",
        d: "Chimu"
      },
      correctAnswer: "a"
    },
    {
      question: "What is the official language of Peru?",
      answers: {
        a: "Spanish",
        b: "Quechua",
        c: "Aymara",
        d: "English"
      },
      correctAnswer: "a"
    },
    {
      question: "Which river runs through the city of Iquitos in the Peruvian Amazon?",
      answers: {
        a: "Amazon River",
        b: "Ucayali River",
        c: "Marañón River",
        d: "Nanay River"
      },
      correctAnswer: "b"
    },
    {
      question: "What is the name of the traditional Peruvian dish made from raw fish cured in citrus juices?",
      answers: {
        a: "Ceviche",
        b: "Lomo Saltado",
        c: "Anticuchos",
        d: "Aji de Gallina"
      },
      correctAnswer: "a"
    },
    {
      question: "Which festival in Peru celebrates the Incan sun god Inti?",
      answers: {
        a: "Inti Raymi",
        b: "Carnaval",
        c: "Semana Santa",
        d: "Fiestas Patrias"
      },
      correctAnswer: "a"
    },
    {
      question: "What is the highest mountain in Peru and the fourth highest in South America?",
      answers: {
        a: "Huascarán",
        b: "Alpamayo",
        c: "Chopicalqui",
        d: "Yerupajá"
      },
      correctAnswer: "a"
    },
    {
      question: "Which archaeological site in Peru is known for its mysterious geoglyphs?",
      answers: {
        a: "Machu Picchu",
        b: "Nazca Lines",
        c: "Chan Chan",
        d: "Sipán"
      },
      correctAnswer: "b"
    },
    {
      question: "What is the currency of Peru?",
      answers: {
        a: "Peso",
        b: "Sol",
        c: "Quetzal",
        d: "Bolivar"
      },
      correctAnswer: "b"
    },
    {
      question: "Which Peruvian author won the Nobel Prize in Literature in 2010?",
      answers: {
        a: "Mario Vargas Llosa",
        b: "Ciro Alegría",
        c: "Julio Ramón Ribeyro",
        d: "Alfredo Bryce Echenique"
      },
      correctAnswer: "a"
    }
];
