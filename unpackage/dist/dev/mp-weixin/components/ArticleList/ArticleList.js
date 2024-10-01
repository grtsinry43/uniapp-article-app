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
      // 存储不同分类下的文章列表
      page: 1,
      // 当前分页
      pageSize: 6,
      // 每页显示的文章数量
      isLoading: false,
      // 是否正在加载
      isEnd: false
      // 是否已加载完所有数据
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
      this.page = 1;
      this.isEnd = false;
      if (!this.articleData[current] || this.articleData[current].length === 0) {
        this._getArticleList(current);
      }
    },
    // 获取文章列表
    async _getArticleList(currentIndex) {
      if (this.isLoading || this.isEnd)
        return;
      this.isLoading = true;
      try {
        const response = await this.$http.getArticleList({
          classify: this.labelList[currentIndex].name,
          // 根据分类获取文章
          page: this.page,
          pageSize: this.pageSize
        });
        const articleList = response.articleList || [];
        if (articleList.length === 0) {
          this.isEnd = true;
          console.log("没有数据了");
        } else {
          this.$set(this.articleData, currentIndex, [
            ...this.articleData[currentIndex] || [],
            ...articleList
          ]);
        }
      } catch (error) {
        console.error("加载文章列表失败:", error);
      } finally {
        this.isLoading = false;
      }
    },
    // 加载更多数据
    loadMoreDataHandle() {
      if (!this.isEnd) {
        this.page++;
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
      return {
        a: common_vendor.o($options.loadMoreDataHandle, item._id),
        b: "0942d1e7-0-" + i0,
        c: common_vendor.p({
          articleList: $data.articleData[index],
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
