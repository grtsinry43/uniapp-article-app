"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  props: {
    labelList: Array,
    activeIndex: Number
  },
  created() {
  },
  data() {
    return {
      articleData: {},
      page: 1,
      pageSize: 6
    };
  },
  watch: {
    labelList(newVal, OldVal) {
      this._getArticleList(this.activeIndex);
    }
  },
  methods: {
    changeCurrentIndex(e) {
      const { current } = e.detail;
      this.$emit("changeCurrentIndex", current);
      if (!this.articleData[current] || this.articleData[current].length === 0) {
        this._getArticleList(current);
      }
    },
    async _getArticleList(currentIndex) {
      const articleList = await this.$http.getArticleList({
        classify: this.labelList[currentIndex].name,
        page: this.page,
        pageSize: this.pageSize
      });
      const articleListData = articleList.articleList;
      console.log(articleListData);
      this.$set(this.articleData, currentIndex, articleListData);
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
        b: common_vendor.p({
          articleList: $data.articleData[index]
        }),
        c: item._id
      };
    }),
    b: $props.activeIndex,
    c: common_vendor.o((...args) => $options.changeCurrentIndex && $options.changeCurrentIndex(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
