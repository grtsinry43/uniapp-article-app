<template>
  <view class="tab-container">
    <scroll-view scroll-x="true" class="tab-scroll">
      <view class="tab-inner">
        <view class="tab-item" v-for="(item,index) in labelList" :key="index">
          {{ item.name }}
        </view>
      </view>
    </scroll-view>
    <view class="tab-icon">
      <uni-icons type="gear" size="26" color="666"/>
    </view>
  </view>
</template>

<script>

export default {
  name: "TabBar",
  data() {
    return {
      labelList: [],
    };
  },
  mounted() {
    this.fetchLabelList();
  },
  methods: {
    fetchLabelList() {
      this.$http.getLabelList().then(res => {
        this.labelList = res;
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.tab-container {
  display: flex;
  width: 100%;

  .tab-scroll {
    overflow: hidden;
  }

  .tab-inner {
    display: flex;
    white-space: nowrap;
    padding: 0 1em;

    .tab-item {
      margin: 0.7em;
      flex-shrink: 0;
    }
  }

  .tab-icon {
    padding: 0.7em;
    flex-shrink: 0;
    position: relative;
  }

  .tab-icon::before {
    width: 2rpx;
    height: 40rpx;
    content: '';
    position: absolute;
    display: block;
    background: #cccccc;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
}

</style>