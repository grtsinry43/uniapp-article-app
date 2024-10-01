"use strict";
const common_vendor = require("../../common/vendor.js");
const SaveLikes = () => "../SaveLikes.js";
const _sfc_main = {
  name: "ListCard",
  components: { SaveLikes },
  props: {
    item: Object
  },
  data() {
    return {};
  },
  mounted() {
    console.log(this.item);
  }
};
if (!Array) {
  const _component_SaveLikes = common_vendor.resolveComponent("SaveLikes");
  _component_SaveLikes();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.item.mode === "base"
  }, $props.item.mode === "base" ? common_vendor.e({
    b: $props.item.cover.length !== 0
  }, $props.item.cover.length !== 0 ? {
    c: $props.item.cover[0]
  } : {}, {
    d: common_vendor.t($props.item.title),
    e: common_vendor.t($props.item.classify),
    f: common_vendor.t($props.item.browse_count)
  }) : {}, {
    g: $props.item.mode === "column"
  }, $props.item.mode === "column" ? {
    h: common_vendor.t($props.item.title),
    i: common_vendor.f($props.item.cover, (item, index, i0) => {
      return {
        a: item,
        b: index
      };
    }),
    j: common_vendor.t($props.item.classify)
  } : {}, {
    k: $props.item.mode === "image"
  }, $props.item.mode === "image" ? common_vendor.e({
    l: $props.item.cover.length !== 0
  }, $props.item.cover.length !== 0 ? {
    m: $props.item.cover.length,
    n: $props.item.cover[0]
  } : {}, {
    o: common_vendor.t($props.item.title),
    p: common_vendor.t($props.item.classify)
  }) : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
