const Questions = [
  {
    question: "Wild-caught fish is always a better choice.",
    answer: false,
    image: `../images/fish.png`,
  },
  {
    question: "Organic means pesticide-free.",
    answer: false,
    image: `../images/pesticides.png`,
  },
  {
    question: "Local always means more sustainable.",
    answer: false,
    image: `../images/truck.png`,
  },
  {
    question: "Not all eco-friendly packaging is better for the environment.",
    answer: true,
    image: `../images/paper-packaging.png`,
  },
  {
    question:
      "Food waste does contribute significantly to environmental issues.",
    answer: true,
    image: `../images/food-waste.png`,
  },
];

let count = 0;
let points = 0;
let question;

function showButtons() {
  document.getElementById("answerT").style.display = "";
  document.getElementById("answerF").style.display = "";
}

function catAndQuest() {
  start.style.display = "none";
  showButtons();

  document.getElementById("points").innerHTML = "Points: " + points;
  document.getElementById("count").innerHTML = "Question " + ++count + " / 5";

  question = Questions[Math.floor(Math.random() * Questions.length)];

  // Update question and image
  document.getElementById("quest").innerHTML = question.question;
  document.getElementById(
    "forgroundImage"
  ).innerHTML = `<img src="${question.image}" alt="Question Image">`;
}

function deleteUsed() {
  if (Questions.length > 1) {
    Questions.splice(Questions.indexOf(question), 1);
  } else {
    document.getElementById("answerT").style.display = "none";
    document.getElementById("answerF").style.display = "none";
    document.getElementById("questions").style.display = "none";

    if (points === 5) {
      document.getElementById("winner").style.display = "";
    } else {
      document.getElementById("looser").style.display = "";
    }

    document.getElementById("reset").style.display = "";
  }
}

function answer(value) {
  deleteUsed();
  if (value === question.answer) {
    points++;
    if (points == 5) {
      document.getElementById("answerT").style.display = "none";
      document.getElementById("answerF").style.display = "none";
      document.getElementById("questions").style.display = "none";
      document.getElementById("winner").style.display = "";
      document.getElementById("reset").style.display = "";
    }
  }
  catAndQuest();
}

function restart() {
  document.location.href = "";
}
