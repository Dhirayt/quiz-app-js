const startButton = document.getElementById('start-button');
const questionContainer = document.getElementById('question-container');
const resultContainer = document.getElementById('result-container');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.getElementById('next-button');
const resultScore = document.getElementById('final-score');
const restartButton = document.getElementById('restart-button');

let currentQuestionIndex = 0;
let score = 0;
let quizData;
let questionKeys; // Array to store the keys of the questions (so we can iterate)

startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', showNextQuestion);
restartButton.addEventListener('click', restartQuiz);

async function fetchQuizData() {
    try {
        const response = await fetch('https://api.jsonserve.com/Uw5CrX');
        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`HTTP error! status: ${response.status}, details: ${errorText}`);
        }
        quizData = await response.json();

        // Get the keys of the questions (the question IDs)
        questionKeys = Object.keys(quizData); // This is the crucial change
        console.log(questionKeys)

    } catch (error) {
        console.error('Error fetching quiz data:', error);
        alert('Error fetching quiz data. Check the console for details.');
    }
}

async function startQuiz() {
    await fetchQuizData();
    if (quizData) {
        startButton.style.display = 'none';
        questionContainer.style.display = 'block';
        currentQuestionIndex = 0; // Reset index when starting a new quiz
        score = 0; // Reset score
        showQuestion();

    }
}

function showQuestion() {
    if (currentQuestionIndex < questionKeys.length) { // Use questionKeys.length
        const questionId = questionKeys[currentQuestionIndex]; // Get the current question ID
        const question = quizData[questionId]; // Access the question using the ID
        questionText.textContent = question.question;

        optionsContainer.innerHTML = '';

        question.options.forEach(option => {
            const optionDiv = document.createElement('div');
            optionDiv.classList.add('option');
            optionDiv.textContent = option;
            optionDiv.addEventListener('click', () => checkAnswer(option, question.answer)); // Pass the correct answer
            optionsContainer.appendChild(optionDiv);
        });

        nextButton.style.display = 'block';
    } else {
        showResults();
    }
}


function checkAnswer(selectedOption, correctAnswer) { // Receive correct answer as argument
    if (selectedOption === correctAnswer) {
        score++;
    }
    currentQuestionIndex++;
    showQuestion();
}


function showNextQuestion() {
    showQuestion(); // No need to check index here, showQuestion handles it
}

function showResults() {
    questionContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    resultScore.textContent = score;
    nextButton.style.display = 'none';
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.style.display = 'none';
    startButton.style.display = 'block';
}