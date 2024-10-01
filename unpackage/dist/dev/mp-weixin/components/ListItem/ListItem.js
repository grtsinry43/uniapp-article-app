"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "ListItem",
  data() {
    return {
      itemList: [
        { mode: "base" },
        { mode: "column" },
        { mode: "img" }
      ]
    };
  },
  mounted() {
    this.$http.getArticleList().then((res) => {
      console.log(res);
      this.itemList = res;
    });
  }
};
if (!Array) {
  const _easycom_ListCard2 = common_vendor.resolveComponent("ListCard");
  _easycom_ListCard2();
}
const _easycom_ListCard = () => "../ListCard/ListCard.js";
if (!Math) {
  _easycom_ListCard();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.itemList, (item, index, i0) => {
      return {
        a: index,
        b: "0f582daa-0-" + i0,
        c: common_vendor.p({
          item
        })
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-0f582daa"]]);
wx.createComponent(Component);
