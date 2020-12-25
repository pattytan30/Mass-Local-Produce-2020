// home page button
const startButton = document.getElementById('quiz-start-btn');
const homePage = document.getElementById('home-container');

// access to quiz
const quizSection = document.getElementById('quiz-section');
const questionElement = document.getElementById('quiz-question');
const answerElement = document.getElementById('quiz-answers');
const quizPhoto = document.getElementById('quiz-photo');

// next button
const nextButton = document.getElementById('quiz-next-btn');

// result 
const resultPage = document.getElementById('result-page');
const scoreText = document.getElementById('score');
const progressBar = document.getElementById('quiz-progressFull');

// close the quiz section
const closeButton = document.getElementById('close');
const backHome = document.getElementById('backhome');

// // share to social media
// const shareButton = document.querySelector('.share-now');
// const overlay = document.querySelector('.overlay');
// const sharePopup = document.querySelector('.share-popup');


let shuffledQuestions, currentQuestionIndex;
let score = 0;
const totalQuestions = 5; 

// actions
startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  setNextQuestion();
});

closeButton.addEventListener('click', () => {
  quizSection.classList.add('hide');
  homePage.classList.remove('hide');
  nextButton.classList.add('hide');
});

backHome.addEventListener('click', () => {
  resultPage.classList.add('hide');
  homePage.classList.remove('hide');
})


// functions
function startQuiz() {
  //   Click to start the quiz
  homePage.classList.add('hide');
  shuffledQuestions = questions.sort(() => Math.random() - .5);
  //   Math.random --> range: 0 - 1
  currentQuestionIndex = 0
  quizSection.classList.remove('hide');
  setNextQuestion()
}

function setNextQuestion() {
  //   Click next to the next question
  resetAll();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
  if (currentQuestionIndex == totalQuestions) {
    quizSection.classList.add('hide');
    resultPage.classList.remove('hide');
    scoreText.innerText = ` ${score}`;
    shareButton.addEventListener('click', () => {
      overlay.classList.remove('hide');
      sharePopup.classList.add('display-block');
      });
    overlay.addEventListener('click', () => {
      overlay.classList.add('hide');
      sharePopup.classList.remove('display-block');
    })
  }
  progressBar.style.width = `${(currentQuestionIndex + 1) / totalQuestions * 100}%`
}

function showQuestion(question) {
  quizPhoto.src = question.photo;
  questionElement.innerText = question.question;
  question.answers.forEach(answer => {
    const choicesText = document.createElement('label');
    choicesText.classList.add('quiz-answer-btn', 'btn');
    choicesText.innerHTML = `  ${answer.text}`;
    const choices = document.createElement('input');
    choices.setAttribute('type', 'radio');
    if (answer.correct) {
      choicesText.dataset.correct = answer.correct;
    }
    answerElement.appendChild(choicesText);
    choicesText.appendChild(choices);
    choicesText.addEventListener('click', selectAnswer);
  })
}

function resetAll() {
  //   hide next button before select an answer, remove all default buttons under answerElement
  nextButton.classList.add('hide');
  answerElement.classList.remove('disabled');
  while (answerElement.firstChild) {
    answerElement.removeChild(answerElement.firstChild);
  }
}

function selectAnswer(event) {
  //   Check whether or not the answer is right or wrong
  const selectedButton = event.target.dataset.correct
    if (selectedButton) {
      score += 20;
    } else {
      score += 0;
    }
  Array.from(answerElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct);
    
  })
  answerElement.classList.add('disabled');
  if (currentQuestionIndex + 1 < totalQuestions) {
    nextButton.classList.remove('hide');
  } else {
    nextButton.innerText = 'End';
    nextButton.classList.remove('hide');
    }
  }

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct');
  } else {
    element.classList.add('incorrect');
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('incorrect');
}


// -----Fun fact quiz questions ---------------------------
const questions = [
  {
    question: `Whether or not it is true that eating massive amount of carrots can sometimes cause a person's skin to turn yellowish orange.`,
    answers: [
      { text: 'Yes', correct: true },
      { text: 'No', correct: false }],
    photo: `https://images.pexels.com/photos/5745996/pexels-photo-5745996.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`
  },
  {
    question: 'Which of the following veggies was the first to be grown in space?',
    answers: [
      { text: 'Broccoli', correct: false },
      { text: 'Potato', correct: true },
      { text: 'Tomato', correct: false }
    ],
    photo: `https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`
  },
  {
    question: 'Which of the following foods is considered as fruits? ',
    answers: [
      { text: 'Avocado', correct: false },
      { text: 'Cucumber', correct: false },
      { text: 'Pumpkin', correct: false },
      { text: 'All of them', correct: true }
    ],
    photo: `https://images.pexels.com/photos/4147873/pexels-photo-4147873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`
  },
  {
    question: 'Will a pineapple plant produce every year?',
    answers: [
      { text: 'No, it produces one pineapple and then it dies.', correct: true },
      { text: 'No, it produces one pineapple every 2-3 years.', correct: false },
      { text: 'Yes, it produces one pineapple every year.', correct: false },
      { text: 'Yes, it produces multiple pineapples every year.', correct: false }
    ],
    photo: `https://images.pexels.com/photos/4110333/pexels-photo-4110333.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`
  },
  {
    question: 'The Official State Berry of Massachusetts is ...',
    answers: [
      { text: 'Cranberry', correct: true },
      { text: 'Huckleberry', correct: false },
      { text: 'Raspberry', correct: false }
    ],
    photo: `https://images.pexels.com/photos/533389/pexels-photo-533389.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500`
  },
  {
    question: 'When is the National Pumpkins Day?',
    answers: [
      { text: 'Oct. 11', correct: false },
      { text: 'Oct. 23', correct: false },
      { text: 'Oct. 26', correct: true }
    ],
    photo: `https://images.pexels.com/photos/4671692/pexels-photo-4671692.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500`
  },
  {
    question: 'On average, how many seeds does a strawberry carry?',
    answers: [
      { text: '50', correct: false },
      { text: '200', correct: true },
      { text: '500', correct: false }
    ],
    photo: `https://images.pexels.com/photos/429807/pexels-photo-429807.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500`
  },
  {
    question: `Which state has a nickname of "peach state"?`,
    answers: [
      { text: 'California', correct: false },
      { text: 'Georgia', correct: true },
      { text: 'New Jersey', correct: false },
      { text: 'South Carolina', correct: false }
    ],
    photo: `https://images.pexels.com/photos/4397786/pexels-photo-4397786.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`
  },
  {
    question: 'Nearly 80% of potato is ...',
    answers: [
      { text: 'Carbohydrates', correct: false },
      { text: 'Fat', correct: false },
      { text: 'Protein', correct: false },
      { text: 'Water', correct: true }
    ],
    photo: `https://images.pexels.com/photos/2286776/pexels-photo-2286776.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`
  },
  {
    question: 'Lettuce was first cultivated by the ...',
    answers: [
      { text: 'Ancient Egyptians', correct: true },
      { text: 'Ancient Greece', correct: false },
      { text: 'Ancient Indians', correct: false },
      { text: 'Chinese', correct: false }
    ],
    photo: `https://images.pexels.com/photos/2893639/pexels-photo-2893639.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`
  }
]