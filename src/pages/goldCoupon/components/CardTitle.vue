<script lang="ts" setup>
//
const props = defineProps<{
  tip: string
  title: string
  prevDesc: string
  nextDesc: string
  num: string
}>()
</script>

<template>
  <view class="flex items-center">
    <view class="relative">
      <image src="@/assets/icons/goldCouponTitleBg.svg" class="h-4 w-5" mode="heightFix" />
      <view
        class="absolute left-0 right-0 text-center top-3px color-#843816 text-2.5 line-height-4"
      >
        {{ props.tip }}
      </view>
    </view>
    <view class="text-4 font-600 ml-1">{{ props.title }}</view>
    <view class="flex items-baseline">
      <view class="ml-1">{{ props.prevDesc }}</view>
      <view class="text-4 font-600 color-#F66D3F">{{ props.num }}</view>
      <view>{{ props.nextDesc }}</view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
//
</style>
