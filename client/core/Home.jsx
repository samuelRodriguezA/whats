import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './Styles';

export default function Home(){ 
  return (
    <>
      <Styles/>
      <main>
        <section id="intro">
          <div className="intro-text">
            <img src="./../assets/images/logo.png" alt="Filatino Logo" width="300px" height="300px" />
            <h1>Welcome to the Quiz Website!</h1>
            <p>Choose a flag below to start a quiz</p>
          </div>
          <div className="flags">
            <div className="flags-row">
              <Link to="/peruQuiz" className="flag-link" data-country="Peru">
                <img src="./../assets/images/peru.png" alt="Peruvian Flag" />
              </Link>
              <Link to="/columbiaQuiz" className="flag-link" data-country="Colombia">
                <img src="./../assets/images/colombia.png" alt="Colombian Flag" />
              </Link>
            </div>
            <div className="flags-row">
              <Link to="/panamaQuiz" className="flag-link" data-country="Panama">
                <img src="./../assets/images/panama.png" alt="Panamanian Flag" />
              </Link>
              <Link to="/philippinesQuiz" className="flag-link" data-country="Philippines">
                <img src="./../assets/images/filipinas.png" alt="Philippine Flag" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}