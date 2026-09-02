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

let lastOutput = "";
let codeWasChanged = false;


// -------------------------
// LANGUAGE MENU
// -------------------------

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
    outputSection.classList.add("hidden");

  });

});


// -------------------------
// RUN BUTTON
// -------------------------

runBtn.addEventListener("click", () => {

  /*
    TEMPORARY OUTPUT

    Real code execution will be added later
    using a secure code execution system.
  */

  const language = languageName.textContent;

  if (language === "Python") {

    lastOutput = "Hello brother!";

  } else {

    lastOutput =
      "Hello brother!\n\n" +
      "Program finished successfully.";
  }

  output.textContent = lastOutput;

  outputBtn.disabled = false;

  // Automatically change to output screen
  outputSection.classList.remove("hidden");

  codeEditor.classList.add("hidden");
  document.querySelector(".language").classList.add("hidden");
  document.querySelector(".buttons").classList.add("hidden");
  document.getElementById("visualizerBtn").classList.add("hidden");
  languageMenu.classList.add("hidden");

});


// -------------------------
// OUTPUT BUTTON
// -------------------------

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


// -------------------------
// BACK TO CODE
// -------------------------

backBtn.addEventListener("click", () => {

  outputSection.classList.add("hidden");

  codeEditor.classList.remove("hidden");
  document.querySelector(".language").classList.remove("hidden");
  document.querySelector(".buttons").classList.remove("hidden");
  document.getElementById("visualizerBtn").classList.remove("hidden");

});


// -------------------------
// DETECT CODE CHANGES
// -------------------------

codeEditor.addEventListener("input", () => {

  if (lastOutput !== "") {

    codeWasChanged = true;

    outputBtn.textContent = "📤 OUTPUT (OLD)";
  }

});
