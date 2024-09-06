"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "TabBar",
  data() {
    return {
      curItem: "item_0"
    };
  },
  watch: {
    currentIndex(index) {
      this.curItem = "item_" + index;
    }
  },
  props: {
    labelList: {
      type: Array,
      default: () => []
    },
    currentIndex: {
      type: Number
    }
  },
  methods: {
    labelAdminHandle() {
      common_vendor.index.navigateTo({
        url: "/pages/labelAdmin/labelAdmin"
      });
    },
    changeActiveIndexHandle(index) {
      this.$emit("pageChanged", index);
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
        b: common_vendor.o(($event) => $options.changeActiveIndexHandle(index), index),
        c: $props.currentIndex === index ? 1 : "",
        d: "item_" + index,
        e: index
      };
    }),
    b: $data.curItem,
    c: common_vendor.o($options.labelAdminHandle),
    d: common_vendor.p({
      type: "gear",
      size: "26",
      color: "666"
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e632d448"]]);
wx.createComponent(Component);
