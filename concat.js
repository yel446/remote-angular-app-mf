const concat = require("concat");

(async function build() {
  const files = [
    "./dist/remote-angular-app-wp/runtime.js",
    "./dist/remote-angular-app-wp/polyfills.js",
    "./dist/remote-angular-app-wp/main.js",
  ];

  await concat(files, "./dist/remote-angular-app-wp/micro-fe.js");
})();
