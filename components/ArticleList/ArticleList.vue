<template>
  <swiper class="swiper-container" :current="activeIndex" @change="changeCurrentIndex">
    <swiper-item v-for="(item, index) in labelList" :key="item._id">
      <view class="swiper-item">
        <ListItem :articleList="articleData[index]" :is-loading="isLoading" @loadMore="loadMoreDataHandle"></ListItem>
      </view>
    </swiper-item>
  </swiper>
</template>

<script>
export default {
  props: {
    labelList: Array, // 文章分类列表
    activeIndex: Number // 当前选中的分类索引
  },
  data() {
    return {
      articleData: {}, // 存储不同分类下的文章列表
      page: 1, // 当前分页
      pageSize: 6, // 每页显示的文章数量
      isLoading: false, // 是否正在加载
      isEnd: false, // 是否已加载完所有数据
    };
  },
  watch: {
    // 当 labelList 改变时，重新加载当前分类的文章列表
    labelList(newVal, oldVal) {
      this._getArticleList(this.activeIndex);
    },
  },
  methods: {
    // 切换 swiper 的当前索引
    changeCurrentIndex(e) {
      const {current} = e.detail;
      this.$emit('changeCurrentIndex', current); // 向父组件发送当前索引变化的事件

      // 每次切换栏目时重置分页信息
      this.page = 1; // 重置页码
      this.isEnd = false; // 重置是否加载完数据的标志

      if (!this.articleData[current] || this.articleData[current].length === 0) {
        this._getArticleList(current); // 当切换到的分类还没有数据时，获取数据
      }
    },
    // 获取文章列表
    async _getArticleList(currentIndex) {
      if (this.isLoading || this.isEnd) return; // 如果正在加载或已加载完数据则不再请求

      this.isLoading = true; // 设置加载状态为 true
      try {
        const response = await this.$http.getArticleList({
          classify: this.labelList[currentIndex].name, // 根据分类获取文章
          page: this.page,
          pageSize: this.pageSize,
        });

        const articleList = response.articleList || [];
        if (articleList.length === 0) {
          this.isEnd = true; // 如果没有更多数据，设置 isEnd 为 true
          console.log("没有数据了")
        } else {
          // 将新获取的文章合并到已有的数据中
          this.$set(this.articleData, currentIndex, [
            ...(this.articleData[currentIndex] || []),
            ...articleList
          ]);
        }
      } catch (error) {
        console.error('加载文章列表失败:', error);
      } finally {
        this.isLoading = false; // 加载结束，恢复 isLoading 状态
      }
    },
    // 加载更多数据
    loadMoreDataHandle() {
      if (!this.isEnd) {
        this.page++; // 分页递增
        this._getArticleList(this.activeIndex); // 加载更多文章
      }
    }
  },
  created() {
    // 初次加载时获取文章列表
    this._getArticleList(this.activeIndex);
  }
};

</script>

<style lang="scss">
.swiper-container {
  height: 100%;

  .swiper-item {
    height: 100%;
    overflow: hidden;
  }
}
</style>
