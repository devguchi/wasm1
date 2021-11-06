const js = import("./pkg/index.js");
js.then(js => {
  js.greet("WebAssembly");
});