<script lang="ts" setup>
import CardImageList from '@/components/CardImageList.vue'
import { TnIcon, TnTabsItem, TnTabs } from '@tuniao/tnui-vue3-uniapp/components'
import pJImage1 from '@/assets/icons/indexCouponPJCover1.svg'
import jXImage1 from '@/assets/icons/indexCouponJXImage1.svg'
import jXImage2 from '@/assets/icons/indexCouponJXImage2.svg'
import cSImage1 from '@/assets/icons/indexCouponCSImage1.svg'
import cSImage2 from '@/assets/icons/indexCouponCSImage2.svg'
import cSImage3 from '@/assets/icons/indexCouponCSImage3.svg'
import cSImage4 from '@/assets/icons/indexCouponCSImage4.svg'

import xYYSImage1 from '@/assets/icons/indexCouponXYYSImage1.svg'
import xYYSImage2 from '@/assets/icons/indexCouponXYYSImage2.svg'

import xYFSImage1 from '@/assets/icons/indexCouponXYFSImage1.svg'
import xYFSImage2 from '@/assets/icons/indexCouponXYFSImage2.svg'
import xYFSImage3 from '@/assets/icons/indexCouponXYFSImage3.svg'
import xYFSImage4 from '@/assets/icons/indexCouponXYFSImage4.svg'
import PLATFORM from '@/utils/platform'

const currentTabIndex = ref(0)
onLoad((query) => {
  currentTabIndex.value = query.index ? +query.index : 0
})

const tabsData = ref([
  { text: '购买喜卡' },
  {
    text: '我的喜卡',
  },
])

// 我的喜卡
type IMyTabIndex = 'used' | 'unUsed'
const myTabIndex = ref<IMyTabIndex>('used')
function changeMyIndex(i: IMyTabIndex) {
  myTabIndex.value = i
}
function pageToExchangeCoupon() {
  uni.navigateTo({
    url: '/pages/index/exchangeCoupon',
  })
}

// 购买喜卡
const payTags = ref(['帕姐限定', '惊喜限定', '城市系列', '喜遇原神', '喜悦发生'])
// 帕姐限定
const pJImageList = ref([{ imagePath: pJImage1 }])
// 惊喜限定
const jXImageList = ref([{ imagePath: jXImage1 }, { imagePath: jXImage2 }])
// 城市系列
const cSImageList = ref([
  { imagePath: cSImage1 },
  { imagePath: cSImage2 },
  { imagePath: cSImage3 },
  { imagePath: cSImage4 },
])
const xYYSImageList = ref([{ imagePath: xYYSImage1 }, { imagePath: xYYSImage2 }])
const xYFSImageList = ref([
  { imagePath: xYFSImage1 },
  { imagePath: xYFSImage2 },
  { imagePath: xYFSImage3 },
  { imagePath: xYFSImage4 },
])
function handleMoreClick() {
  uni.navigateTo({
    url: '/pages/index/payCouponCityMore',
  })
}
</script>

<template>
  <view class="">
    <TnTabs v-model="currentTabIndex" :scroll="false" active-color="#1A1A1A" color="#999999">
      <TnTabsItem v-for="(item, index) in tabsData" :key="index" :title="item.text" />
      <template #bar>
        <view class="custom-bar">
          <view
            class="w-12 h-0.5 bg-#000"
            :class="PLATFORM.isH5 ? 'translate-x-0' : 'translate-x--50%'"
          ></view>
        </view>
      </template>
    </TnTabs>

    <view v-if="currentTabIndex === 0">
      <image src="@/assets/icons/indexCouponPayCover.svg" class="w-full" mode="widthFix" />

      <view class="flex overflow-auto flex-nowrap pr-3 mt-8">
        <view
          v-for="(item, index) in payTags"
          :key="index"
          class="bg-#F2F2F2 color-#999999 line-height-5 px-2.5 ml-3 flex-shrink-0"
        >
          {{ item }}
        </view>
      </view>

      <view class="mx-3">
        <CardImageList title="帕姐限定" :list="pJImageList" />
        <CardImageList title="惊喜限定" :list="jXImageList" />
        <CardImageList
          title="城市系列"
          :list="cSImageList"
          show-more
          @handle-more-click="handleMoreClick"
        />
        <CardImageList title="喜遇原神" :list="xYYSImageList" />
        <CardImageList title="喜悦发生" :list="xYFSImageList" />
      </view>

      <view class="h-10"></view>
    </view>
    <view v-if="currentTabIndex === 1" class="p-4">
      <view class="flex justify-between">
        <view class="flex items-center">
          <text
            :class="myTabIndex === 'used' ? '' : 'color-#888888'"
            @click="changeMyIndex('used')"
          >
            可使用(0)
          </text>
          <view class="w-1px h-3 bg-#888888 mx-3"></view>
          <text
            :class="myTabIndex === 'unUsed' ? '' : 'color-#888888'"
            @click="changeMyIndex('unUsed')"
          >
            未激活(0)
          </text>
        </view>
        <view class="color-#DCA771 hasClickBox" @click="pageToExchangeCoupon">喜卡兑换</view>
      </view>

      <view class="mt-13 flex flex-col items-center">
        <image class="h-44" mode="heightFix" src="@/assets/icons/indexCouponMyUnUsedCover.svg" />
        <view class="color-#999">暂无喜卡</view>

        <view class="mt-5 bg-#1A1A1A text-3.5 py-2 px-14 color-white">去购买喜卡</view>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
//
</style>

<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationStyle: 'white',
    navigationBarTitleText: '喜卡',
  },
}
</route>
