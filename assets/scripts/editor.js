import { CodeJar } from "./codejar/codejar.js";
import Prism from "./prism/prism.js";
// Import line numbers helper.
import { withLineNumbers } from "./codejar/linenumbers.js";

const highlight = (editor) => {
  const code = editor.textContent;
  // Do something with code and set html.

  editor.innerHTML = code;
};

export const jar = CodeJar(document.querySelector("#code-editor"), highlight);
