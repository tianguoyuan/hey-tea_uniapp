<script lang="ts" setup>
import { ColorEnum } from '@/enums/ColorEnum'
import TnTabbar from '@tuniao/tnui-vue3-uniapp/components/tabbar/src/tabbar.vue'
import TnTabbarItem from '@tuniao/tnui-vue3-uniapp/components/tabbar/src/tabbar-item.vue'
import { useTabbarStore } from '@/store/tabbar'
import IconHome from '@/assets/icons/home.svg'
import IconHomeActive from '@/assets/icons/homeActive.svg'
import IconMarket from '@/assets/icons/market.svg'
import IconMarketActive from '@/assets/icons/marketActive.svg'
import IconUser from '@/assets/icons/user.svg'
import IconUserActive from '@/assets/icons/userActive.svg'
import IconOrder from '@/assets/icons/order.svg'
import IconOrderActive from '@/assets/icons/orderActive.svg'
import IconCoupon from '@/assets/icons/coupon.svg'
import IconCouponActive from '@/assets/icons/couponActive.svg'
const tabbarStore = useTabbarStore()

const tabbarList = [
  { title: '首页', icon: IconHome, activeIcon: IconHomeActive, path: '/pages/index/index' },
  { title: '点单', icon: IconOrder, activeIcon: IconOrderActive, path: '/pages/order/order' },
  {
    title: '百货',
    icon: IconMarket,
    activeIcon: IconMarketActive,
    path: '/pages/market/market',
  },
  { title: '金喜卡', icon: IconCoupon, activeIcon: IconCouponActive, path: '/pages/coupon/coupon' },
  { title: '我的', icon: IconUser, activeIcon: IconUserActive, path: '/pages/user/user' },
]
type PathType = (typeof tabbarList)[number]['path']
const props = withDefaults(
  defineProps<{
    tabbarPath: PathType
    topShadow: boolean
  }>(),
  {
    topShadow: true,
  },
)

// 初次进入生效
const tabbarIndex = tabbarList.findIndex((v) => v.path === props.tabbarPath)
tabbarStore.changeTabbarIndex(tabbarIndex)

function pageTo(index: number) {
  tabbarStore.changeTabbarIndex(index)
  const path = tabbarList[index]?.path
  if (!path) return
  uni.switchTab({ url: path })
}
</script>

<template>
  <TnTabbar
    v-if="!tabbarStore.hideTabbar"
    :model-value="tabbarStore.tabbarIndex"
    fixed
    :bg-color="ColorEnum.MAIN_COLOR"
    active-color="#000"
    safe-area-inset-bottom
    :top-shadow="props.topShadow"
    placeholder
  >
    <TnTabbarItem v-for="(item, index) in tabbarList" :key="index" @click="pageTo(index)">
      <template #default>
        <view v-if="item.title" class="flex-1 flex items-center h-45px">
          <view class="flex flex-col items-center justify-center text-3">
            <view>
              <image
                v-show="index === tabbarStore.tabbarIndex"
                :src="item.activeIcon"
                class="w-5 h-5"
              />
              <image v-show="index !== tabbarStore.tabbarIndex" :src="item.icon" class="w-5 h-5" />
            </view>
            <view class="mt-1">{{ item.title }}</view>
          </view>
        </view>

        <view v-else class="flex-1 flex items-start h-45px">
          <image :src="item.icon" class="w-9 h-9 mt-1" />
        </view>
      </template>
    </TnTabbarItem>
  </TnTabbar>
</template>

<style lang="scss" scoped>
//
</style>
