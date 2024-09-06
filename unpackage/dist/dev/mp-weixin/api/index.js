"use strict";
const api_home = require("./home.js");
const api_request = require("./request.js");
const requireApi = /* @__PURE__ */ Object.assign({ "./home.js": api_home.__vite_glob_0_0, "./request.js": api_request.__vite_glob_0_1 });
let module$1 = {};
const fileKeys = Object.keys(requireApi);
fileKeys.forEach((key) => {
  if (key === "./index.js")
    return;
  Object.assign(module$1, requireApi[key]);
});
exports.module = module$1;
