import {init, start, fullscreen} from './hl-engine-js/lib/hl-engine.js';

let zipArrayBuffer;

init({
  canvas: document.getElementById('canvas'),
  location: 'hl-engine-js/lib'
});

fetch("KTI.zip")
  .then(response => response.arrayBuffer())
  .then(arrayBuffer => {
    zipArrayBuffer = arrayBuffer;
    // enable Start button
    document.getElementById('start').disabled = false;
  });

document.getElementById('start').onclick = function() {
  start({
    zip: zipArrayBuffer,
    mod: "KTI",
    map: "kti1",
    fullscreen: true,
  });
};