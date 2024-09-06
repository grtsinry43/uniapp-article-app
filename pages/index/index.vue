<template>
  <view class="home-container">
    <NavBar/>
    <TabBar :labelList="labelList" :currentIndex="currentIndex" @pageChanged="pageChangedHandle"/>
    <ArticleList :labelList="labelList" :currentIndex="currentIndex" class="list-container"
                 @swipePage="swipePageChangeHandle"/>
  </view>
</template>

<script>
export default {
  data() {
    return {
      labelList: [],
      currentIndex: 0,
    }
  },
  mounted() {
    this.fetchLabelList();
  },
  methods: {
    fetchLabelList() {
      this.$http.getLabelList().then(res => {
        this.labelList = res;
      })
    },
    pageChangedHandle(index) {
      this.currentIndex = index;
    },
    swipePageChangeHandle(index) {
      this.currentIndex = index;
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  @include flex(flex-start, column);
  color: $base-color;
}

page {
  display: flex;
  height: 100%;
}

.home-container {
  flex: 1;
  overflow: hidden;
  @include flex(flex-start, column);
  align-items: inherit;
}

.list-container {
  flex: 1;
}
</style>
