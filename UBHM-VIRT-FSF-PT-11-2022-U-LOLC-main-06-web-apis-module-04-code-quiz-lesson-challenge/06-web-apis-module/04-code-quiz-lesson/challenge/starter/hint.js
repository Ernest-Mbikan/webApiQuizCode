// From Davinder

// var questions = [
//     {
//       title: "Commonly used data types DO NOT include:",
//       choices: ["strings", "booleans", "alerts", "numbers"],
//       answer: "alerts"
//     },
//     {
//       title: "The condition in an if / else statement is enclosed within ____.",
//       choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
//       answer: "parentheses"
//     },
//     {
//       title: "Arrays in JavaScript can be used to store ____.",
//       choices: [
//         "numbers and strings",
//         "other arrays",
//         "booleans",
//         "all of the above"
//       ],
//       answer: "all of the above"
//     },
//     {
//       title:
//         "String values must be enclosed within ____ when being assigned to variables.",
//       choices: ["commas", "curly brackets", "quotes", "parentheses"],
//       answer: "quotes"
//     },
//     {
//       title:
//         "A very useful tool used during development and debugging for printing content to the debugger is:",
//       choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
//       answer: "console.log"
    }
  ];
//   ----------------------------------------------------------------------------------------------------------
//   ----------------------------------------------------------------------------------------------------------
// From Davinder

// Let's take it step by step



// We press the start button
// What will it do ?
// It will remove the existing tags on the page
// It will bring the first question on the page
// It will start the timer on the side of the screen

// How will it do ?
// We can target the button with document.querySelector
// We will have to add an event listener to the button when it is clicked
// We will target the element that holds the existing tags
// And make its textContent="" // as empty strings
// Now we will have to add the first question, In order to do that we will have to create few elements with the help of document.createElement()
// Then give each of them some value with textContent
// Finally add them to the page with appendChild()


// Now user can click either right or wrong answer.
// If they click wrong then reduce the remaining time by 15 seconds.



// Break everything in small chunks
// Divide responsibilities to functions
// For example:  one function for creating a question and rendering it to the page. 
// 			It can take an object as a parameter an extract data from that parameter and populate your question tags with data.

//   ----------------------------------------------------------------------------------------------------------
//   ----------------------------------------------------------------------------------------------------------
