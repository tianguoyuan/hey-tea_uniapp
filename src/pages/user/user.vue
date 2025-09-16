<script lang="ts" setup>
import Tabbar from '@/components/Tabbar.vue'
import userVipService1 from '@/assets/icons/userVipService1.svg'
import userVipService2 from '@/assets/icons/userVipService2.svg'
import userVipService3 from '@/assets/icons/userVipService3.svg'
import userVipService4 from '@/assets/icons/userVipService4.svg'
import userVipService5 from '@/assets/icons/userVipService5.svg'
import userVipService6 from '@/assets/icons/userVipService6.svg'
import userVipService7 from '@/assets/icons/userVipService7.svg'
import userVipService8 from '@/assets/icons/userVipService8.svg'
import { useUniAppSystemRectInfo } from '@tuniao/tnui-vue3-uniapp'
const { systemScreenInfo } = useUniAppSystemRectInfo()
console.log('systemScreenInfo', systemScreenInfo)

const myCouponList = ref([
  { num: '0', key: '', title: '喜茶券' },
  { num: '0', key: '', title: '喜卡' },
  { num: '0', key: 'happyMoneyBag', title: '喜钱袋', isClick: true },
  { num: '0', key: 'pointsMall', title: '积分商城', isClick: true },
])

const vipServiceList = ref([
  { imagePath: userVipService1, title: '学子卡' },
  { imagePath: userVipService2, title: '阿喜熟客群' },
  { imagePath: userVipService3, title: '阿喜暖心券' },
  { imagePath: userVipService4, title: '我的客服' },
  { imagePath: userVipService5, title: '喜讯' },
  { imagePath: userVipService6, title: '兑换中心' },
  { imagePath: userVipService7, title: '发票助手' },
  { imagePath: userVipService8, title: '更多' },
])

function pageToUserOrder() {
  uni.navigateTo({
    url: '/pages/user/myOrder',
  })
}

function pageTo(key: string) {
  if (key === 'happyMoneyBag') {
    uni.navigateTo({
      url: '/pages/user/happyMoneyBag',
    })
  } else if (key === 'pointsMall') {
    uni.navigateTo({
      url: '/pages/user/pointsMall',
    })
  }
}
</script>

<template>
  <view
    class="bg-#F6F6F6"
    :style="{
      'min-height': `calc(${systemScreenInfo.height}px - 50px)`,
    }"
  >
    <view class="relative">
      <image src="@/assets/icons/userTopCover.svg" class="h-66" mode="heightFix" />
      <view class="absolute left-5 top-27 right-5">
        <view class="text-5 color-#817287 font-600">茶茶</view>
        <view class="text-4 color-#817287 mt-4">见/习/贵/宾</view>
        <view class="mt-4 h-0.5 bg-#fff/72"></view>

        <view class="flex justify-between mt-3">
          <view>
            <text class="text-2.5 color-#817287">
              已解锁
              <text class="font-600">12</text>
              项特权
            </text>
            <image src="@/assets/icons/arrowRight.svg" class="w-3 h-3" />
          </view>
          <view class="text-2.5 color-#817287">0/1</view>
        </view>
      </view>
    </view>

    <view class="mx-3 mt--5.5 relative z-1">
      <view
        class="bg-[linear-gradient(270deg,#FAE3B9_0%,#E7BD8E_100%)] h-12 flex justify-between px-5"
      >
        <view class="flex items-center">
          <image src="@/assets/icons/goldCouponCardImg1.svg" class="h-5.5" mode="heightFix" />
          <text class="ml-1 text-3.5 color-#843816">金喜卡</text>
        </view>
        <view class="flex items-center">
          开卡享金喜价，首杯立减8元
          <image src="@/assets/icons/arrowRightBrown.svg" class="w-4 h-4" />
        </view>
      </view>

      <view class="mt-2 bg-#fff p-5 pt-3">
        <view class="flex justify-between">
          <view class="text-3.5 color-#3D3D3D font-600">我的订单</view>
          <view class="flex items-center" @click="pageToUserOrder">
            <text class="color-#999999 hasClickBox">查看最近订单</text>
            <image src="@/assets/icons/arrowRight.svg" class="w-4 h-4 ml-0.5" />
          </view>
        </view>

        <view class="h-1px bg-#e1e1e1 mt-3"></view>

        <view class="mt-5 color-#000 font-600 text-3.5">我的卡券</view>

        <view class="mt-5 flex justify-between">
          <view
            v-for="(item, index) in myCouponList"
            :key="index"
            class="text-center"
            :class="[item.isClick ? 'hasClickBox' : '']"
            @click="pageTo(item.key)"
          >
            <view class="text-4 font-600">{{ item.num }}</view>
            <view class="text-2.5 color-#686868">{{ item.title }}</view>
          </view>
        </view>
      </view>

      <view
        class="mt-2 px-3 py-1 bg-[linear-gradient(180deg,#F7F1E1_0%,#FFFFFF_98%)] flex items-center justify-between"
      >
        <view class="flex items-center">
          <image src="@/assets/icons/userYQ1.svg" class="h-18" mode="heightFix" />
          <view class="ml-1">
            <view class="text-4 line-height-6 color-#000000">「邀」请有礼</view>
            <view class="line-height-5 color-#C49A74">邀请好友得5元饮茶红包</view>
          </view>
        </view>
        <view class="bg-#EF8635 flex items-center color-#fff px-2 line-height-6 rounded-full">
          <text>立即邀请</text>
          <image src="@/assets/icons/arrowRightWhite.svg" class="w-3 h-3" />
        </view>
      </view>

      <view class="mt-2 bg-#fff py-5">
        <view class="font-600 color-#000000 text-3.5 px-5">贵宾服务</view>

        <view class="grid grid-cols-4 place-content-between">
          <view v-for="(item, index) in vipServiceList" :key="index" class="mt-5 text-center">
            <image :src="item.imagePath" class="h-6" mode="heightFix" />
            <view class="mt-0.5 color-#888888">{{ item.title }}</view>
          </view>
        </view>
      </view>
    </view>
    <Tabbar tabbar-path="/pages/user/user" />
  </view>
</template>

<style lang="scss" scoped>
//
</style>

<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '我的',
    navigationStyle: 'custom',
  },
}
</route>
