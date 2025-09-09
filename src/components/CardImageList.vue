<script lang="ts" setup>
const props = defineProps<{
  title?: string
  list: {
    imagePath: string
    title?: string
    price?: string
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
    <view v-if="props.title" class="mt-8 line-height-5.5 font-600 text-3.5">{{ props.title }}</view>
    <view class="grid grid-cols-2 gap-3 mt-2">
      <view v-for="(item, index) in props.list" :key="index">
        <image
          :src="item.imagePath"
          class="w-full"
          mode="widthFix"
          @click="emits('handleClick', item)"
        />
        <view v-if="item.title" class="bg-white p-1 pb-0 font-600">
          {{ item.title }}
        </view>
        <view
          v-if="item.price"
          class="flex bg-white px-1 justify-between font-600 pb-2 items-center"
        >
          <view class="flex items-baseline font-600">
            <text>¥</text>
            <text class="text-3.5">{{ item.price }}</text>
          </view>

          <image src="@/assets/icons/addIcon.svg" class="w-3.5" mode="widthFix" />
        </view>
      </view>
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
