<template>
  <view class="list-scroll-container">
    <scroll-view scroll-y="true" class="list-scroll" @scrolltolower="loadMoreHandle">
      <view>
        <ListCard :item="item" v-for="item in articleList" :key="item._id"></ListCard>
      </view>
      <uni-load-more :status="isLoading ? 'loading' : '' "></uni-load-more>
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: "ListItem",
  props: {
    articleList: {
      type: Array,
    },
    isLoading: Boolean
  },
  data() {
    return {};
  },
  methods: {
    loadMoreHandle() {
      this.$emit("loadMore")
    }
  }
}
</script>

<style lang="scss">
.list-scroll-container {
  height: 100%;

  .list-scroll {
    overflow: hidden;
    height: 100%;
    box-sizing: border-box;
  }
}
</style>
