<script lang="ts" setup>
import { TnTabs, TnTabsItem } from '@tuniao/tnui-vue3-uniapp'

const currentTabIndex = ref(0)
onLoad((query) => {
  currentTabIndex.value = query.index ? +query.index : 0
})

const tabsData = ref([
  { text: '茶饮鲜食' },
  {
    text: '喜茶百货',
  },
])
</script>

<template>
  <view class=""></view>
  <TnTabs v-model="currentTabIndex" :scroll="false" active-color="#1A1A1A" color="#999999">
    <TnTabsItem v-for="(item, index) in tabsData" :key="index" :title="item.text" />
    <template #bar>
      <view class="custom-bar">
        <view class="w-12 h-0.5 bg-#000"></view>
      </view>
    </template>
  </TnTabs>
</template>

<style lang="scss" scoped>
//
</style>

<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationStyle: 'default',
    navigationBarTitleText: '我的订单',
  },
}
</route>
