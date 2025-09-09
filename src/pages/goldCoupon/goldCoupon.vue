<script lang="ts" setup>
import Tabbar from '@/components/Tabbar.vue'
</script>

<template>
  <view class="">
    <view class="bg-#FFD495 relative pb-11 h-77">
      <image
        src="@/assets/icons/goldCouponTopBg1.svg"
        class="h-77 left--48 top--4.5 absolute"
        mode="heightFix"
      />

      <view
        class="top-25 left-5 right-5 absolute z-1 bg-#fff/60 h-37 rounded-4 p-3 flex flex-col justify-between"
      >
        <image
          src="@/assets/icons/goldCouponTopBg2.svg"
          class="w-30 h-30 right-9 top--12 absolute"
        />
        <image src="@/assets/icons/goldCouponTopBg3.svg" class="w-50 h-50 right-0 top-0 absolute" />

        <view>
          <view class="flex items-center">
            <image src="@/assets/icons/goldCouponCardImg1.svg" class="w-7.5" mode="widthFix" />
            <text class="text-5 color-#843816 ml-2 font-600">金喜卡</text>
          </view>
          <view class="mt-1 text-3.5 color-#863B14">
            <text>享</text>
            <text class="color-#F66D3F font-600 text-4">90</text>
            <text>天金喜权益，畅饮更划算</text>
          </view>
        </view>
        <view class="">
          <image src="@/assets/icons/goldCouponCardImg2.svg" class="h-6" mode="heightFix" />
        </view>
      </view>
    </view>

    <view class="bg-white rounded-tl-6 py-4 px-5 mt--8 relative z-1">
      <view
        class="h-12 line-height-12 flex justify-center bg-[linear-gradient(270deg,#F9CE97_0%,#F5BD8C_100%)] color-#843816 rounded-full items-baseline"
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
    navigationBarTitleText: '',
    navigationStyle: 'custom',
  },
}
</route>
