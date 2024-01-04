import "./style.css";
import rive from "@rive-app/canvas";

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
  let layout = new rive.Layout({
    fit: rive.Fit.Cover,
  });

  const riveEl = new rive.Rive({
    src: source,
    canvas: canvas,
    layout: layout,
    autoplay: true,
    stateMachines: "bumpy",
    onLoad: () => {
      // https://help.rive.app/runtimes/overview/web-js/rive-parameters#resizedrawingsurfacetocanvas
      riveEl.resizeDrawingSurfaceToCanvas();
    },
  });

  window.addEventListener("resize", () => {
    console.log("Browser resized");
    // TODO: or use resizeDrawingSurfaceToCanvas()?
    // https://help.rive.app/runtimes/overview/web-js/rive-parameters#resizetocanvas
    riveEl.resizeDrawingSurfaceToCanvas();
  });
}
