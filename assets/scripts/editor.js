import { CodeJar } from "./codejar/codejar.js";
// Import line numbers helper.

const highlight = (editor) => {
  const code = editor.textContent;
  // Do something with code and set html.

  editor.innerHTML = code;
};

export const jar = CodeJar(document.querySelector("#code-editor"), highlight);
