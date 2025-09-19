<script lang="ts" setup>
import { getImage } from '@/utils/imageManager'
import { useAppStore } from '@/store/app'

const appStore = useAppStore()
const list = [
  { img: getImage('orderBanner1') },
  { img: getImage('orderBanner2') },
  { img: getImage('orderBanner3') },
]
</script>

<template>
  <view
    class="bg-#efefef"
    :style="{ 'min-height': `calc(${appStore.systemScreenHeight}px - 90rpx)` }"
  >
    <view>demo</view>

    <scroll-view
      scroll-x
      class="overflow-x-auto snap-x snap-mandatory no-scrollbar"
      scroll-left="100"
    >
      <view class="flex flex-nowrap items-center">
        <view v-for="(item, i) in list" :key="i" class="w-[50%] shrink-0 mr-3 snap-center">
          <image :src="item.img" class="w-full rounded-3xl" mode="widthFix" />
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<style lang="scss" scoped>
//
</style>

<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationStyle: 'default',
    navigationBarTitleText: 'demo',
  },
}
</route>
