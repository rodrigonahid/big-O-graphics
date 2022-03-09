import { jar } from "./editor.js";
import { myChart } from "./graphics.js";

let editorContent = "";
jar.onUpdate((item) => {
  editorContent = item;
});

const executeCode = () => {
  console.log(editorContent);
};
