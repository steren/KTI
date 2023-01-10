document.getElementById('start').onclick = function() {
  const params = {
    args: ["-nomaster",  "-game", "KTI", "+map", "kti1"],
    filesystem: "RAM", //default, can be "IndexedDB" or "LocalStorage" 
    fullscreen: true,
  };
  HLEngine.start(params);
}

HLEngine.init({
  zipElement: document.getElementById('zip'),
  statusElement: document.getElementById('status'),
  canvas: document.getElementById('canvas'),
  location: 'hl-engine-js/lib'
});

