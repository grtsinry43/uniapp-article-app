"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
const api_index = require("./api/index.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/follow/follow.js";
  "./pages/self/self.js";
  "./pages/search/search.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
function createApp() {
  const app = common_vendor.createSSRApp(_sfc_main);
  app.config.globalProperties.$http = api_index.module;
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
