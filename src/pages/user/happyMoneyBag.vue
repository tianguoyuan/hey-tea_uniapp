<script lang="ts" setup>
import Navbar from '@/components/Navbar.vue'
import { useTabbarStore } from '@/store/tabbar'

const priceList = ref([
  { num: '¥100', desc: '' },
  { num: '¥200', desc: '' },
  { num: '¥300', desc: '赠喜茶现金券【19元】 x1' },
  { num: '¥500', desc: '赠喜茶现金券【19元】 x2' },
])
const priceIndex = ref(0)
function changePriceIndex(i: number) {
  priceIndex.value = i
}

function backIcon() {
  uni.navigateBack()
}
const tabbarStore = useTabbarStore()
function homeIcon() {
  tabbarStore.changeTabbarIndex(0)
  uni.switchTab({
    url: '/pages/index/index',
  })
}
</script>

<template>
  <view class="">
    <Navbar
      title="喜钱袋"
      show-back-icon
      show-home-icon
      bg-color="#CFA76A"
      text-color="#fff"
      :bottom-shadow="false"
      @click-back-icon="backIcon"
      @click-home-icon="homeIcon"
    />
    <view class="bg-#CFA76A p-5 pt-2 pb-7">
      <view class="h-9 bg-#F1E4D1 flex justify-between items-center px-3">
        <view class="flex items-center">
          <image src="@/assets/icons/hornBrown.svg" class="w-4 h-4" />
          <text class="ml-1 color-#8C6941 text-2.5">
            「喜茶钱包」全新升级为「喜钱袋」，充值享赠礼
          </text>
        </view>
        <image src="@/assets/icons/closeBrown.svg" class="h-5 w-5" />
      </view>

      <view class="flex justify-between items-center mt-5 color-white">
        <view>
          <view>喜钱袋余额（元）</view>
          <view class="flex items-baseline">
            <view class="text-6 font-600">0.00</view>
            <image src="@/assets/icons/arrowRightWhite.svg" class="w-4 h-4 translate-y-0.5 ml-1" />
          </view>
        </view>
        <view class="ml-6.5 flex">
          <view class="text-center">
            <image src="@/assets/icons/qrcode.svg" class="h-6" mode="heightFix" />
            <view>付款码</view>
          </view>
          <view class="ml-6.5 text-center">
            <image src="@/assets/icons/setting.svg" class="h-6" mode="heightFix" />
            <view>设置</view>
          </view>
        </view>
      </view>
    </view>

    <view class="bg-white mt--1 p-5 rounded-t-1">
      <view
        class="bg-[linear-gradient(180deg,#F1EFE3_0%,#F5F5F5_100%)] flex justify-between items-center px-4"
      >
        <view class="font-600">
          <view class="text-3.5 line-height-5.5">
            限时充值有
            <text class="color-#F9AB1A">（喜）</text>
          </view>
          <view class="color-#F9AB1A text-2.5 mt-1px line-height-4">赠喜茶饮品券</view>
          <view class="text-1.5 mt-1px line-height-3">*领取后30天有效</view>
        </view>
        <view class="flex">
          <image src="@/assets/icons/happyMoneyBagXi.svg" class="h-21" mode="heightFix" />
          <view class="color-#F9AB1A text-2.5 mt-12 ml-2">LIVE JOY</view>
        </view>
      </view>

      <view class="mt-8 text-3.5 font-600">选择充值金额</view>
      <view class="grid grid-cols-2 gap-4">
        <view
          v-for="(item, index) in priceList"
          :key="index"
          class="text-center h-26 rounded-2 border border-solid mt-4 flex justify-center items-center flex-col"
          :class="[priceIndex === index ? 'border-#BCAA86 bg-#FDF8F2' : 'border-#E7E7E7 bg-white']"
          @click="changePriceIndex(index)"
        >
          <view class="text-5 font-600">{{ item.num }}</view>

          <view v-if="item.desc" class="mt-1 color-#BA9952">{{ item.desc }}</view>
        </view>
      </view>

      <view class="text-3.5 font-600 mt-8">充值须知</view>
      <view class="mt-2 line-height-5">
        <view>
          1、喜钱袋仅供会员在中国大陆地区喜茶门店，用于现制茶饮订单支付；不可在喜茶百货使用，不可用于兑换或购买喜卡、喜茶券包等。喜钱袋余额不可提取或兑换现金，不计利息，不可转赠、转售，不支持挂失。
        </view>
        <view>
          2、喜钱袋充值时不累积灵感值或积分，使用喜钱袋余额支付时，根据实付金额累积灵感值和积分。
        </view>
        <view>
          3、喜钱袋余额不包括已经激活的喜卡，如需查看喜卡余额可前往「喜贵宾」-「喜卡」进行查看。
        </view>
        <view>
          4、喜钱袋支持充值次数不限，账户内最高余额限制为1000元。5、如需退款，请联系喜茶客服。申请退款时，依据"喜钱袋退款金额＝喜钱袋充值金额﹣已使用金额﹣赠送喜茶券已抵扣金额"的规则进行计算。
        </view>
        <view>6、可在「喜贵宾」-「发票助手」-「喜钱袋充值开票」栏申请开具预付卡发票。</view>
        <view>
          7、充值即视为阅读并同意
          <text class="color-#BA9952">《喜茶单用途商业预付卡章程》</text>
          和
          <text class="color-#BA9952">《喜钱袋使用说明》</text>
        </view>
        <view>＊温馨提醒，请您根据消费需求合理安排充值。</view>
      </view>

      <view class="mt-6 text-3.5 font-600">活动说明</view>
      <view class="mt-2 line-height-5">
        <view>
          1.
          钱袋充值仅通过官方运营的微信【喜茶GO小程序】售卖，且仅可在微信【喜茶GO小程序】使用。请勿通过第三方或个人渠道购买，谨防上当受骗。
        </view>
        <view>2．充值赠送的喜茶券领取后30天有效，过期后不支持补发，请尽快使用。</view>
        <view>3．喜茶赠饮券支持抵扣15-19元的喜茶饮品及套餐。</view>
        <view>4．喜茶券每个订单限用1张，可叠加余额、喜卡使用。</view>
      </view>

      <view class="bg-#1A1A1A h-12 color-white flex items-center justify-center mt-4">
        立即充值 ¥100
      </view>
    </view>

    <view class="h-5"></view>
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
    navigationBarTitleText: '喜钱袋',
  },
}
</route>
