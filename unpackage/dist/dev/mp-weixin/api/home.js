"use strict";
const api_request = require("./request.js");
const getLabelList = (data) => api_request.request({
  name: "getLabelList",
  data
});
const getArticleList = (data) => api_request.request({
  name: "getArticleList",
  data
});
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getArticleList,
  getLabelList
}, Symbol.toStringTag, { value: "Module" }));
exports.__vite_glob_0_0 = __vite_glob_0_0;
