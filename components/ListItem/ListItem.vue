<template>
  <view class="list-item-container">
    <scroll-view scroll-y="true" class="list-inner">
      <view>
        <ListCard :item="item" v-for="(item,index) in itemList" :key="index"></ListCard>
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: "ListItem",
  data() {
    return {
      itemList: [
        {mode: "base"},
        {mode: "column"},
        {mode: "img"},
      ]
    };
  },
  mounted() {
    this.$http.getArticleList().then(res => {
      console.log(res)
      this.itemList = res;
    })
  },
}
</script>

<style lang="scss" scoped>
.list-item-container {
  height: 100%;
  padding: 10rpx;

  .list-inner {
    overflow: hidden;
    height: 100%;
    box-sizing: border-box;
  }
}
</style>