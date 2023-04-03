const concat = require("concat");

(async function build() {
  const files = ["./dist/runtime.js", "./dist/polyfills.js", "./dist/main.js"];

  await concat(files, "./dist/micro-fe.js");
})();
