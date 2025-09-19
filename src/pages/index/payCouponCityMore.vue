<script lang="ts" setup>
import { getImage } from '@/utils/imageManager'
const bannerList = ref([
  { imagePath: getImage('payCouponCityMoreBanner1') },
  { imagePath: getImage('payCouponCityMoreBanner2') },
  { imagePath: getImage('payCouponCityMoreBanner3') },
  { imagePath: getImage('payCouponCityMoreBanner4') },
])
const bannerIndex = ref(1)
const currentImg = computed(() => bannerList.value[bannerIndex.value]?.imagePath)
function changeBannerIndex(i: number) {
  bannerIndex.value = i
}

const priceList = ref([{ num: 30 }, { num: 66 }, { num: 100 }, { num: 500 }])
const priceListIndex = ref(0)
function changePriceListIndex(i: number) {
  priceListIndex.value = i
}
</script>

<template>
  <view class="">
    <view class="bg-#F4F4F4 pb-8">
      <view class="pt-3 text-6 ml-5 font-600">城市系列</view>

      <view class="m-5">
        <image class="w-full h-50" :src="currentImg" />
      </view>

      <view class="flex flex-nowrap overflow-auto pl-5">
        <view
          v-for="(item, index) in bannerList"
          :key="index"
          class="mr-3 rounded-2.5 flex border-2 border-solid p-0.5"
          :class="[bannerIndex === index ? ' border-amber' : 'border-transparent']"
        >
          <image
            :src="item.imagePath"
            class="w-25 flex-shrink-0 translate-y-1px"
            mode="widthFix"
            @click="changeBannerIndex(index)"
          />
        </view>
      </view>
    </view>

    <view class="pt-6 bg-white">
      <view class="pl-5">选择面额：</view>
      <view class="mt-3 flex flex-nowrap overflow-auto pl-5">
        <view
          v-for="(item, index) in priceList"
          :key="index"
          class="mr-3 border border-solid border-#1a1a1a rounded-2 w-25 flex items-center justify-center h-15 flex-shrink-0"
          :class="[priceListIndex === index ? 'border-#1a1a1a' : 'border-#999']"
          @click="changePriceListIndex(index)"
        >
          <view class="flex items-baseline">
            <view class="text-2.5">¥</view>
            <view class="text-4 font-600 ml-0.5">{{ item.num }}</view>
          </view>
        </view>
      </view>

      <view class="mx-5">
        <view class="mt-8">购买须知</view>
        <view class="mt-3 color-#999">
          1.成功购买喜卡电子卡后，可在【喜贵宾】一【发票助手】一【喜卡开票】申请预付卡发票
        </view>
        <view class="mt-1 color-#999">
          2.喜卡（喜茶礼品卡） 使用需激活，使用有效期为激活之日起三年
        </view>
        <view class="mt-1 color-#999">
          3.仅支持未转赠的喜卡申请退款，转赠被接收后，赠送方与被赠送方均无法申请退款。喜卡退款，卡内余额将按购卡实付的优惠比率折算后退回至原支付账户。
        </view>
        <view class="mt-1 color-#999">
          4.购买喜卡时不累计成长值和积分，当订单结算由喜卡支付时，会根据喜卡实付金额累计相应的成长值和积分。
        </view>
        <view class="mt-1 color-#999">
          5."喜卡电子卡"仅通过官方运营的"喜茶GO"小程序／app进行售卖。请勿购买任何第三方优惠或折扣，避免上当受骗
        </view>

        <view class="mt-1 color-#999">
          6.购买即视为阅读并同意
          <view class="color-#DCA771">《喜茶单用途商业预付卡章程》</view>
          及
          <view class="color-#DCA771">《使用须知》</view>
        </view>

        <view class="mt-5 bg-#1a1a1a color-white py-3 text-center">确认支付 ¥30</view>
      </view>

      <view class="h-10"></view>
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
    navigationStyle: 'default',
    navigationBarTitleText: '城市系列',
  },
}
</route>
