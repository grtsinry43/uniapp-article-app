"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      labelList: [],
      currentIndex: 0
    };
  },
  mounted() {
    this.fetchLabelList();
    console.log(this.$http);
    this.$http.getArticleList().then((res) => {
      console.log(res);
    });
  },
  methods: {
    fetchLabelList() {
      this.$http.getLabelList().then((res) => {
        this.labelList = res;
      });
    },
    pageChangedHandle(index) {
      this.currentIndex = index;
    },
    swipePageChangeHandle(index) {
      this.currentIndex = index;
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
    a: common_vendor.o($options.pageChangedHandle),
    b: common_vendor.p({
      labelList: $data.labelList,
      currentIndex: $data.currentIndex
    }),
    c: common_vendor.o($options.swipePageChangeHandle),
    d: common_vendor.p({
      labelList: $data.labelList,
      currentIndex: $data.currentIndex
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);
