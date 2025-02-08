# Quiz App

This is a simple quiz application built using HTML, CSS, and JavaScript. It is designed to fetch quiz data from an API and present it to the user in an interactive format.

## Project Overview

The application displays a series of multiple-choice questions. Users select their answers, and upon completion of the quiz, a summary of their results, including the total score, is displayed.

## API Issue

The application is designed to fetch quiz data from the API endpoint `https://api.jsonserve.com/Uw5CrX`. However, at the time of development, this API is returning a 500 Internal Server Error. This is a server-side issue and is beyond the control of the client-side code.  Due to this API issue, the quiz cannot function correctly with the intended live data.

## Mock Data

For development and testing purposes, a `data.json` file is included with mock quiz data. The application is currently configured to use this mock data.  To use the mock data, the code fetches from `data.json`.

## Functionality

*   **Start Quiz:** Starts the quiz and displays the first question.
*   **Multiple-choice questions:** Presents questions with multiple options.
*   **Result Summary:** Shows the total score upon quiz completion.
*   **Restart Quiz:** Allows the user to restart the quiz.

## Technologies Used

*   HTML
*   CSS
*   JavaScript

## Setup Instructions

1.  Clone the repository: `git clone https://github.com/your-username/your-repository-name.git` (Replace with your actual repository URL)
2.  Open `index.html` in your web browser.

## Screenshots

*(Insert screenshots of the quiz app here.  Show the quiz starting, a question being answered, and the results screen.  Even if using mock data, these screenshots are crucial.)*

## Video Walkthrough

*(Insert a link to a video walkthrough of the app here.  Demonstrate the quiz functionality using the mock data.  Explain the API issue in the video.)*

## Further Improvements

*   Implement proper error handling for API issues (display a user-friendly message if the API is unavailable).
*   Enhance UI/UX (improve styling, responsiveness).
*   Add more gamification features (timer, points, different question types, etc.).
*   Implement unit tests.

## Note

The application is currently using mock data due to the 500 Internal Server Error with the intended API.  Once the API issue is resolved, the application can be easily configured to use the live API endpoint.

## API Configuration (When the API is fixed)

To switch back to the live API, follow these steps:

1.  Open `script.js`.
2.  Locate the `fetch` call in the `fetchQuizData` function.
3.  Replace the current fetch URL (`data.json`) with the live API URL (`https://api.jsonserve.com/Uw5CrX`).

```javascript
// Example (when API is fixed):
fetch('[https://api.jsonserve.com/Uw5CrX](https://api.jsonserve.com/Uw5CrX)') // Use the live API
    .then(response => { /* ... */ })
    .catch(error => { /* ... */ });

// Current configuration (using mock data):
fetch('data.json') // Use mock data
    .then(response => { /* ... */ })
    .catch(error => { /* ... */ });