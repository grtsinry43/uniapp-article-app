"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "ListItem",
  props: {
    articleList: {
      type: Array
    }
  },
  data() {
    return {};
  }
};
if (!Array) {
  const _easycom_ListCard2 = common_vendor.resolveComponent("ListCard");
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  (_easycom_ListCard2 + _easycom_uni_load_more2)();
}
const _easycom_ListCard = () => "../ListCard/ListCard.js";
const _easycom_uni_load_more = () => "../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
if (!Math) {
  (_easycom_ListCard + _easycom_uni_load_more)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.articleList, (item, k0, i0) => {
      return {
        a: item._id,
        b: "a9e967c6-0-" + i0,
        c: common_vendor.p({
          item
        })
      };
    }),
    b: common_vendor.p({
      status: "loading"
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
