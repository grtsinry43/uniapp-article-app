"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  props: {
    labelList: Array,
    activeIndex: Number
  },
  watch: {
    activeIndex(index) {
      this.currentIndex = `item${index}`;
    }
  },
  data() {
    return {
      currentIndex: ""
    };
  },
  methods: {
    goLabelAdmin() {
      common_vendor.index.navigateTo({
        url: "/pages/labelAdmin/labelAdmin"
      });
    },
    navClickFn(index) {
      this.$emit("changeCurrentIndex", index);
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
    a: common_vendor.f($props.labelList, (item, index, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: `item${index}`,
        c: common_vendor.o(($event) => $options.navClickFn(index), index),
        d: $props.activeIndex === index ? 1 : "",
        e: index
      };
    }),
    b: $data.currentIndex,
    c: common_vendor.o($options.goLabelAdmin),
    d: common_vendor.p({
      type: "gear",
      size: "26",
      color: "#666"
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
