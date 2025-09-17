<script lang="ts" setup>
import orderBanner1 from '@/assets/icons/orderBanner1.svg'
import orderBanner2 from '@/assets/icons/orderBanner2.svg'
import orderBanner3 from '@/assets/icons/orderBanner3.svg'
import { useUniAppSystemRectInfo } from '@tuniao/tnui-vue3-uniapp'
const { systemScreenInfo, getSystemRectInfo } = useUniAppSystemRectInfo()
getSystemRectInfo()
console.log('systemScreenInfo', systemScreenInfo)

const list = [{ img: orderBanner1 }, { img: orderBanner2 }, { img: orderBanner3 }]
</script>

<template>
  <view class="bg-#efefef" :style="{ 'min-height': `calc(${systemScreenInfo.height}px - 88rpx)` }">
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
