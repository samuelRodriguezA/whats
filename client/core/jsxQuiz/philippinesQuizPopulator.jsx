import React, { useState, useEffect } from 'react';

export default function PhilippinesQuizPopulator () {
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
      question: "Who wrote the 'Kartilla,' considered the 'bible' of the Katipunan movement?",
      answers: {
        a: "Apolinario Mabini",
        b: "Emilio Jacinto",
        c: "Andres Bonifacio",
        d: "Valentin Diaz"
      },
      correctAnswer: "b"
    },
    {
      question: "Who created the designs for the Philippine national flag?",
      answers: {
        a: "Marcela Agoncillo",
        b: "Emilio Aguinaldo",
        c: "Apolinario Mabini",
        d: "Julian Felipe"
      },
      correctAnswer: "b"
    },
    {
      question: "Which of the following former presidents died in a plane crash?",
      answers: {
        a: "Ferdinand Marcos",
        b: "Emilio Aguinaldo",
        c: "Carlos Garcia",
        d: "Ramon Magsaysay"
      },
      correctAnswer: "d"
    },
    {
      question: "When did the original Edsa (People's Power) Revolution begin?",
      answers: {
        a: "February 22, 1986",
        b: "February 26, 2002",
        c: "January 19, 2002",
        d: "January 19, 1986"
      },
      correctAnswer: "a"
    },
    {
      question: "What place in the Philippines is also known as the 'walled city'?",
      answers: {
        a: "Plaza Miranda",
        b: "Intramuros",
        c: "Luneta",
        d: "Fort Santiago"
      },
      correctAnswer: "b"
    },
    {
      question: "From which language is the Filipino vernacular largely derived?",
      answers: {
        a: "Cebuano",
        b: "Tagalog",
        c: "Pangasinense",
        d: "Kapampangan"
      },
      correctAnswer: "b"
    },
    {
      question: "Where was Rizal's novel 'Noli Mi Tangere' published?",
      answers: {
        a: "Brussels",
        b: "Berlin",
        c: "Barcelona",
        d: "Paris"
      },
      correctAnswer: "b"
    },
    {
      question: "Who is generally acknowledged as the first President of the Philippines?",
      answers: {
        a: "Andres Bonifacio",
        b: "Manuel Roxas",
        c: "Manuel Quezon",
        d: "Emilio Aguinaldo"
      },
      correctAnswer: "d"
    },
    {
      question: "She is a Filipino heroine. After her husband died, she continued the war against Spain, was caught and hanged.",
      answers: {
        a: "Gregoria de Jesus",
        b: "Teodora Alonso",
        c: "Leonor Rivera",
        d: "Gabriela Silang"
      },
      correctAnswer: "d"
    },
    {
      question: "Who was the chief advisor of Gen. Emilio Aguinaldo?",
      answers: {
        a: "Apolinario Mabini",
        b: "Felipe Calderon",
        c: "Pedro Paterno",
        d: "Jose Rizal"
      },
      correctAnswer: "a"
    }
];
