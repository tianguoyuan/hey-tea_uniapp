<script lang="ts" setup>
import CardImageList from '@/components/CardImageList.vue'
import Tabbar from '@/components/Tabbar.vue'
import { getImage } from '@/utils/imageManager'

const rXImageList = ref([
  { imagePath: getImage('marketRX1'), title: '【帕梅拉推荐】喜茶空茶', price: '64.4' },
  { imagePath: getImage('marketRX1'), title: '【帕梅拉推荐】喜茶空茶', price: '64.4' },
])
</script>

<template>
  <view class="bg-#F6F6F6">
    <image :src="getImage('marketTopCover')" class="w-full" mode="widthFix" />

    <view class="p-3 pt-5">
      <!-- 喜茶瓶装 -->
      <view class="flex">
        <view class="w-37.5 bg-white pt-2 px-3">
          <view class="text-3.5 font-600">喜茶瓶装</view>
          <view>
            <text class="color-#999999">随心喝喜茶</text>
            <image :src="getImage('arrowRight')" class="w-3 h-3" />
          </view>
          <image :src="getImage('marketZB1')" class="h-26 mt-2" mode="heightFix" />
        </view>
        <view class="ml-2 flex-1">
          <view class="bg-white p-2 pl-3 flex justify-between">
            <view>
              <view>茶礼盒</view>
              <view>
                <text class="color-#999999">灵感好茶</text>
                <image :src="getImage('arrowRight')" class="w-3 h-3" />
              </view>
            </view>
            <image :src="getImage('marketZB2')" class="w-15 h-15" />
          </view>
          <view class="bg-white p-2 pl-3 flex justify-between mt-9px">
            <view>
              <view>茶礼盒</view>
              <view>
                <text class="color-#999999">灵感好茶</text>
                <image :src="getImage('arrowRight')" class="w-3 h-3" />
              </view>
            </view>
            <image :src="getImage('marketZB3')" class="w-15 h-15" />
          </view>
        </view>
      </view>

      <!-- 百货上新 -->
      <view class="mt-6">
        <view class="flex items-center">
          <text class="text-4 font-600">百货上新</text>
          <text class="ml-2 color-#999">NEW ARRIVALS</text>
        </view>

        <image :src="getImage('marketSX1')" class="mt-6 w-full" mode="widthFix" />
        <view class="p-3 bg-white flex pr-8">
          <image :src="getImage('marketSX2')" class="w-30 h-30" />

          <view class="flex-1 ml-3 flex flex-col justify-center">
            <view class="line-clamp-1">【帕梅拉推荐】喜茶空茶喜茶空茶</view>

            <view class="flex justify-between mt-2.5 items-center">
              <view class="flex items-baseline font-600">
                <text>¥</text>
                <text class="text-3.5">64.4</text>
              </view>
              <view class="color-#fff bg-#1A1A1A py-1.5 px-3 line-height-5">立即购买</view>
            </view>
          </view>
        </view>
      </view>

      <!-- 百货热销 -->
      <view class="mt-6">
        <view class="flex items-center">
          <text class="text-4 font-600">百货热销</text>
          <text class="ml-2 color-#999">FEATURED PRODUCTS</text>
        </view>

        <CardImageList class="mt-6" :list="rXImageList" />
      </view>
    </view>

    <Tabbar tabbar-path="/pages/market/market" />
  </view>
</template>

<style lang="scss" scoped>
//
</style>

<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '',
    navigationStyle: 'custom',
  },
}
</route>
