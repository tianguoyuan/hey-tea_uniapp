<script lang="ts" setup>
import Tabbar from '@/components/Tabbar.vue'
</script>

<template>
  <view class="">
    <Tabbar tabbar-path="/pages/coupon/coupon" />
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
