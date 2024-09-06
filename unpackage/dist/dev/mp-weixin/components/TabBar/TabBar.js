"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "TabBar",
  data() {
    return {
      list: ["项目1", "项目2", "项目3", "项目4", "项目5", "项目6", "项目7"]
    };
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.list, (item, index, i0) => {
      return {
        a: common_vendor.t(item),
        b: index
      };
    }),
    b: common_vendor.p({
      type: "gear",
      size: "26",
      color: "666"
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e632d448"]]);
wx.createComponent(Component);
