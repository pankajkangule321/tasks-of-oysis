var currentQuestion = 0;
var score = 0;

var questions = [
  {
    question: "What is the highest-grossing Bollywood film of all time?",
    options: {
      option1: "Dangal",
      option2: "Baahubali 2",
      option3: "PK",
      option4: "Sultan"
    },
    answer: "option2"
  },
  {
    question: "Which actor has won the most Filmfare awards for Best Actor?",
    options: {
      option1: "Amitabh Bachchan",
      option2: "Shah Rukh Khan",
      option3: "Aamir Khan",
      option4: "Salman Khan"
    },
    answer: "option1"
  },
  {
    question: "Which Bollywood movie won the Academy Award for Best Foreign Language Film?",
    options: {
      option1: "Mother India",
      option2: "Lagaan",
      option3: "Dilwale Dulhania Le Jayenge",
      option4: "Piku"
    },
    answer: "option2"
  }
];

function startQuiz() {
  document.querySelector('.score-container').style.display = 'block';
  document.querySelector('.score-container button').style.display = '
