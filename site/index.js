const js = import("./node_modules/@devguchi/hello-wasm/hello_wasm.js");
js.then(js => {
  js.greet("WebAssembly");
});