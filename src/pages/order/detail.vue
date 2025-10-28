<script lang="ts" setup>
//

const urlParams = ref({ id: '' })
onLoad((query) => {
  urlParams.value.id = query.id
})
</script>

<template>
  <view class="">
    <view>{{ urlParams.id }}</view>
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
    navigationBarTitleText: '',
  },
}
</route>
