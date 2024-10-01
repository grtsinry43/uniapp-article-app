<template>
  <swiper :current="currentIndex" @change="swipePageHandle">
    <swiper-item v-for="(item,index) in labelList" :key="index">
      <view class="swiper-item">
        <ListItem></ListItem>
      </view>
    </swiper-item>
  </swiper>
</template>

<script>
export default {
  name: "ArticleList",
  props: {
    labelList: {
      type: Array,
      default: () => []
    },
    currentIndex: {
      type: Number,
    },
  },
  data() {
    return {};
  },
  methods: {
    swipePageHandle(e) {
      this.$emit("swipePage", e.detail.current)
    }
  }
}
</script>

<style>
.swiper-item {
  height: 100%;
}
</style>