<script lang="ts" setup>
import Tabbar from '@/components/Tabbar.vue'
import CardTitle from './components/CardTitle.vue'

import { getImage } from '@/utils/imageManager'

const productList = ref([
  { imagePath: getImage('goldCouponProduct1'), title: '多肉葡萄(首创)', num: '15.5' },
  { imagePath: getImage('goldCouponProduct2'), title: '椰椰芒芒', num: '15' },
  { imagePath: getImage('goldCouponProduct3'), title: '热多肉红柚', num: '15.5' },
  { imagePath: getImage('goldCouponProduct4'), title: '黑糖波波真牛乳', num: '12' },
  { imagePath: getImage('goldCouponProduct5'), title: '多肉杨梅', num: '16.5' },
  { imagePath: getImage('goldCouponProduct6'), title: '多肉葡萄', num: '13' },
  { imagePath: getImage('goldCouponProduct7'), title: '多肉青提', num: '13.5' },
  { imagePath: getImage('goldCouponProduct8'), title: '小奶茉', num: '12.5' },
])
</script>

<template>
  <view class="">
    <view class="bg-#FFD495 relative pb-11 h-77 overflow-hidden">
      <image
        :src="getImage('goldCouponTopBg1')"
        class="h-77 left--48 top--4.5 absolute"
        mode="heightFix"
      />

      <view
        class="top-25 left-5 right-5 absolute z-1 bg-#fff/60 h-37 rounded-4 p-3 flex flex-col justify-between"
      >
        <image :src="getImage('goldCouponTopBg2')" class="w-30 h-30 right-9 top--12 absolute" />
        <image :src="getImage('goldCouponTopBg3')" class="w-50 h-50 right-0 top-0 absolute" />

        <view>
          <view class="flex items-center">
            <image :src="getImage('goldCouponCardImg1')" class="w-7.5" mode="widthFix" />
            <text class="text-5 color-#843816 ml-2 font-600">金喜卡</text>
          </view>
          <view class="mt-1 text-3.5 color-#863B14">
            <text>享</text>
            <text class="color-#F66D3F font-600 text-4">90</text>
            <text>天金喜权益，畅饮更划算</text>
          </view>
        </view>
        <view class="">
          <image :src="getImage('goldCouponCardImg2')" class="h-6" mode="heightFix" />
        </view>
      </view>
    </view>

    <view class="bg-white rounded-tl-6 py-4 px-5 mt--8 relative z-1">
      <view>
        <CardTitle tip="权益1" title="金喜红包" prev-desc="最高可省" next-desc="元" num="98" />
        <view class="mt-3 flex justify-between">
          <image :src="getImage('goldCouponHB1')" class="h-22" mode="heightFix" />
          <image :src="getImage('goldCouponHB2')" class="h-22" mode="heightFix" />
          <image :src="getImage('goldCouponHB3')" class="h-22" mode="heightFix" />
        </view>
      </view>

      <view class="mt-5">
        <CardTitle tip="权益2" title="金喜价" prev-desc="享" next-desc="次金喜价" num="12" />
        <view class="p-2 pb-3 bg-#FEF4EA rounded-2 mt-3">
          <view class="text-2.5 color-#843816">以下饮品任选(金喜价不与其他优惠同享)</view>

          <view class="mt-2 grid grid-cols-4 gap-3.5">
            <view v-for="(item, index) in productList" :key="index" class="pb-3">
              <image :src="item.imagePath" class="h-16.5" mode="heightFix" />
              <view class="mt-0.5 text-2.5 color-#000 line-clamp-1 text-center">
                {{ item.title }}
              </view>

              <view class="flex justify-center mt-0.5">
                <view class="bg-#FEDAB8 pl-0.5 flex">
                  <view class="flex items-baseline">
                    <text class="text-2 color-#843816">¥</text>
                    <text class="text-2.5 color-#843816 flex-shrink-0 font-600">
                      {{ item.num }}
                    </text>
                  </view>
                  <image
                    :src="getImage('goldCouponProductNumBg')"
                    class="h-4 ml-0.5"
                    mode="heightFix"
                  />
                </view>
              </view>
            </view>
          </view>

          <view class="text-2.5 color-#999999">
            *商品及金喜价的差异变动，请以结算页面的实际展示为准
          </view>
        </view>
      </view>

      <view class="mt-3">
        <view class="flex justify-between text-3.5 py-3">
          <view>开通规则</view>
          <image :src="getImage('arrowRight')" class="w-4 h-4" />
        </view>
        <view class="h-1px bg-#e7e7e7"></view>
        <view class="flex justify-between text-3.5 py-3">
          <view>常见问题</view>
          <image :src="getImage('arrowRight')" class="w-4 h-4" />
        </view>
      </view>
      <view class="text-2.5 color-#999999 text-center mt-7">
        <text>开通即视为阅读并同意</text>
        <text class="color-#B27D51">《喜茶金喜卡开通须知》</text>
      </view>
      <view
        class="h-12 line-height-12 flex justify-center bg-[linear-gradient(270deg,#F9CE97_0%,#F5BD8C_100%)] color-#843816 rounded-full items-baseline mt-2"
      >
        <text class="font-600">¥</text>
        <text class="text-4 font-600">8.8</text>
        <text class="text-4 ml-0.5">立即开卡</text>
      </view>
    </view>
    <Tabbar tabbar-path="/pages/goldCoupon/goldCoupon" />
  </view>
</template>

<style lang="scss" scoped>
//
</style>

<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '金喜卡',
    navigationStyle: 'custom',
  },
}
</route>
