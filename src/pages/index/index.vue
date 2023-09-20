<template>
  <view class="content">
    <image class="logo w-[200rpx] h-[200rpx]" src="/static/logo.png" />
    <view class="text-area" @click="aa">
      <text class="title">{{ title }}</text>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const title = ref('Hello')

function aa() {
  console.log(12312312)
  throw new Error('错误无')
}
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  @apply mt-[200rpx] ml-[auto] mr-[auto] mb-[50rpx];
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
