import { jar } from "./editor.js";
import Graphics from "./graphics.js";

let editorContent = "";
jar.onUpdate((item) => {
  editorContent = item;
  console.log(editorContent);
});

const Benchmark = () => {
  const button = document.querySelector("#execute");
  button.addEventListener("click", () => {
    eval(editorContent);
  });
};

const App = () => {
  Benchmark();
  Graphics.execute();
};

App();
