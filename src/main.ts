import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

import rive from "@rive-app/canvas";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

const canvas = document.getElementById("canvas") as HTMLCanvasElement|null; 
if(canvas !== null){
  const r = new rive.Rive({
    src: "https://cdn.rive.app/animations/vehicles.riv",
    // Or the path to a public Rive asset
    // src: '/public/example.riv',
    canvas: canvas,
    autoplay: true,
    stateMachines: "bumpy",
    onLoad: () => {
      r.resizeDrawingSurfaceToCanvas();
    },
  });
}else{
  console.error('canvas element not found');
}
