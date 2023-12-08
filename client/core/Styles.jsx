export default function Styles(){ 
    return (
        <style>
          {`
            body {
              font-family: 'Poppins', sans-serif;
              margin: 0;
              padding: 0;
              background-color: rgb(238, 238, 238);
            }
            
            .intro-text img {
              margin-top: -170px;
            }
            
            body.quizzes {
              font-family: 'Poppins', sans-serif;
              background-image: url('img/worldwithlines.jpg');
              background-size: cover;
              background-position: center center;
              box-sizing: border-box;
              background-repeat: no-repeat;
              background-attachment: fixed;
            }
            
            .peru-outline {
              width: 65px;
              height: 95px;
              margin-top: 357px;
              margin-left: 230px;
            }
            
            .colombia-outline {
              width: 90px;
              height: 105px;
              margin-bottom: 70px;
              margin-left: -70px;
            }
            
            header {
              background-color: #333;
              color: rgb(222, 222, 222);
              padding: 20px 0;
              text-align: center;
              justify-content: space-between;
            }
            
            header:hover {
              color: rgb(201, 145, 16);
            }
            
            nav ul {
              list-style-type: none;
              margin: 0;
              padding: 0;
            }
            
            nav ul li {
              display: inline;
              margin-right: 50px;
              margin-left: 50px;
            }
            
            nav a {
              text-decoration: none;
              color: white;
            }
            
            main {
              max-width: 800px;
              margin: 20px auto;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }
            
            #intro {
              margin-bottom: 20px;
              margin-top: 25%;
            }
            
            .intro-text {
              text-align: center;
            }
            
            .flags {
              display: flex;
              justify-content: center;
              align-items: center;
              margin-top: 10%;
            }
            
            .flags a {
              text-decoration: none;
              color: #333;
              margin: 0 20px;
              position: relative;
              display: inline-block;
            }
            
            .flags img {
              width: 100px;
              height: 100px;
              cursor: pointer;
              transition: transform 0.3s ease-in-out;
            }
            
            .flags a:hover img {
              transform: scale(1.2);
            }
            
            .flags a:hover:before {
              content: attr(data-country);
              position: absolute;
              top: -30px;
              left: 50%;
              transform: translateX(-50%);
              background: rgba(255, 255, 255, 0.9);
              padding: 5px;
              border-radius: 5px;
              display: inline-block;
              font-size: 14px;
            }
    
            /* Your existing CSS styles */
    
            /* Style for the button container */
            .button-container {
              display: flex;
              justify-content: space-between; /* Adjust as needed */
              margin-top: 20px;
              margin-left: 30px; /* Add some spacing between buttons */
            }
    
            /* peru */
            .question {
              font-weight: 600;
              font-family: 'Poppins';
            }
            
            .answers {
              margin-bottom: 20px;
              font-family: 'Poppins';
            }
            
            .answers label {
              display: block;
              font-family: 'Poppins';
            }
            
            #submit {
              font-family: 'Poppins';
              font-size: 20px;
              background-color: rgb(34, 153, 80);
              color: #fff;
              border: 0px;
              border-radius: 15px;
              padding: 20px;
              cursor: pointer;
              margin-bottom: 20px;
              margin-right: 50px;
            }
            
            #submit:hover {
              background-color: rgb(51, 170, 61);
            }
            
            #restart {
              font-family: 'Poppins';
              font-size: 20px;
              background-color: rgb(153, 34, 34);
              color: #fff;
              border: 0px;
              border-radius: 15px;
              padding: 20px;
              cursor: pointer;
              margin-bottom: 20px;
            }
            
            #restart:hover {
              background-color: rgb(170, 51, 51);
            }
            
            .tooltip {
              position: absolute;
              top: 50%;
              left: calc(100% + 10px);
              transform: translate(0, -50%);
              background: rgba(255, 255, 255, 0.9);
              padding: 5px;
              border-radius: 5px;
              font-size: 20px;
            }
          `}
        </style>
      );
  }