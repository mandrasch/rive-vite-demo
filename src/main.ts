import "./style.css";
import { Rive } from "@rive-app/canvas";

// import file directly from within src/ folder
import vehicleRive from "./assets/vehicles.riv";
loadRiveElement(vehicleRive, "canvas1");

// path (via public/)
loadRiveElement("/vehicles-public.riv", "canvas2");

// CDN
loadRiveElement("https://cdn.rive.app/animations/vehicles.riv", "canvas3");

function loadRiveElement(source: any, canvasId: string) {
  const canvas = document.getElementById(canvasId) as HTMLCanvasElement | null;

  if (canvas === null) {
    console.error(`canvas element with id ${canvasId} not found`);
    return;
  }

  const rive = new Rive({
    src: source,
    canvas: canvas,
    autoplay: true,
    stateMachines: "bumpy",
    onLoad: () => {
      rive.resizeDrawingSurfaceToCanvas();
    },
  });
}
