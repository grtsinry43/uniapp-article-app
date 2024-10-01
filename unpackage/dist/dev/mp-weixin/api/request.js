"use strict";
const common_vendor = require("../common/vendor.js");
const request = ({ name, data = {} }) => {
  return new Promise((resolve, reject) => {
    common_vendor.index.showLoading({});
    common_vendor.Ys.callFunction({
      name,
      data,
      success({ result }) {
        if (result.code === 0) {
          resolve(result.data);
        } else {
          common_vendor.index.showToast({
            icon: "none",
            title: result.msg
          });
        }
      },
      fail(err) {
        reject(err);
      },
      complete() {
        common_vendor.index.hideLoading();
      }
    });
  });
};
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: request
}, Symbol.toStringTag, { value: "Module" }));
exports.__vite_glob_0_1 = __vite_glob_0_1;
exports.request = request;
