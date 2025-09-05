<script lang="ts" setup>
import PLATFORM from '@/utils/platform'
import Tabbar from '@/components/Tabbar.vue'
import SplashScreen from './components/SplashScreen.vue'
//
onLoad(() => PLATFORM.isApp && uni.hideTabBar())

const isShowSplashScreen = ref(false)
</script>

<template>
  <view class="bg-#F7F4EF">
    <image src="@/assets/icons/indexTopCover.svg" class="w-full" mode="widthFix" />

    <!-- 个人信息, 我的权益 -->
    <view class="mx-3 bg-white mt--5 p-4 z-1 relative rounded-1">
      <view class="flex justify-between">
        <view class="flex items-center">
          <text class="text-4">茶茶</text>
          <text class="bg-#AC9FB3 color-#fff ml-1 px-1 text-2.5 rounded-1 line-height-4">
            见习贵宾
          </text>
        </view>
        <view>
          喜茶券
          <text class="text-4 font-600">0</text>
          张
        </view>
      </view>
      <view class="h-1px bg-#e7e7e7 mt-3"></view>
      <view class="mt-3 flex justify-between items-center">
        <view>
          <text class="color-#CB9964">我的权益</text>
          <text class="ml-1 color-#999999">您有0项待使用权，开启提醒不错过</text>
        </view>
        <view>
          <image src="@/assets/icons/arrowRight.svg" class="w-5" mode="widthFix" />
        </view>
      </view>
    </view>

    <!-- 下单卡片 -->
    <view class="mx-3 bg-white mt-2 p-4 z-1 relative rounded-1">
      <view class="flex justify-center items-center pb-4">
        <view>
          <view class="text-6 font-600">到店取</view>
          <view class="mt-0.5 color-#666666 text-3">提前下单免排队</view>
        </view>
        <view class="h-8.5 w-1px bg-#C9C9C9 mx-10"></view>
        <view class="relative">
          <image
            src="@/assets/icons/indexXiWaiSong.svg"
            class="h-17 absolute left--13 bottom--3"
            mode="heightFix"
          />
          <view class="text-6 font-600">喜外送</view>
          <view class="mt-0.5 color-#666666 text-3">随时送喜到家</view>
        </view>
      </view>
      <view class="mt-4 flex">
        <view class="flex-1 flex justify-center items-center flex-col">
          <image class="h-8" mode="heightFix" src="@/assets/icons/indexWS1.svg" />
          <view class="mt-1.5">配方原料揭秘</view>
        </view>
        <view class="flex-1 flex justify-center items-center flex-col">
          <image class="h-8" mode="heightFix" src="@/assets/icons/indexWS2.svg" />
          <view class="mt-1.5">喜卡</view>
        </view>
        <view class="flex-1 flex justify-center items-center flex-col">
          <image class="h-8" mode="heightFix" src="@/assets/icons/indexWS3.svg" />
          <view class="mt-1.5">成为合伙人</view>
        </view>
        <view class="flex-1 flex justify-center items-center flex-col">
          <image class="h-8" mode="heightFix" src="@/assets/icons/indexWS4.svg" />
          <view class="mt-1.5">阿喜团餐</view>
        </view>
      </view>
    </view>

    <!-- 邀请卡片 -->
    <view class="h-42 flex justify-between mx-3 mt-2">
      <view class="mr-2 h-full bg-#F2EAD7 flex-1 pl-3 pt-2 pb-4 relative">
        <view class="text-4 font-600">邀请有礼</view>
        <view class="flex items-end pt-1">
          <view class="">
            <text class="color-#CB9964 line-height-3">邀好友得</text>
            <text class="color-#CB9964 text-4.5 line-height-4.5">5</text>
          </view>
          <view class="flex items-center">
            <text class="color-#CB9964 text-3">元红包</text>
            <image src="@/assets/icons/indexYQRightArrow.svg" mode="widthFix" class="w-3" />
          </view>
        </view>
        <view
          class="absolute left-3 bottom-4 bg-#ED8735 color-white px-2.5 line-height-5.5 rounded-full"
        >
          立即邀请
        </view>
        <image
          class="absolute right-0 bottom-0 h-28"
          src="@/assets/icons/indexYQCover1.svg"
          mode="heightFix"
        />
      </view>

      <view class="flex-1 flex-col flex">
        <view class="bg-#F2DDCA flex-1 pl-3 pt-2 relative">
          <view class="text-4 font-600">加熟客群</view>
          <view class="flex items-center pt-1">
            <view class="color-#CB9964 line-height-5">领18元入群礼</view>
            <image src="@/assets/icons/indexYQRightArrow.svg" mode="widthFix" class="w-3" />
          </view>

          <image
            class="absolute right-0 bottom-0 h-full"
            mode="heightFix"
            src="@/assets/icons/indexYQCover2.svg"
          />
        </view>
        <view class="bg-#DDE7DC flex-1 mt-2 pl-3 pt-2 relative">
          <view class="text-4 font-600">喜钱袋</view>
          <view class="flex items-center pt-1">
            <view class="color-#CB9964 line-height-5">充值享赠饮券</view>
            <image src="@/assets/icons/indexYQRightArrow.svg" mode="widthFix" class="w-3" />
          </view>

          <image
            class="absolute right-0 bottom-0 h-full"
            mode="heightFix"
            src="@/assets/icons/indexYQCover3.svg"
          />
        </view>
      </view>
    </view>

    <!-- 请喝活动 -->
    <view class="bg-white mt-3 mx-3">
      <image src="@/assets/icons/indexQHCover1.svg" mode="widthFix" class="w-full" />
      <view class="py-4 px-3">
        <view class="text-4 font-600">又一年杨梅「鲜」，请喝10万杯～</view>
        <view>第五年杨梅季，真果肉，无小料，轻负担</view>
      </view>
    </view>

    <!-- 介绍文本 -->
    <view class="bg-#F3EBD6 mt-3 mx-3 px-3 py-5">
      <view class="color-#9B6944 text-6 pl-5 line-height-8 font-600 tracking-0.5">
        <view>开新</view>
        <view>创茶</view>
        <view>者饮</view>
      </view>

      <view class="color-#F89D54 text-4.5 font-600 pl-17.5 mt--4">喜</view>

      <view class="flex justify-between mt-6 relative">
        <view class="color-#CB9964">
          2012年，喜茶使用真原茶、真牛乳首创芝士茶 推动行业原料升级，成为新茶饮的开创者
        </view>
        <view class="ml-6">
          <image class="w-5 h-5" src="@/assets/icons/indexJSRightArrow.svg" />
        </view>

        <view
          class="absolute border-#9B6944/20 h-38 border border-solid rounded-100% bottom--4 left--3 right--3"
        ></view>
      </view>

      <view class="bg-#E1BFB2 h-1px mt-8" />

      <view class="text-4 color-#9B6944 mt-8">成为「喜茶事业合伙人」</view>
      <view class="flex mt-1">
        <view class="color-#CB9964">
          与我们携手，将真品质的茶饮和激发喜悦的品 牌，带给更多的用户
        </view>
        <view class="ml-6">
          <image class="w-5 h-5" src="@/assets/icons/indexJSRightArrow.svg" />
        </view>
      </view>
    </view>

    <SplashScreen v-model:visible="isShowSplashScreen" />
    <Tabbar tabbar-path="/pages/index/index" />
  </view>
</template>

<style lang="scss" scoped>
//
page {
  background-color: #f7f4ef;
}
</style>

<route lang="json5" type="home">
{
  layout: 'default',
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: '首页',
  },
  needLogin: false,
}
</route>
