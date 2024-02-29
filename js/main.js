// Array of questions, each with a question, answer, and image
const Questions = [
  {
    question: "Wild-caught fish is always a better choice.",
    answer: false,
    image: `images/fish.png`,
  },
  {
    question: "Organic means pesticide-free.",
    answer: false,
    image: `images/pesticides.png`,
  },
  {
    question: "Local always means more sustainable.",
    answer: false,
    image: `images/truck.png`,
  },
  {
    question: "Not all eco-friendly packaging is better for the environment.",
    answer: true,
    image: `images/paper-packaging.png`,
  },
  {
    question:
      "Food waste does contribute significantly to environmental issues.",
    answer: true,
    image: `images/food-waste.png`,
  },
];

// Counter variables
let count = 0;
let points = 0;
let question;

// Function to show answer buttons
function showButtons() {
  document.getElementById("answerT").style.display = "";
  document.getElementById("answerF").style.display = "";
}

// Function to handle the logic of showing questions and images
function catAndQuest() {
  start.style.display = "none";
  showButtons();

  // Update displayed points and question count
  document.getElementById("points").innerHTML = "Points: " + points;
  document.getElementById("count").innerHTML = "Question " + ++count + " / 5";

  // Randomly select a question from the array
  question = Questions[Math.floor(Math.random() * Questions.length)];

  // Update question and image in the HTML
  document.getElementById("quest").innerHTML = question.question;
  document.getElementById(
    "forgroundImage"
  ).innerHTML = `<img src="${question.image}" alt="Question Image">`;
  // Add a class to trigger the animation
  document.getElementById("forgroundImage").classList.add("animate-slideInTop");
}

// Function to handle cleanup after answering a question
function deleteUsed() {
  if (Questions.length > 1) {
    // If there are more questions, get a new question
    Questions.splice(Questions.indexOf(question), 1);
  } else {
    // If there are no more questions, hide buttons and display result messages

    document.getElementById("answerT").style.display = "none";
    document.getElementById("answerF").style.display = "none";
    document.getElementById("questions").style.display = "none";

    // Display winner or loser messages based on points
    if (points === 5) {
      document.getElementById("winner").style.display = "";
    } else {
      document.getElementById("looser").style.display = "";
    }

    // Ensure that the loser message is not displayed when the user wins
    if (points !== 5) {
      document.getElementById("reset").style.display = "";
    }
  }
}

// Function to handle the logic after answering a question
function answer(value) {
  deleteUsed();
  if (value === question.answer) {
    points++;
    if (points == 5) {
      // If user reaches 5 points, hide buttons and display winner message
      document.getElementById("answerT").style.display = "none";
      document.getElementById("answerF").style.display = "none";
      document.getElementById("questions").style.display = "none";
      document.getElementById("winner").style.display = "";
      document.getElementById("reset").style.display = "";
    }
  }
  catAndQuest(); // Move on to the next question
}
// Function to remove the animation class after the animation is complete
function removeAnimationClass() {
  document
    .getElementById("forgroundImage")
    .classList.remove("animate-slideInTop");
}

// Add an event listener to trigger the animation removal after animation completes
document
  .getElementById("forgroundImage")
  .addEventListener("animationend", removeAnimationClass);

// // Add event listeners to True and Myth buttons
// document
//   .getElementById("trueButton")
//   .addEventListener("click", handleButtonClick);
// document
//   .getElementById("mythButton")
//   .addEventListener("click", handleButtonClick);

// Function to restart the game by reloading the page
function restart() {
  document.location.href = "";
}
