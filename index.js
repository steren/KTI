let zipArrayBuffer;

HLEngine.init({
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
  HLEngine.start({
    zip: zipArrayBuffer,
    game: "KTI",
    map: "kti1",
    filesystem: "RAM",
    fullscreen: true,
  });
};