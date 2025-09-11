<script lang="ts" setup>
import pointsMallTopList1 from '@/assets/icons/pointsMallTopList1.svg'
import pointsMallTopList2 from '@/assets/icons/pointsMallTopList2.svg'
import pointsMallTopList3 from '@/assets/icons/pointsMallTopList3.svg'
import CardImageList from '@/components/CardImageList.vue'

import pointsMallList1 from '@/assets/icons/pointsMallList1.svg'
import pointsMallList2 from '@/assets/icons/pointsMallList2.svg'
import pointsMallList3 from '@/assets/icons/pointsMallList3.svg'
import pointsMallList4 from '@/assets/icons/pointsMallList4.svg'
import pointsMallList5 from '@/assets/icons/pointsMallList5.svg'
import pointsMallList6 from '@/assets/icons/pointsMallList6.svg'

const infoList = ref([
  { imagePath: pointsMallTopList1, title: '积分明细' },
  { imagePath: pointsMallTopList2, title: '兑换记录' },
  { imagePath: pointsMallTopList3, title: '积分规则' },
])

const listData = ref([
  { points: '200', imagePath: pointsMallList1, title: '外卖免配送费券' },
  { points: '300', imagePath: pointsMallList2, title: '要吃点（1件）兑换券' },
  { points: '200', imagePath: pointsMallList3, title: '外卖免配送费券' },
  { points: '300', imagePath: pointsMallList4, title: '要吃点（1件）兑换券' },
  { points: '200', imagePath: pointsMallList5, title: '外卖免配送费券' },
  { points: '300', imagePath: pointsMallList6, title: '要吃点（1件）兑换券' },
])
</script>

<template>
  <view class="py-4 px-5">
    <view class="text-5 font-600">可用积分 0</view>
    <view class="mt-4 flex">
      <view v-for="(item, index) in infoList" :key="index" class="mr-5 flex items-center">
        <image :src="item.imagePath" class="h-4" mode="heightFix" />
        <text class="ml-1">积分明细</text>
      </view>
    </view>

    <CardImageList :list="listData">
      <template #footer="{ item }">
        <view class="flex items-center">
          <text class="text-3.5 color-#BA9952 font-600">{{ item.points }}</text>
          <text class="color-#999 ml-0.5 text-2.5">积分</text>
        </view>
      </template>
    </CardImageList>
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
    navigationBarTitleText: '积分商城',
  },
}
</route>
