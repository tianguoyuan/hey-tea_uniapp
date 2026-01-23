<script lang="ts" setup>
import Navbar from '@/components/Navbar.vue'
import { PageEnum } from '@/enums/PageEnum'
import { StyleEnum } from '@/enums/StyleEnum'
import { useAppStore } from '@/store/app'
import { useUniAppSystemRectInfo } from '@tuniao/tnui-vue3-uniapp/hooks'

const { navBarInfo } = useUniAppSystemRectInfo()
const appStore = useAppStore()

console.log('navBarInfo', navBarInfo)

function clickHomeIcon() {
  uni.reLaunch({ url: PageEnum.HOME_PATH })
}
function clickBackIcon() {
  uni.navigateBack({
    fail: (err) => {
      console.log('err', err)
      clickHomeIcon()
    },
  })
}
</script>

<template>
  <view
    class="bg-#9f9f9f"
    :style="{
      'min-height': `${appStore.systemScreenHeight}px`,
    }"
  >
    <Navbar
      title="Demo"
      show-back-icon
      show-home-icon
      @click-back-icon="clickBackIcon"
      @click-home-icon="clickHomeIcon"
    />
    <view>demo - page</view>
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
    navigationBarTitleText: 'demo',
  },
}
</route>
