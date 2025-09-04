<script lang="ts" setup>
import { useTabbarStore } from '@/store/tabbar'

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
    class="h-screen bg-black/48 absolute top-0 left-0 right-0 bottom-0 z-20091"
  >
    <view class="flex flex-col h-full justify-center items-center">
      <image class="w-73" src="@/assets/icons/indexSplashScreen.svg" mode="widthFix" />

      <image
        class="w-8 mt-3"
        mode="widthFix"
        src="@/assets/icons/close.svg"
        @click="emit('update:visible', false)"
      />
    </view>
  </view>
</template>
