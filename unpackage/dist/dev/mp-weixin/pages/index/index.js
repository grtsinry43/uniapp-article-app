"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  onLoad() {
    this._intiLabelList();
  },
  data() {
    return {
      labelList: [],
      activeIndex: 0
    };
  },
  methods: {
    async _intiLabelList() {
      const labelList = await this.$http.getLabelList();
      this.labelList = [{ name: "全部" }, ...labelList];
    },
    /* 修改当前activeIndex值 */
    changeCurrentIndex(index) {
      this.activeIndex = index;
    }
  }
};
if (!Array) {
  const _easycom_NavBar2 = common_vendor.resolveComponent("NavBar");
  const _easycom_TabBar2 = common_vendor.resolveComponent("TabBar");
  const _easycom_ArticleList2 = common_vendor.resolveComponent("ArticleList");
  (_easycom_NavBar2 + _easycom_TabBar2 + _easycom_ArticleList2)();
}
const _easycom_NavBar = () => "../../components/NavBar/NavBar.js";
const _easycom_TabBar = () => "../../components/TabBar/TabBar.js";
const _easycom_ArticleList = () => "../../components/ArticleList/ArticleList.js";
if (!Math) {
  (_easycom_NavBar + _easycom_TabBar + _easycom_ArticleList)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.changeCurrentIndex),
    b: common_vendor.p({
      labelList: $data.labelList,
      activeIndex: $data.activeIndex
    }),
    c: common_vendor.o($options.changeCurrentIndex),
    d: common_vendor.p({
      labelList: $data.labelList,
      activeIndex: $data.activeIndex
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
