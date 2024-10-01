"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "ListCard",
  props: {
    item: Object
  },
  data() {
    return {};
  }
};
if (!Array) {
  const _easycom_SaveLikes2 = common_vendor.resolveComponent("SaveLikes");
  _easycom_SaveLikes2();
}
const _easycom_SaveLikes = () => "../SaveLikes/SaveLikes.js";
if (!Math) {
  _easycom_SaveLikes();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.item.mode === "base"
  }, $props.item.mode === "base" ? {
    b: $props.item.cover[0] ? $props.item.cover[0] : "/static/img/logo.jpeg",
    c: common_vendor.t($props.item.title),
    d: common_vendor.t($props.item.classify),
    e: common_vendor.t($props.item.browse_count)
  } : {}, {
    f: $props.item.mode === "column"
  }, $props.item.mode === "column" ? {
    g: common_vendor.t($props.item.title),
    h: common_vendor.f($props.item.cover.slice(0, 3), (img, index, i0) => {
      return {
        a: img,
        b: index
      };
    }),
    i: common_vendor.t($props.item.classify),
    j: common_vendor.t($props.item.browse_count)
  } : {}, {
    k: $props.item.mode === "image"
  }, $props.item.mode === "image" ? {
    l: common_vendor.t($props.item.title),
    m: common_vendor.t($props.item.classify),
    n: common_vendor.t($props.item.browser_count)
  } : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
