// =====================================
// CODELAB
// =====================================

const languageBtn =
    document.getElementById("languageBtn");

const languageMenu =
    document.getElementById("languageMenu");

const runBtn =
    document.getElementById("runBtn");

const outputBtn =
    document.getElementById("outputBtn");

const codeEditor =
    document.getElementById("codeEditor");

const inputBox =
    document.getElementById("inputBox");

const outputSection =
    document.getElementById("outputSection");

const output =
    document.getElementById("output");

const backBtn =
    document.getElementById("backBtn");

const languageName =
    document.getElementById("languageName");

const languageIcon =
    document.getElementById("languageIcon");

const menuBtn =
    document.getElementById("menuBtn");

const mainMenu =
    document.getElementById("mainMenu");

const codeMenuBtn =
    document.getElementById("codeMenuBtn");

const practiceMenuBtn =
    document.getElementById("practiceMenuBtn");

const practiceSection =
    document.getElementById("practiceSection");

const problemList =
    document.getElementById("problemList");

const themeBtn =
    document.getElementById("themeBtn");

const visualizerBtn =
    document.getElementById("visualizerBtn");


let lastOutput = "";

let lastRunCode = "";

let lastRunLanguage = "";

let currentDifficulty = "";

let pythonWorker = null;

let pythonRunning = false;


// =====================================
// PYTHON WORKER
// =====================================

function createPythonWorker() {

    if (pythonWorker) {

        pythonWorker.terminate();

    }


    pythonWorker =
        new Worker("python-worker.js");


    pythonWorker.onmessage =
        function(event) {

            pythonRunning = false;

            runBtn.disabled = false;

            runBtn.textContent =
                "▶ RUN";


            const data =
                event.data;


            lastOutput =
                data.output;


            lastRunCode =
                codeEditor.value;


            lastRunLanguage =
                "Python";


            showOutput(
                data.output
            );


            outputBtn.disabled =
                false;


            outputBtn.textContent =
                "📤 OUTPUT";

        };


    pythonWorker.onerror =
        function() {

            pythonRunning = false;

            runBtn.disabled = false;

            runBtn.textContent =
                "▶ RUN";


            lastOutput =
                "❌ Python engine error.\n\n" +
                "Please refresh the page and try again.";


            lastRunCode =
                codeEditor.value;


            lastRunLanguage =
                "Python";


            showOutput(
                lastOutput
            );


            outputBtn.disabled =
                false;

            outputBtn.textContent =
                "📤 OUTPUT";

        };

}


// =====================================
// MENU
// =====================================

menuBtn.addEventListener(
    "click",
    function() {

        mainMenu.classList.toggle(
            "hidden"
        );

    }
);


codeMenuBtn.addEventListener(
    "click",
    function() {

        practiceSection.classList.add(
            "hidden"
        );

        outputSection.classList.add(
            "hidden"
        );

        codeEditor.classList.remove(
            "hidden"
        );

        document
            .querySelector(".language")
            .classList.remove("hidden");

        document
            .querySelector(".buttons")
            .classList.remove("hidden");

        inputBox.parentElement
            .classList.remove("hidden");

        visualizerBtn.classList.remove(
            "hidden"
        );

        mainMenu.classList.add(
            "hidden"
        );

    }
);


practiceMenuBtn.addEventListener(
    "click",
    function() {

        practiceSection.classList.remove(
            "hidden"
        );

        codeEditor.classList.add(
            "hidden"
        );

        document
            .querySelector(".language")
            .classList.add("hidden");

        document
            .querySelector(".buttons")
            .classList.add("hidden");

        inputBox.parentElement
            .classList.add("hidden");

        visualizerBtn.classList.add(
            "hidden"
        );

        outputSection.classList.add(
            "hidden"
        );

        mainMenu.classList.add(
            "hidden"
        );


        problemList.innerHTML =
            `
            <div class="practice-message">
                Select a difficulty above.
            </div>
            `;

    }
);


// =====================================
// LANGUAGE MENU
// =====================================

languageBtn.addEventListener(
    "click",
    function() {

        languageMenu.classList.toggle(
            "hidden"
        );

    }
);


const languageButtons =
    languageMenu.querySelectorAll(
        "button"
    );


languageButtons.forEach(
    function(button) {

        button.addEventListener(
            "click",
            function() {

                const text =
                    button.textContent.trim();


                if (
                    text.includes("Python")
                ) {

                    languageName.textContent =
                        "Python";

                    languageIcon.textContent =
                        "🐍";


                    codeEditor.value =
`# Hello brother, start here!

print("Hello brother!")`;

                }


                else if (
                    text.includes("JavaScript")
                ) {

                    languageName.textContent =
                        "JavaScript";

                    languageIcon.textContent =
                        "🟨";


                    codeEditor.value =
`// Hello brother, start here!

console.log("Hello brother!");`;

                }


                else if (
                    text.includes("Java")
                ) {

                    languageName.textContent =
                        "Java";

                    languageIcon.textContent =
                        "☕";


                    codeEditor.value =
`// Hello brother, start here!

public class Main {
    public static void main(String[] args) {
        System.out.println("Hello brother!");
    }
}`;

                }


                else if (
                    text === "🔵 C"
                ) {

                    languageName.textContent =
                        "C";

                    languageIcon.textContent =
                        "🔵";


                    codeEditor.value =
`#include <stdio.h>

int main() {
    printf("Hello brother!");
    return 0;
}`;

                }


                else if (
                    text.includes("C++")
                ) {

                    languageName.textContent =
                        "C++";

                    languageIcon.textContent =
                        "🔷";


                    codeEditor.value =
`#include <iostream>
using namespace std;

int main() {
    cout << "Hello brother!";
    return 0;
}`;

                }


                else if (
                    text.includes("SQL")
                ) {

                    languageName.textContent =
                        "SQL";

                    languageIcon.textContent =
                        "🗄️";


                    codeEditor.value =
`-- Hello brother, start here!

SELECT 'Hello brother!';`;

                }


                languageMenu.classList.add(
                    "hidden"
                );


                inputBox.value = "";

                lastOutput = "";

                lastRunCode = "";

                lastRunLanguage = "";


                outputBtn.disabled =
                    true;

                outputBtn.textContent =
                    "📤 OUTPUT";

            }
        );

    }
);


// =====================================
// RUN
// =====================================

runBtn.addEventListener(
    "click",
    function() {

        const language =
            languageName.textContent;

        const code =
            codeEditor.value;


        if (!code.trim()) {

            showOutput(
                "❌ Error: Code editor is empty."
            );

            return;

        }


        // PYTHON

        if (language === "Python") {

            if (pythonRunning) {

                return;

            }


            pythonRunning = true;

            runBtn.disabled = true;

            runBtn.textContent =
                "⏳ RUNNING...";


            createPythonWorker();


            pythonWorker.postMessage({

                code: code,

                input: inputBox.value

            });


            return;

        }


        // OTHER LANGUAGES

        const message =
`${language} runner is coming next.

The ${language} editor is ready.

Python is currently connected to the real execution engine.

Next we will connect:
Java
JavaScript
C
C++
SQL`;


        lastOutput = message;

        lastRunCode = code;

        lastRunLanguage = language;


        showOutput(message);


        outputBtn.disabled =
            false;

        outputBtn.textContent =
            "📤 OUTPUT";

    }
);


// =====================================
// SHOW OUTPUT
// =====================================

function showOutput(text) {

    output.textContent =
        text;


    outputSection.classList.remove(
        "hidden"
    );


    codeEditor.classList.add(
        "hidden"
    );


    document
        .querySelector(".language")
        .classList.add("hidden");


    document
        .querySelector(".buttons")
        .classList.add("hidden");


    inputBox.parentElement
        .classList.add("hidden");


    visualizerBtn.classList.add(
        "hidden"
    );


    languageMenu.classList.add(
        "hidden"
    );

}


// =====================================
// OUTPUT BUTTON
// =====================================

outputBtn.addEventListener(
    "click",
    function() {

        if (lastOutput === "") {

            return;

        }


        output.textContent =
            lastOutput;


        outputSection.classList.remove(
            "hidden"
        );


        codeEditor.classList.add(
            "hidden"
        );


        document
            .querySelector(".language")
            .classList.add("hidden");


        document
            .querySelector(".buttons")
            .classList.add("hidden");


        inputBox.parentElement
            .classList.add("hidden");


        visualizerBtn.classList.add(
            "hidden"
        );

    }
);


// =====================================
// BACK TO CODE
// =====================================

backBtn.addEventListener(
    "click",
    function() {

        outputSection.classList.add(
            "hidden"
        );


        codeEditor.classList.remove(
            "hidden"
        );


        document
            .querySelector(".language")
            .classList.remove("hidden");


        document
            .querySelector(".buttons")
            .classList.remove("hidden");


        inputBox.parentElement
            .classList.remove("hidden");


        visualizerBtn.classList.remove(
            "hidden"
        );

    }
);


// =====================================
// CODE CHANGE
// =====================================

codeEditor.addEventListener(
    "input",
    function() {

        if (
            lastRunCode !== "" &&
            codeEditor.value !== lastRunCode
        ) {

            outputBtn.textContent =
                "📤 OUTPUT (OLD)";

        }

        else {

            outputBtn.textContent =
                "📤 OUTPUT";

        }

    }
);


// =====================================
// PRACTICE PROBLEMS
// =====================================

function showProblems(difficulty) {

    currentDifficulty =
        difficulty;


    const problems =
        pythonProblems[difficulty];


    problemList.innerHTML = "";


    problems.forEach(
        function(problem, index) {

            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "problem-card";


            card.innerHTML =
`
<div class="problem-number">
    ${String(index + 1).padStart(2, "0")}
</div>

<div class="problem-info">

    <h3>
        ${problem.title}
    </h3>

    <p>
        ${problem.question}
    </p>

</div>

<div class="problem-arrow">
    →
</div>
`;


            card.addEventListener(
                "click",
                function() {

                    openProblem(
                        problem
                    );

                }
            );


            problemList.appendChild(
                card
            );

        }
    );

}


// =====================================
// OPEN PROBLEM
// =====================================

function openProblem(problem) {

    practiceSection.classList.add(
        "hidden"
    );


    codeEditor.classList.remove(
        "hidden"
    );


    document
        .querySelector(".language")
        .classList.remove("hidden");


    document
        .querySelector(".buttons")
        .classList.remove("hidden");


    inputBox.parentElement
        .classList.remove("hidden");


    visualizerBtn.classList.remove(
        "hidden"
    );


    languageName.textContent =
        "Python";


    languageIcon.textContent =
        "🐍";


    codeEditor.value =
`# ${problem.title}

# ${problem.question}

# Example input:
# ${problem.exampleInput}

# Expected output:
# ${problem.expectedOutput}

# Write your solution below
`;


    inputBox.value =
        problem.exampleInput === "No input"
            ? ""
            : problem.exampleInput;


    lastOutput = "";

    lastRunCode = "";

    lastRunLanguage = "";


    outputBtn.disabled =
        true;

    outputBtn.textContent =
        "📤 OUTPUT";


    outputSection.classList.add(
        "hidden"
    );

}


// =====================================
// THEME
// =====================================

themeBtn.addEventListener(
    "click",
    function() {

        document.body.classList.toggle(
            "dark-mode"
        );


        if (
            document.body.classList.contains(
                "dark-mode"
            )
        ) {

            themeBtn.textContent =
                "☀️ Light Mode";

            localStorage.setItem(
                "theme",
                "dark"
            );

        }

        else {

            themeBtn.textContent =
                "🌙 Dark Mode";

            localStorage.setItem(
                "theme",
                "light"
            );

        }

    }
);


// =====================================
// SAVED THEME
// =====================================

const savedTheme =
    localStorage.getItem(
        "theme"
    );


if (savedTheme === "dark") {

    document.body.classList.add(
        "dark-mode"
    );

    themeBtn.textContent =
        "☀️ Light Mode";
    }
