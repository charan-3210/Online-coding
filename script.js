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

const visualizerBtn = document.getElementById("visualizerBtn");

let lastOutput = "";
let lastRunCode = "";
let lastRunLanguage = "";
let currentDifficulty = "";

// -------------------------------
// MENU
// -------------------------------

menuBtn.addEventListener("click", () => {
    mainMenu.classList.toggle("hidden");
});

codeMenuBtn.addEventListener("click", () => {
    practiceSection.classList.add("hidden");

    codeEditor.classList.remove("hidden");
    document.querySelector(".language").classList.remove("hidden");
    document.querySelector(".buttons").classList.remove("hidden");
    visualizerBtn.classList.remove("hidden");

    mainMenu.classList.add("hidden");
});

practiceMenuBtn.addEventListener("click", () => {
    practiceSection.classList.remove("hidden");

    codeEditor.classList.add("hidden");
    document.querySelector(".language").classList.add("hidden");
    document.querySelector(".buttons").classList.add("hidden");
    visualizerBtn.classList.add("hidden");

    outputSection.classList.add("hidden");

    mainMenu.classList.add("hidden");

    problemList.innerHTML =
        `<div class="practice-message">
            Select a difficulty above.
        </div>`;
});

// -------------------------------
// LANGUAGE MENU
// -------------------------------

languageBtn.addEventListener("click", () => {
    languageMenu.classList.toggle("hidden");
});

const languageButtons = languageMenu.querySelectorAll("button");

languageButtons.forEach(button => {

    button.addEventListener("click", () => {

        const text = button.textContent.trim();

        if (text.includes("Python")) {

            languageName.textContent = "Python";
            languageIcon.textContent = "🐍";

            codeEditor.value =
`# Hello brother, start here!

print("Hello brother!")`;

        } else if (text.includes("JavaScript")) {

            languageName.textContent = "JavaScript";
            languageIcon.textContent = "🟨";

            codeEditor.value =
`// Hello brother, start here!

console.log("Hello brother!");`;

        } else if (text.includes("Java")) {

            languageName.textContent = "Java";
            languageIcon.textContent = "☕";

            codeEditor.value =
`// Hello brother, start here!

public class Main {
    public static void main(String[] args) {
        System.out.println("Hello brother!");
    }
}`;

        } else if (text === "🔵 C") {

            languageName.textContent = "C";
            languageIcon.textContent = "🔵";

            codeEditor.value =
`#include <stdio.h>

int main() {
    printf("Hello brother!");
    return 0;
}`;

        } else if (text.includes("C++")) {

            languageName.textContent = "C++";
            languageIcon.textContent = "🔷";

            codeEditor.value =
`#include <iostream>
using namespace std;

int main() {
    cout << "Hello brother!";
    return 0;
}`;

        } else if (text.includes("SQL")) {

            languageName.textContent = "SQL";
            languageIcon.textContent = "🗄️";

            codeEditor.value =
`-- Hello brother, start here!

SELECT 'Hello brother!';`;
        }

        languageMenu.classList.add("hidden");

        // Old output is no longer valid
        lastOutput = "";
        lastRunCode = "";
        lastRunLanguage = "";

        outputBtn.disabled = true;
        outputBtn.textContent = "📤 OUTPUT";
    });
});

// -------------------------------
// RUN
// -------------------------------

runBtn.addEventListener("click", () => {

    const language = languageName.textContent;
    const code = codeEditor.value;

    if (!code.trim()) {
        showOutput("❌ Error: Code editor is empty.");
        return;
    }

    // Python
    if (language === "Python") {

        const result = runSimplePython(code);

        lastOutput = result;
        lastRunCode = code;
        lastRunLanguage = language;

        showOutput(result);

        outputBtn.disabled = false;
        outputBtn.textContent = "📤 OUTPUT";

        return;
    }

    // Other languages will be connected to the real
    // secure execution server later.
    const message =
`${language} runner is not connected yet.

The editor is ready.
The real ${language} compiler/interpreter will be added next.`;

    lastOutput = message;
    lastRunCode = code;
    lastRunLanguage = language;

    showOutput(message);

    outputBtn.disabled = false;
    outputBtn.textContent = "📤 OUTPUT";
});

// -------------------------------
// SIMPLE PYTHON RUNNER
// -------------------------------

function runSimplePython(code) {

    let result = [];

    try {

        const lines = code.split("\n");

        for (let line of lines) {

            line = line.trim();

            // Ignore comments
            if (line.startsWith("#") || line === "") {
                continue;
            }

            // print("Hello")
            let match = line.match(
                /^print\s*\(\s*["'](.*?)["']\s*\)\s*$/
            );

            if (match) {
                result.push(match[1]);
                continue;
            }

            // print(123)
            match = line.match(
                /^print\s*\(\s*(-?\d+(?:\.\d+)?)\s*\)\s*$/
            );

            if (match) {
                result.push(match[1]);
                continue;
            }

            // print("Hello", "World")
            match = line.match(
                /^print\s*\(\s*(.*?)\s*\)\s*$/
            );

            if (match) {

                let content = match[1];

                if (
                    content.includes('"') ||
                    content.includes("'")
                ) {

                    let parts = content.split(",");

                    let text = parts.map(part => {

                        part = part.trim();

                        if (
                            (part.startsWith('"') &&
                            part.endsWith('"')) ||
                            (part.startsWith("'") &&
                            part.endsWith("'"))
                        ) {
                            return part.slice(1, -1);
                        }

                        return part;

                    });

                    result.push(text.join(" "));
                    continue;
                }
            }

            // Simple arithmetic
            match = line.match(
                /^print\s*\(\s*([0-9+\-*/%. ()]+)\s*\)\s*$/
            );

            if (match) {

                const expression = match[1];

                if (!/^[0-9+\-*/%. ()]+$/.test(expression)) {
                    return "❌ Error: Invalid expression.";
                }

                try {
                    const value = Function(
                        `"use strict"; return (${expression})`
                    )();

                    result.push(String(value));
                    continue;

                } catch {
                    return "❌ Error: Invalid Python expression.";
                }
            }

            return `❌ This Python code needs the real Python engine:

${line}

The full Python engine will be connected next.`;
        }

        if (result.length === 0) {
            return "Program finished successfully.\n(No output)";
        }

        return result.join("\n");

    } catch (error) {

        return "❌ Error: " + error.message;
    }
}

// -------------------------------
// SHOW OUTPUT
// -------------------------------

function showOutput(text) {

    output.textContent = text;

    outputSection.classList.remove("hidden");

    codeEditor.classList.add("hidden");
    document.querySelector(".language").classList.add("hidden");
    document.querySelector(".buttons").classList.add("hidden");
    visualizerBtn.classList.add("hidden");

    languageMenu.classList.add("hidden");
}

// -------------------------------
// OUTPUT BUTTON
// -------------------------------

outputBtn.addEventListener("click", () => {

    if (lastOutput !== "") {

        output.textContent = lastOutput;

        outputSection.classList.remove("hidden");

        codeEditor.classList.add("hidden");
        document.querySelector(".language").classList.add("hidden");
        document.querySelector(".buttons").classList.add("hidden");
        visualizerBtn.classList.add("hidden");
    }
});

// -------------------------------
// BACK TO CODE
// -------------------------------

backBtn.addEventListener("click", () => {

    outputSection.classList.add("hidden");

    codeEditor.classList.remove("hidden");
    document.querySelector(".language").classList.remove("hidden");
    document.querySelector(".buttons").classList.remove("hidden");
    visualizerBtn.classList.remove("hidden");
});

// -------------------------------
// CODE CHANGE DETECTION
// -------------------------------

codeEditor.addEventListener("input", () => {

    if (
        lastRunCode !== "" &&
        codeEditor.value !== lastRunCode
    ) {
        outputBtn.textContent = "📤 OUTPUT (OLD)";
    } else {
        outputBtn.textContent = "📤 OUTPUT";
    }
});

// -------------------------------
// PRACTICE PROBLEMS
// -------------------------------

function showProblems(difficulty) {

    currentDifficulty = difficulty;

    const problems = pythonProblems[difficulty];

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

// -------------------------------
// OPEN PRACTICE PROBLEM
// -------------------------------

function openProblem(problem) {

    practiceSection.classList.add("hidden");

    codeEditor.classList.remove("hidden");
    document.querySelector(".language").classList.remove("hidden");
    document.querySelector(".buttons").classList.remove("hidden");
    visualizerBtn.classList.remove("hidden");

    languageName.textContent = "Python";
    languageIcon.textContent = "🐍";

    codeEditor.value =
`# ${problem.title}

# ${problem.question}

# Example input:
# ${problem.exampleInput}

# Expected output:
# ${problem.expectedOutput}

# Write your solution below
`;

    lastOutput = "";
    lastRunCode = "";
    lastRunLanguage = "";

    outputBtn.disabled = true;
    outputBtn.textContent = "📤 OUTPUT";

    outputSection.classList.add("hidden");
}

// -------------------------------
// THEME
// -------------------------------

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

// Load saved theme

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");

    themeBtn.textContent = "☀️ Light Mode";
  }
