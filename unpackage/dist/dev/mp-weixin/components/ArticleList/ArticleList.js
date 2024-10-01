"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "ArticleList",
  props: {
    labelList: {
      type: Array,
      default: () => []
    },
    currentIndex: {
      type: Number
    }
  },
  data() {
    return {};
  },
  methods: {
    swipePageHandle(e) {
      this.$emit("swipePage", e.detail.current);
    }
  }
};
if (!Array) {
  const _easycom_ListItem2 = common_vendor.resolveComponent("ListItem");
  _easycom_ListItem2();
}
const _easycom_ListItem = () => "../ListItem/ListItem.js";
if (!Math) {
  _easycom_ListItem();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.labelList, (item, index, i0) => {
      return {
        a: "0942d1e7-0-" + i0,
        b: index
      };
    }),
    b: $props.currentIndex,
    c: common_vendor.o((...args) => $options.swipePageHandle && $options.swipePageHandle(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
