"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  props: {
    labelList: Array,
    // 文章分类列表
    activeIndex: Number
    // 当前选中的分类索引
  },
  data() {
    return {
      articleData: {},
      // 存储不同分类下的文章列表 { 0: { list: [...], page: 1, isEnd: false } }
      pageSize: 6,
      // 每页显示的文章数量
      isLoading: false
      // 是否正在加载
    };
  },
  watch: {
    // 当 labelList 改变时，重新加载当前分类的文章列表
    labelList(newVal, oldVal) {
      this._getArticleList(this.activeIndex);
    }
  },
  methods: {
    // 切换 swiper 的当前索引
    changeCurrentIndex(e) {
      const { current } = e.detail;
      this.$emit("changeCurrentIndex", current);
      const categoryData = this.articleData[current];
      if (!categoryData || categoryData.list.length === 0) {
        this._getArticleList(current);
      }
    },
    // 获取文章列表
    async _getArticleList(currentIndex) {
      const categoryData = this.articleData[currentIndex] || { list: [], page: 1, isEnd: false };
      if (this.isLoading || categoryData.isEnd)
        return;
      this.isLoading = true;
      try {
        const response = await this.$http.getArticleList({
          classify: this.labelList[currentIndex].name,
          // 根据分类获取文章
          page: categoryData.page,
          pageSize: this.pageSize
        });
        const articleList = response.articleList || [];
        if (articleList.length < this.pageSize) {
          categoryData.isEnd = true;
        }
        categoryData.list = [
          ...categoryData.list,
          // 追加数据
          ...articleList
        ];
        categoryData.page++;
        this.$set(this.articleData, currentIndex, categoryData);
      } catch (error) {
        console.error("加载文章列表失败:", error);
      } finally {
        this.isLoading = false;
      }
    },
    // 加载更多数据
    loadMoreDataHandle() {
      const categoryData = this.articleData[this.activeIndex] || { page: 1, isEnd: false };
      if (!categoryData.isEnd && !this.isLoading) {
        this._getArticleList(this.activeIndex);
      }
    }
  },
  created() {
    this._getArticleList(this.activeIndex);
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
      var _a;
      return {
        a: common_vendor.o($options.loadMoreDataHandle, item._id),
        b: "0942d1e7-0-" + i0,
        c: common_vendor.p({
          articleList: ((_a = $data.articleData[index]) == null ? void 0 : _a.list) || [],
          ["is-loading"]: $data.isLoading
        }),
        d: item._id
      };
    }),
    b: $props.activeIndex,
    c: common_vendor.o((...args) => $options.changeCurrentIndex && $options.changeCurrentIndex(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
