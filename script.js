document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById("start-button");
    const nextButton = document.getElementById("next-button");
    const resultButton = document.getElementById("result-button");

    const quizContainer = document.getElementById("quiz-container");
    const startScreen = document.getElementById("start-screen");
    const quizScreen = document.getElementById("quiz-screen");
    const resultScreen = document.getElementById("result-screen");
    const questionText = document.getElementById("question-text");
    const optionsContainer = document.getElementById("options-container");
    const scoreElement = document.getElementById("score");

    let currentQuestionIndex = 0;
    let score = 0;
    let questions = [];

    // Dummy data to test
    questions = [
        {
            question: "What is the capital of France?",
            options: ["Berlin", "Madrid", "Paris", "Rome"],
            correct: 2
        },
        {
            question: "Which is the largest planet in our solar system?",
            options: ["Earth", "Jupiter", "Saturn", "Mars"],
            correct: 1
        }
    ];

    // Start the quiz
    function startQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        startScreen.style.display = "none";
        quizScreen.style.display = "block";
        resultScreen.style.display = "none";
        showQuestion();
    }

    // Show the current question
    function showQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
        questionText.textContent = currentQuestion.question;
        optionsContainer.innerHTML = "";
        
        currentQuestion.options.forEach((option, index) => {
            const optionElement = document.createElement("button");
            optionElement.textContent = option;
            optionElement.classList.add("option");
            optionElement.addEventListener("click", function() {
                checkAnswer(index);
            });
            optionsContainer.appendChild(optionElement);
        });

        nextButton.style.display = "none"; // Hide the next button initially
    }

    // Check if the selected answer is correct
    function checkAnswer(selectedIndex) {
        const currentQuestion = questions[currentQuestionIndex];
        if (selectedIndex === currentQuestion.correct) {
            score++;
            alert("Correct!");
        } else {
            alert("Incorrect!");
        }
        nextButton.style.display = "block"; // Show the next button after an answer is selected
    }

    // Go to the next question
    function nextQuestion() {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showResult();
        }
    }

    // Show the final score
    function showResult() {
        quizScreen.style.display = "none";
        resultScreen.style.display = "block";
        scoreElement.textContent = score;
    }

    // Restart the quiz
    function restartQuiz() {
        startQuiz();
    }

    // Attach event listeners
    if (startButton) {
        startButton.addEventListener('click', startQuiz);
    }

    if (nextButton) {
        nextButton.addEventListener('click', nextQuestion);
    }

    if (resultButton) {
        resultButton.addEventListener('click', restartQuiz);
    }
});
