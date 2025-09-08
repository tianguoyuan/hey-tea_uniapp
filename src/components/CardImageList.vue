<script lang="ts" setup>
const props = defineProps<{
  title: string
  list: {
    imagePath: string
  }[]
  showMore?: boolean
}>()

const emits = defineEmits<{
  handleClick: [v: any]
  handleMoreClick: []
}>()
</script>

<template>
  <view class="">
    <view class="mt-8 line-height-5.5 font-600 text-3.5">{{ props.title }}</view>
    <view class="grid grid-cols-2 gap-3 mt-2">
      <image
        v-for="(item, index) in props.list"
        :key="index"
        :src="item.imagePath"
        class="w-full"
        mode="widthFix"
        @click="emits('handleClick', item)"
      />
    </view>

    <view
      v-if="showMore"
      class="flex justify-center items-center mt-3 hasClickBox"
      @click="emits('handleMoreClick')"
    >
      <view class="color-#999999">展开全部</view>
      <image src="@/assets/icons/arrowRight.svg" class="rotate-90 w-4 h-4" />
    </view>
  </view>
</template>

<style lang="scss" scoped>
//
</style>
