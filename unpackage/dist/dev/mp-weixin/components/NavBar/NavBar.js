"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  created() {
    this.initStatusBarHeight();
  },
  data() {
    return {
      statusHeight: 40,
      marginRight: 0
    };
  },
  methods: {
    initStatusBarHeight() {
      const systemInfo = common_vendor.index.getSystemInfoSync();
      this.statusHeight = systemInfo.statusBarHeight ? systemInfo.statusBarHeight * 2 : 20;
      const menuButtonInfo = common_vendor.index.getMenuButtonBoundingClientRect();
      this.marginRight = menuButtonInfo.width * 2;
      this.statusHeight = menuButtonInfo.top * 2;
    },
    goSearchPage() {
      common_vendor.index.navigateTo({
        url: "/pages/search/search"
      });
    }
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
    a: $data.statusHeight + "rpx",
    b: common_vendor.p({
      type: "search",
      color: "#999"
    }),
    c: common_vendor.o((...args) => $options.goSearchPage && $options.goSearchPage(...args)),
    d: $data.marginRight + "rpx",
    e: 80 + $data.statusHeight + "rpx"
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-9367190c"]]);
wx.createComponent(Component);
