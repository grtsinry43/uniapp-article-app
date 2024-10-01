<template>
  <view>
    <!-- 基础卡片 -->
    <view class="list-card" v-if="item.mode==='base'">
      <view v-if="item.cover.length !== 0" class="list-card-img">
        <image :src="item.cover[0]" mode="aspectFill"></image>
      </view>
      <view class="list-card-content">
        <view class="list-card-content-title">
          <text>
            {{ item.title }}
          </text>
          <SaveLikes></SaveLikes>
        </view>
        <view class="list-card-content-desc">
          <view class="article-type">
            {{ item.classify }}
          </view>
          <view class="browse-number">
            {{ item.browse_count }}浏览
          </view>
        </view>
      </view>
    </view>
    <!-- 多图模式 -->
    <view class="list-card mode-column" v-if="item.mode==='column'">
      <view class="list-card-top">
        <text>{{ item.title }}</text>
        <SaveLikes></SaveLikes>
      </view>
      <view class="list-card-middle">
        <view class="image-container" v-for="(item,index) in item.cover" :key="index">
          <image
              :src="item"
              mode="aspectFill"></image>
        </view>
      </view>
      <view class="list-card-content-desc list-card-bottom">
        <view class="article-type">
          {{ item.classify }}
        </view>
        <view class="browse-number">
          293浏览
        </view>
      </view>

    </view>
    <!-- 大图模式 -->
    <view class="list-card mode-image" v-if="item.mode==='image'">
      <view class="list-card-top">
        <view v-if="item.cover.length !== 0" class="image-container">
          <image :v-if="item.cover.length" :src="item.cover[0]" mode="aspectFill"></image>
        </view>
      </view>
      <view class="list-card-middle">
        <text>{{ item.title }}</text>
        <SaveLikes></SaveLikes>
      </view>
      <view class="list-card-content-desc list-card-bottom">
        <view class="article-type">
          {{ item.classify }}
        </view>
        <view class="browse-number">
          293浏览
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import SaveLikes from "../SaveLikes.vue";

export default {
  name: "ListCard",
  components: {SaveLikes},
  props: {
    item: Object
  },
  data() {
    return {};
  },
  mounted() {
    console.log(this.item)
  },
}
</script>

<style lang="scss">
/* 基础卡片 */
.list-card {
  @include flex();
  padding: 20rpx;
  margin: 20rpx;
  border-radius: 10rpx;
  box-shadow: 0 0 10px 2rpx rgba(0, 0, 0, .1);

  .list-card-img {
    width: 120rpx;
    height: 120rpx;
    border-radius: 10rpx;
    overflow: hidden;
    flex-shrink: 0;

    image {
      width: 100%;
      height: 100%;
    }
  }

  .list-card-content {
    @include flex(space-between, column);
    padding-left: 20rpx;
    width: 100%;

    .list-card-content-title {
      @include flex();
      align-items: flex-start;
      font-size: 28rpx;
      color: #333333;
      font-weight: 400;
      line-height: 1.2;

      text {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
  }

  /* 三种图片类型的公共样式 */
  .list-card-content-desc {
    @include flex();
    font-size: 24rpx;
    width: 100%;
    margin-top: 20rpx;

    .article-type {
      padding: 0 10rpx;
      margin-right: 10rpx;
      border-radius: 30rpx;
      color: $base-color;
      border: 1px solid $base-color;
    }

    .browse-number {
      color: #666;
      line-height: 1.5;
    }
  }

  /* 多图模式以及大图模式的公共样式 */
  .list-card-top, .list-card-middle, .list-card-bottom {
    @include flex();
    width: 100%;
  }

  /* 多图模式 */
  &.mode-column {
    flex-direction: column;

    .list-card-top {
      text {
        font-size: 28rpx;
        color: #333333;
      }
    }

    .list-card-middle {
      margin: 20rpx 0;

      .image-container {
        width: 32%;
        border-radius: 10rpx;
        height: 140rpx;
        overflow: hidden;

        image {
          width: 100%;
          height: 100%;
        }
      }

    }
  }

  &.mode-image {
    flex-direction: column;

    .image-container {
      width: 100%;
      height: 200rpx;

      image {
        width: 100%;
        height: 100%;
      }
    }

    .list-card-middle {
      margin-top: 10rpx;

      text {
        font-size: 28rpx;
        color: #333333;
      }
    }
  }
}
</style>
