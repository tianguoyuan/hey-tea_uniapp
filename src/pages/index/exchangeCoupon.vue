<script lang="ts" setup>
import { TnCheckbox, TnIcon, TnInput, TnRadio } from '@tuniao/tnui-vue3-uniapp'

const form = ref({
  username: '',
  code: '',
  sex: '',
})
</script>

<template>
  <view class="">
    <view class="bg-#F5F6F8">
      <image src="@/assets/icons/indexExchangeCouponCard.svg" class="w-full" mode="widthFix" />
    </view>

    <view class="p-5">
      <TnInput
        v-model="form.username"
        placeholder="请输入用户名"
        class="bg-#F2F2F2 h-12 text-3.5 placeholder-text-3.5 pl-3"
      >
        <template #suffix>
          <image src="@/assets/icons/camera.svg" class="w-5" />
        </template>
      </TnInput>

      <TnInput
        v-model="form.code"
        placeholder="请输入激活码"
        class="bg-#F2F2F2 h-12 text-3.5 placeholder-text-3.5 mt-5 pl-3"
      ></TnInput>

      <view class="bg-#999999 color-white text-4 py-3 mt-5 text-center">兑换</view>

      <view class="flex justify-center mt-4 text-3 items-center">
        <TnCheckbox v-model="form.sex" checked-shape="circle" label="男">
          <text class="text-3">同意</text>
        </TnCheckbox>
        <view class="color-#DCA771">《喜茶单用途商业预付卡章程》</view>
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
    navigationStyle: 'default',
    navigationBarTitleText: '兑换喜卡',
  },
}
</route>
