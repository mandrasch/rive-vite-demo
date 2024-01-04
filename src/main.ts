import "./style.css";
import { Rive, Layout, Fit } from "@rive-app/canvas";

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

  // https://help.rive.app/runtimes/layout
  let layout = new Layout({
    fit: Fit.Cover,
  });

  const rive = new Rive({
    src: source,
    canvas: canvas,
    layout: layout,
    autoplay: true,
    stateMachines: "bumpy",
    onLoad: () => {
      // https://help.rive.app/runtimes/overview/web-js/rive-parameters#resizedrawingsurfacetocanvas
      rive.resizeDrawingSurfaceToCanvas();
    },
  });

  window.addEventListener("resize", () => {
    console.log("Browser resized");
    // TODO: or use resizeDrawingSurfaceToCanvas()?
    // https://help.rive.app/runtimes/overview/web-js/rive-parameters#resizetocanvas
    rive.resizeDrawingSurfaceToCanvas();
  });
}
