importScripts(
    "https://cdn.jsdelivr.net/pyodide/v0.26.2/full/pyodide.js"
);

let pyodide = null;

async function startPython() {

    pyodide = await loadPyodide({
        indexURL:
            "https://cdn.jsdelivr.net/pyodide/v0.26.2/full/"
    });
}

const ready = startPython();


self.onmessage = async function(event) {

    const code = event.data.code;
    const inputText = event.data.input || "";

    try {

        await ready;

        let stdout = "";
        let stderr = "";

        pyodide.setStdout({

            batched: function(text) {
                stdout += text + "\n";
            }

        });

        pyodide.setStderr({

            batched: function(text) {
                stderr += text + "\n";
            }

        });


        const inputLines =
            inputText.split(/\r?\n/);


        const setup = `
import builtins

_codelab_input_lines = ${JSON.stringify(inputLines)}

_codelab_input_index = 0


def _codelab_input(prompt=""):

    global _codelab_input_index

    if _codelab_input_index >= len(_codelab_input_lines):

        raise EOFError(
            "No more input provided."
        )

    value = _codelab_input_lines[
        _codelab_input_index
    ]

    _codelab_input_index += 1

    return value


builtins.input = _codelab_input
`;


        await pyodide.runPythonAsync(setup);

        await pyodide.runPythonAsync(code);


        let result =
            stdout.trimEnd();


        if (stderr.trim()) {

            result +=
                "\n" +
                stderr.trim();

        }


        if (!result) {

            result =
                "Program finished successfully.\n" +
                "(No output)";

        }


        self.postMessage({

            success: true,

            output: result

        });


    } catch (error) {

        self.postMessage({

            success: false,

            output:
                "❌ Python Error:\n\n" +
                error

        });

    }

};
