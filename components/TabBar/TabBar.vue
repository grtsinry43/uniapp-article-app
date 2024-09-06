<template>
  <view class="tab-container">
    <scroll-view scroll-x="true" class="tab-scroll" :scroll-with-animation="true" :scroll-into-view="curItem">
      <view class="tab-inner">
        <view @click="changeActiveIndexHandle(index)" class="tab-item" :class="{active:currentIndex === index}"
              :id="'item_' + index" v-for="(item,index) in labelList" :key="index">
          {{ item.name }}
        </view>
      </view>
    </scroll-view>
    <view class="tab-icon">
      <uni-icons @click="labelAdminHandle" type="gear" size="26" color="666"/>
    </view>
  </view>
</template>

<script>
export default {
  name: "TabBar",
  data() {
    return {
      curItem: "item_0",
    }
  },
  watch: {
    currentIndex(index) {
      this.curItem = "item_" + index;
    }
  },
  props: {
    labelList: {
      type: Array,
      default: () => []
    },
    currentIndex: {
      type: Number,
    },
  },
  methods: {
    labelAdminHandle() {
      uni.navigateTo({
        url: "/pages/labelAdmin/labelAdmin"
      })
    },
    changeActiveIndexHandle(index) {
      this.$emit("pageChanged", index)
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
      padding: 0.7em;
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

.active {
  color: #004795;
  font-weight: bold;
}
</style>