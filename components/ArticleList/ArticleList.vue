<template>
  <swiper class="swiper-container" :current="activeIndex" @change="changeCurrentIndex">
    <swiper-item v-for="(item, index) in labelList" :key="item._id">
      <view class="swiper-item">
        <ListItem :articleList="articleData[index]?.list || []" :is-loading="isLoading"
                  @loadMore="loadMoreDataHandle"></ListItem>
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
      articleData: {}, // 存储不同分类下的文章列表 { 0: { list: [...], page: 1, isEnd: false } }
      pageSize: 6, // 每页显示的文章数量
      isLoading: false, // 是否正在加载
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

      // 检查该栏目是否有数据或者是否已加载完毕
      const categoryData = this.articleData[current];
      if (!categoryData || categoryData.list.length === 0) {
        this._getArticleList(current); // 当切换到的分类还没有数据时，获取数据
      }
    },
    // 获取文章列表
    async _getArticleList(currentIndex) {
      const categoryData = this.articleData[currentIndex] || {list: [], page: 1, isEnd: false};

      if (this.isLoading || categoryData.isEnd) return; // 如果正在加载或该分类已加载完数据则不再请求

      this.isLoading = true; // 设置加载状态为 true
      try {
        const response = await this.$http.getArticleList({
          classify: this.labelList[currentIndex].name, // 根据分类获取文章
          page: categoryData.page,
          pageSize: this.pageSize,
        });

        const articleList = response.articleList || [];
        if (articleList.length < this.pageSize) {
          categoryData.isEnd = true; // 如果获取的数据小于 pageSize，设置该分类 isEnd 为 true
        }

        categoryData.list = [
          ...categoryData.list, // 追加数据
          ...articleList
        ];
        categoryData.page++; // 分页加1

        // 更新 articleData 中的分类数据
        this.$set(this.articleData, currentIndex, categoryData);

      } catch (error) {
        console.error('加载文章列表失败:', error);
      } finally {
        this.isLoading = false; // 加载结束，恢复 isLoading 状态
      }
    },
    // 加载更多数据
    loadMoreDataHandle() {
      const categoryData = this.articleData[this.activeIndex] || {page: 1, isEnd: false};
      if (!categoryData.isEnd && !this.isLoading) {
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
