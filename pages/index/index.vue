<template>
  <view class="home-container">
    <NavBar/>
    <TabBar/>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: 'Hello'
    }
  },
  onLoad() {

  },
  methods: {}
}
</script>

<style scoped lang="scss">
.container {
  @include flex(flex-start, column);
  color: $base-color;
}
</style>
