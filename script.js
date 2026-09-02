// ===============================
// CODELAB - MAIN JAVASCRIPT
// ===============================

const languageBtn = document.getElementById("languageBtn");
const languageMenu = document.getElementById("languageMenu");

const runBtn = document.getElementById("runBtn");
const outputBtn = document.getElementById("outputBtn");

const codeEditor = document.getElementById("codeEditor");
const outputSection = document.getElementById("outputSection");
const output = document.getElementById("output");
const backBtn = document.getElementById("backBtn");

const languageName = document.getElementById("languageName");
const languageIcon = document.getElementById("languageIcon");

const menuBtn = document.getElementById("menuBtn");
const mainMenu = document.getElementById("mainMenu");

const codeMenuBtn = document.getElementById("codeMenuBtn");
const practiceMenuBtn = document.getElementById("practiceMenuBtn");
const practiceSection = document.getElementById("practiceSection");
const problemList = document.getElementById("problemList");
const themeBtn = document.getElementById("themeBtn");

let lastOutput = "";
let currentDifficulty = "";


// ===============================
// MAIN MENU
// ===============================

menuBtn.addEventListener("click", () => {
  mainMenu.classList.toggle("hidden");
});


// ===============================
// CODE MENU BUTTON
// ===============================

codeMenuBtn.addEventListener("click", () => {

  practiceSection.classList.add("hidden");

  codeEditor.classList.remove("hidden");
  document.querySelector(".language").classList.remove("hidden");
  document.querySelector(".buttons").classList.remove("hidden");
  document.getElementById("visualizerBtn").classList.remove("hidden");

  mainMenu.classList.add("hidden");
});


// ===============================
// PRACTICE MENU BUTTON
// ===============================

practiceMenuBtn.addEventListener("click", () => {

  practiceSection.classList.remove("hidden");

  codeEditor.classList.add("hidden");
  document.querySelector(".language").classList.add("hidden");
  document.querySelector(".buttons").classList.add("hidden");
  document.getElementById("visualizerBtn").classList.add("hidden");

  mainMenu.classList.add("hidden");

  problemList.innerHTML = `
    <div class="practice-message">
      Select a difficulty above.
    </div>
  `;
});


// ===============================
// LANGUAGE MENU
// ===============================

languageBtn.addEventListener("click", () => {
  languageMenu.classList.toggle("hidden");
});


const languageButtons =
  languageMenu.querySelectorAll("button");


languageButtons.forEach(button => {

  button.addEventListener("click", () => {

    const text = button.textContent;

    if (text.includes("Python")) {

      languageName.textContent = "Python";
      languageIcon.textContent = "🐍";

      codeEditor.value =
`# Hello brother, start here!

print("Hello brother!")`;
    }

    else if (text.includes("JavaScript")) {

      languageName.textContent = "JavaScript";
      languageIcon.textContent = "🟨";

      codeEditor.value =
`// Hello brother, start here!

console.log("Hello brother!");`;
    }

    else if (text.includes("Java")) {

      languageName.textContent = "Java";
      languageIcon.textContent = "☕";

      codeEditor.value =
`// Hello brother, start here!

public class Main {
    public static void main(String[] args) {
        System.out.println("Hello brother!");
    }
}`;
    }

    else if (text === "🔵 C") {

      languageName.textContent = "C";
      languageIcon.textContent = "🔵";

      codeEditor.value =
`#include <stdio.h>

int main() {
    printf("Hello brother!");
    return 0;
}`;
    }

    else if (text.includes("C++")) {

      languageName.textContent = "C++";
      languageIcon.textContent = "🔷";

      codeEditor.value =
`#include <iostream>
using namespace std;

int main() {
    cout << "Hello brother!";
    return 0;
}`;
    }

    else if (text.includes("SQL")) {

      languageName.textContent = "SQL";
      languageIcon.textContent = "🗄️";

      codeEditor.value =
`-- Hello brother, start here!

SELECT 'Hello brother!';`;
    }

    languageMenu.classList.add("hidden");

    lastOutput = "";
    outputBtn.disabled = true;
    outputBtn.textContent = "📤 OUTPUT";

  });

});


// ===============================
// RUN BUTTON
// ===============================

runBtn.addEventListener("click", () => {

  const language = languageName.textContent;

  // Temporary demonstration output.
  // Real code execution will be added later.

  if (language === "Python") {
    lastOutput = "Hello brother!";
  }

  else {
    lastOutput =
      "Hello brother!\n\n" +
      "Program finished successfully.";
  }

  output.textContent = lastOutput;

  outputBtn.disabled = false;
  outputBtn.textContent = "📤 OUTPUT";

  // Change to output screen
  outputSection.classList.remove("hidden");

  codeEditor.classList.add("hidden");
  document.querySelector(".language").classList.add("hidden");
  document.querySelector(".buttons").classList.add("hidden");
  document.getElementById("visualizerBtn").classList.add("hidden");

  languageMenu.classList.add("hidden");
});


// ===============================
// OUTPUT BUTTON
// ===============================

outputBtn.addEventListener("click", () => {

  if (lastOutput !== "") {

    output.textContent = lastOutput;

    outputSection.classList.remove("hidden");

    codeEditor.classList.add("hidden");
    document.querySelector(".language").classList.add("hidden");
    document.querySelector(".buttons").classList.add("hidden");
    document.getElementById("visualizerBtn").classList.add("hidden");
  }
});


// ===============================
// BACK TO CODE
// ===============================

backBtn.addEventListener("click", () => {

  outputSection.classList.add("hidden");

  codeEditor.classList.remove("hidden");
  document.querySelector(".language").classList.remove("hidden");
  document.querySelector(".buttons").classList.remove("hidden");
  document.getElementById("visualizerBtn").classList.remove("hidden");
});


// ===============================
// SHOW PRACTICE PROBLEMS
// ===============================

function showProblems(difficulty) {

  currentDifficulty = difficulty;

  let problems = pythonProblems[difficulty];

  problemList.innerHTML = "";

  problems.forEach((problem, index) => {

    const card = document.createElement("div");

    card.className = "problem-card";

    card.innerHTML = `
      <div class="problem-number">
        ${String(index + 1).padStart(2, "0")}
      </div>

      <div class="problem-info">
        <h3>${problem.title}</h3>
        <p>${problem.question}</p>
      </div>

      <div class="problem-arrow">
        →
      </div>
    `;

    card.addEventListener("click", () => {
      openProblem(problem);
    });

    problemList.appendChild(card);
  });
}


// ===============================
// OPEN A PROBLEM
// ===============================

function openProblem(problem) {

  practiceSection.classList.add("hidden");

  codeEditor.classList.remove("hidden");
  document.querySelector(".language").classList.remove("hidden");
  document.querySelector(".buttons").classList.remove("hidden");
  document.getElementById("visualizerBtn").classList.remove("hidden");

  languageName.textContent = "Python";
  languageIcon.textContent = "🐍";

  codeEditor.value =
`# ${problem.title}

# ${problem.question}

# Write your solution here
`;

  lastOutput = "";

  outputBtn.disabled = true;
  outputBtn.textContent = "📤 OUTPUT";

  outputSection.classList.add("hidden");
}


// ===============================
// DARK / LIGHT THEME
// ===============================

themeBtn.addEventListener("click", () => {

  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {

    themeBtn.textContent = "☀️ Light Mode";

    localStorage.setItem("theme", "dark");

  } else {

    themeBtn.textContent = "🌙 Dark Mode";

    localStorage.setItem("theme", "light");
  }
});


// ===============================
// LOAD SAVED THEME
// ===============================

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

  document.body.classList.add("dark-mode");

  themeBtn.textContent = "☀️ Light Mode";
}
