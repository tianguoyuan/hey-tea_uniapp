<script lang="ts" setup>
import Navbar from '@/components/Navbar.vue'
import { useAppStore } from '@/store/app'
import { useTabbarStore } from '@/store/tabbar'
import PLATFORM from '@/utils/platform'
import TnTabsItem from '@tuniao/tnui-vue3-uniapp/components/tabs/src/tabs-item.vue'
import TnTabs from '@tuniao/tnui-vue3-uniapp/components/tabs/src/tabs.vue'
import { getImage } from '@/utils/imageManager'
import { useUniAppSystemRectInfo } from '@tuniao/tnui-vue3-uniapp'

const { navBarInfo } = useUniAppSystemRectInfo()
const appStore = useAppStore()

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

function back() {
  uni.switchTab({ url: '/pages/user/user' })
}

const tabbarStore = useTabbarStore()
function clickHomeIcon() {
  tabbarStore.changeTabbarIndex(0)
  uni.switchTab({
    url: '/pages/index/index',
  })
}
</script>

<template>
  <Navbar
    title=""
    show-back-icon
    show-home-icon
    :bottom-shadow="false"
    @click-back-icon="back"
    @click-home-icon="clickHomeIcon"
  >
    <template #title>
      <view class="flex-1"></view>
      <view
        class="h-8 border-#999 border border-solid px-3 rounded-full flex justify-center items-center"
      >
        <image :src="getImage('print')" class="h-3" mode="heightFix" />
        <text class="ml-1">开发票</text>
      </view>
    </template>
  </Navbar>
  <view
    class="bg-#f6f6f6 color-#999"
    :style="{
      'min-height': `calc(${appStore.systemScreenHeight}px - ${navBarInfo.statusHeight}px - 90rpx)`,
    }"
  >
    <TnTabs v-model="currentTabIndex" :scroll="false" active-color="#1A1A1A" color="#999999">
      <TnTabsItem v-for="(item, index) in tabsData" :key="index" :title="item.text" />
      <template #bar>
        <view class="custom-bar">
          <view
            class="w-12 h-0.5 bg-#000"
            :class="PLATFORM.isApp ? 'translate-x--50%' : 'translate-x-0'"
          ></view>
        </view>
      </template>
    </TnTabs>

    <view class="flex justify-center flex-col items-center mt-15vh">
      <image :src="getImage('myOrderUserCover')" class="w-19" mode="widthFix" />
      <view class="color-#999999 mt-13">您今天还没有下单</view>
      <view class="color-#999999 mt-0.5">快去选择一杯喜欢的茶吧</view>

      <view class="mt-14 bg-#1A1A1A color-#fff h-10 w-45 flex justify-center items-center text-4">
        去点单
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
    navigationStyle: 'custom',
    navigationBarTitleText: '我的订单',
  },
}
</route>
