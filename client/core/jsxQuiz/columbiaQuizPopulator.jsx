import React, { useState, useEffect } from 'react';

export default function ColumbiaQuizPopulator () {
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
      question: "What is the capital city of Colombia?",
      answers: {
        a: "Bogotá",
        b: "Medellín",
        c: "Cali",
        d: "Cartagena"
      },
      correctAnswer: "a"
    },
    {
      question: "Which Colombian city is famous for its annual Flower Festival?",
      answers: {
        a: "Barranquilla",
        b: "Cali",
        c: "Medellín",
        d: "Cartagena"
      },
      correctAnswer: "c"
    },
    {
      question: "In what year did Colombia gain its independence from Spanish rule?",
      answers: {
        a: "1810",
        b: "1821",
        c: "1830",
        d: "1845"
      },
      correctAnswer: "b"
    },
    {
      question: "What is the name of the famous pre-Columbian archaeological site in Colombia?",
      answers: {
        a: "Tierradentro",
        b: "San Agustín",
        c: "La Ciudad Perdida",
        d: "El Infiernito"
      },
      correctAnswer: "c"
    },
    {
      question: "Which Colombian coffee-growing region is renowned for its high-quality beans?",
      answers: {
        a: "Huila",
        b: "Caldas",
        c: "Antioquia",
        d: "Nariño"
      },
      correctAnswer: "d"
    },
    {
      question: "What is the main river that flows through the city of Barranquilla?",
      answers: {
        a: "Magdalena River",
        b: "Cauca River",
        c: "Guaviare River",
        d: "Atrato River"
      },
      correctAnswer: "a"
    },
    {
      question: "Which Colombian artist is known as the 'King of Vallenato'?",
      answers: {
        a: "Carlos Vives",
        b: "Jorge Celedón",
        c: "Diomedes Díaz",
        d: "Iván Villazón"
      },
      correctAnswer: "c"
    },
    {
      question: "What is the traditional Colombian dish made with grilled meat, potatoes, and chimichurri sauce?",
      answers: {
        a: "Arepas",
        b: "Bandeja Paisa",
        c: "Sancocho",
        d: "Lechona"
      },
      correctAnswer: "b"
    },
    {
      question: "Which Colombian city is known for its vibrant street art and graffiti?",
      answers: {
        a: "Bogotá",
        b: "Cali",
        c: "Medellín",
        d: "Cartagena"
      },
      correctAnswer: "c"
    },
    {
      question: "In which year did Colombia host the FIFA World Cup for the first time?",
      answers: {
        a: "1986",
        b: "1990",
        c: "1994",
        d: "1998"
      },
      correctAnswer: "a"
    }
];
