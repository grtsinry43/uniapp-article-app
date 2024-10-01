<template>
  <swiper class="swiper-container" :current="activeIndex" @change="changeCurrentIndex">
    <swiper-item v-for="(item,index) in labelList" :key="item._id">
      <view class="swiper-item">
        <ListItem :articleList="articleData[index]"></ListItem>
      </view>
    </swiper-item>
  </swiper>
</template>

<script>
export default {
  props: {
    labelList: Array,
    activeIndex: Number
  },
  created() {
    // this._getArticleList()
  },
  data() {
    return {
      articleData: {},
      page: 1,
      pageSize: 6
    }
  },
  watch: {
    labelList(newVal, OldVal) {
      this._getArticleList(this.activeIndex)
    },
  },
  methods: {
    changeCurrentIndex(e) {
      const {current} = e.detail
      this.$emit('changeCurrentIndex', current)
      if (!this.articleData[current] || this.articleData[current].length === 0) {
        this._getArticleList(current)
      }
    },
    async _getArticleList(currentIndex) {
      const articleList = await this.$http.getArticleList({
        classify: this.labelList[currentIndex].name,
        page: this.page,
        pageSize: this.pageSize,
      });
      const articleListData = articleList.articleList;
      console.log(articleListData)
      this.$set(this.articleData, currentIndex, articleListData)
    }
  }
}
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
