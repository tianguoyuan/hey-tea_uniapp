<script lang="ts" setup>
import { useTabbarStore } from '@/store/tabbar'
import { getImage } from '@/utils/imageManager'

const props = defineProps<{
  visible: boolean
}>()

const emit = defineEmits<{
  (e: 'update:visible', value: boolean): void
}>()

// const tabbarStore = useTabbarStore()
// watch(
//   () => props.visible,
//   (newVal) => {
//     if (newVal) {
//       tabbarStore.changeHideTabbar(true)
//     } else {
//       tabbarStore.changeHideTabbar(false)
//     }
//   },
//   {
//     immediate: true,
//   },
// )
</script>

<template>
  <view
    v-if="props.visible"
    class="h-screen bg-black/48 fixed top-0 left-0 right-0 bottom-0 z-20091"
  >
    <view class="flex flex-col h-full justify-center items-center">
      <image class="w-73 h-97" :src="getImage('indexSplashScreen')" />

      <image class="w-8 h-8 mt-3" :src="getImage('close')" @click="emit('update:visible', false)" />
    </view>
  </view>
</template>
