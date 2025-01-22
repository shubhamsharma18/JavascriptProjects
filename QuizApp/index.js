// Get DOM elements
const startbtn = document.getElementById("start");
const quizdiv = document.getElementById("quiz");
const quizform = document.getElementById("form");
const resetbtn = document.getElementById("resetbtn");
const main = document.getElementById("main");

// Initialize variables
let currentQuestionIndex = 0;
let count = 0;

// Event listener for the reset button
resetbtn.addEventListener("click", () => {
  currentQuestionIndex = 0; // Reset question index
  count = 0; // Reset score
  display(); // Display the first question
});

// Event listener for the start button
startbtn.addEventListener("click", () => {
  quizdiv.style.display = "none"; // Hide quiz div
  quizform.style.display = "block"; // Show quiz form
  main.style.backgroundColor = "green"; // Change background color
  display(); // Display the first question
});

// Questions array
const questions = [
  {
    question: "1. Which of the following is not a NoSQL database?",
    opt1: "MongoDB",
    opt2: "Cassandra",
    opt3: "MySQL",
    opt4: "Redis",
    ans: "opt3" // Correct answer
  },
  {
    question: "2. What is the primary purpose of a DNS server?",
    opt1: "To store files",
    opt2: "To translate domain names into IP addresses",
    opt3: "To manage email traffic",
    opt4: "To secure network connections",
    ans: "opt2" // Correct answer
  },
  {
    question: "3. Which algorithm is commonly used for data encryption?",
    opt1: "Bubble Sort",
    opt2: "RSA",
    opt3: "Dijkstra's Algorithm",
    opt4: "Quick Sort",
    ans: "opt2" // Correct answer
  },
  {
    question: "4. What is the main advantage of using a microservices architecture?",
    opt1: "Easier debugging",
    opt2: "Improved scalability and flexibility",
    opt3: "Reduced network traffic",
    opt4: "Simplified deployment",
    ans: "opt2" // Correct answer
  },
  {
    question: "5. Which of the following protocols is used for secure data transmission?",
    opt1: "HTTP",
    opt2: "FTP",
    opt3: "SMTP",
    opt4: "HTTPS",
    ans: "opt4" // Correct answer
  },
  {
    question: "6. What is the purpose of a firewall in a network?",
    opt1: "To increase network speed",
    opt2: "To monitor network traffic",
    opt3: "To block unauthorized access",
    opt4: "To provide Wi-Fi access",
    ans: "opt3" // Correct answer
  },
  {
    question: "7. Which programming language is primarily used for Android app development?",
    opt1: "Swift",
    opt2: "Java",
    opt3: "C#",
    opt4: "Ruby",
    ans: "opt2" // Correct answer
  },
  {
    question: "8. What does the acronym 'API' stand for?",
    opt1: "Application Programming Interface",
    opt2: "Advanced Programming Interface",
    opt3: "Application Process Integration",
    opt4: "Automated Programming Interface",
    ans: "opt1" // Correct answer
  },
  {
    question: "9. Which of the following is a version control system?",
    opt1: "Jira",
    opt2: "Git",
    opt3: "Docker",
    opt4: "Kubernetes",
    ans: "opt2" // Correct answer
  },
  {
    question: "10. What is the purpose of the 'garbage collector' in programming languages?",
    opt1: "To optimize code performance",
    opt2: "To manage memory automatically",
    opt3: "To compile code",
    opt4: "To handle exceptions",
    ans: "opt2" // Correct answer
  }
];

// Function to display the current question
function display() {
  const currentQuestion = questions[currentQuestionIndex];
  const questionElements = document.getElementById("question");
  const optionsElements = document.querySelector(".options");

  questionElements.textContent = currentQuestion.question;
  optionsElements.innerHTML = ""; // Clear previous options

  // Create buttons for each option
  for (let i = 1; i <= 4; i++) {
    const option = document.createElement("button");
    option.textContent = currentQuestion[`opt${i}`];
    option.addEventListener("click", () => {
      check(`opt${i}`); // Check the selected option
    });
    optionsElements.appendChild(option); // Append option button
  }
}

// Function to check the selected answer
function check(selectedOption) {
  const currentQuestion = questions[currentQuestionIndex];
  if (selectedOption === currentQuestion.ans) {
    alert("RIGHT ANSWER");
    count++; // Increment score for correct answer
  } else {
    alert("WRONG ANSWER");
  }

  currentQuestionIndex++; // Move to the next question
  if (currentQuestionIndex < questions.length) {
    display(); // Display the next question
  } else {
    alert("QUIZ FINISHED! YOUR SCORE: " + count + " OUT OF 10");
  }
}