import { CodeJar } from "https://medv.io/codejar/codejar.js";

const highlight = (editor) => {
  const code = editor.textContent;
  // Do something with code and set html.
  editor.innerHTML = code;
};

let jar = CodeJar(document.querySelector("#code-editor"), highlight);
