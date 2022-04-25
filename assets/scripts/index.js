import { jar } from "./editor.js";
import Graphics from "./graphics.js";

let editorContent = "";

jar.updateCode(`function main(){
	// Write you funtion here
}`);

jar.onUpdate((item) => {
  editorContent = item;
});

const Benchmark = () => {
  const button = document.querySelector("#execute");

  button.addEventListener("click", () => {
    let initialPerformance = performance.now();
    eval(editorContent);
    let finalPerformance = performance.now();
    console.log(finalPerformance - initialPerformance);
    Graphics.update(finalPerformance - initialPerformance);
  });
};

const App = () => {
  Benchmark();
  Graphics.execute();
};

App();
