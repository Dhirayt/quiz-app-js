# Quiz App

This is a simple interactive quiz application built with HTML, CSS, and JavaScript. It is designed to fetch quiz data from an API and present it to the user in an engaging format.

## Project Overview

The application displays a series of multiple-choice questions. Users select their answers, and upon completion of the quiz, a summary of their results, including the total score, is displayed.

## API Issue

The application is designed to fetch quiz data from the API endpoint `https://api.jsonserve.com/Uw5CrX`. However, at the time of development, this API is returning a 500 Internal Server Error. This is a server-side issue and is beyond the control of the client-side code.  Due to this API issue, the quiz cannot function correctly with the intended live data.

## Mock Data

For development and testing purposes, a `data.json` file is included with mock quiz data. The application is currently configured to use this mock data.  This allows the quiz functionality to be demonstrated even while the primary API is unavailable.

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

1.  Clone the repository: `https://github.com/Dhirayt/quiz-app-js.git` 
2.  Open `index.html` in your web browser.

## Screenshots

Due to the 500 Internal Server Error with the intended API (`https://api.jsonserve.com/Uw5CrX`), I am unable to generate screenshots of the quiz application using live data.  The application relies on fetching data from this API, and the server error prevents the data from being retrieved.  Therefore, visual representations of the quiz in action using the intended data source are currently unavailable.  However, screenshots of the application running with mock data are included below.



## Video Walkthrough

Similarly, the API issue prevents me from creating a meaningful video walkthrough demonstrating the quiz functionality with live data.  As the quiz relies on the API to populate questions and answers, the 500 error makes it impossible to showcase the intended user experience with the correct data. A video walkthrough using the intended API would be possible once the API issue is resolved.  However, a video walkthrough demonstrating the application with mock data is included below.


## Further Improvements

*   Implement proper error handling for API issues (display a user-friendly message if the API is unavailable).
*   Enhance UI/UX (improve styling, responsiveness, accessibility).
*   Add more gamification features (timer, points, different question types, etc.).
*   Implement unit tests.
*   Refactor code for better organization and maintainability.

## Note

The application is currently using mock data due to the 500 Internal Server Error with the intended API.  Once the API issue is resolved, the application can be easily configured to use the live API endpoint.

## API Configuration (When the API is fixed)

To switch back to the live API, follow these steps:

1.  Open `script.js`.
2.  Locate the `fetch` call within the `fetchQuizData` function.
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
