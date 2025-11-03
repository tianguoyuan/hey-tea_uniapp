<script lang="ts" setup>
import { useUniAppSystemRectInfo } from '@tuniao/tnui-vue3-uniapp/hooks'
import Navbar from '@/components/Navbar.vue'
import { useTabbarStore } from '@/store/tabbar'
import { getImage } from '@/utils/imageManager'
import PLATFORM from '@/utils/platform'
import TnTabs from '@tuniao/tnui-vue3-uniapp/components/tabs/src/tabs.vue'

const urlParams = ref({ id: '' })
onLoad((query) => {
  urlParams.value.id = query.id
})
const tabbarStore = useTabbarStore()
const systemInfo = useUniAppSystemRectInfo()
const { navBarInfo } = systemInfo

console.log('systemInfo', systemInfo)

function clickBackIcon() {
  uni.navigateBack()
}
function clickHomeIcon() {
  tabbarStore.changeTabbarIndex(0)
  uni.switchTab({ url: '/pages/index/index' })
}

const bannerList = ref([
  getImage('orderDetailBanner1'),
  getImage('orderDetailBanner2'),
  getImage('orderDetailBanner3'),
  getImage('orderDetailBanner4'),
])

const productTagList = ref([
  { text: '无奶精 轻负担', active: false },
  { text: '冷热皆宜', active: true },
  { text: '含乳制品、茶', active: false },
])

const descList = ref([
  { title: '杯型', content: ['冷/热500ml'] },
  { title: '原料', content: ['绿妍茶汤、首创芝芝'] },
  { title: '喝法', content: ['“45°倾斜，大口喝”。'] },
  {
    title: '致敏源提示',
    content: [
      '本产品中含乳制品；加工制作过程中，亦可能带入其他致敏源成分，请过敏体质者根据自身情况酌情选择。',
    ],
  },
  {
    title: '贴士',
    content: [
      '*茶底如选择轻乳茶，轻乳茶选用优选真牛乳，口感清新顺滑。',
      '*热饮温度高，推荐使用纸吸管，纸吸管体验更佳。拿到后请小心饮用，吸入时请注意烫口哦。',
      '*芝士使用动物性奶油及牛奶打制，不添加奶盖粉、植执奶油。',
      '*芝士分装无法选择烤黑糖。',
      '*画面仅为创作效果，实物请以门店出品为准。',
    ],
  },
])

const tabsList = ref([
  {
    title: '喜茶推荐',
    active: true,
  },
  {
    title: '我的口味',
    active: false,
  },
])
function handleTabClick(index: number) {
  tabsList.value.forEach((item, i) => {
    item.active = i === index
  })
}
</script>

<template>
  <view class="">
    <view class="bg-#060606/90 pb-15">
      <!-- <view :style="{ height: navBarInfo.height + 'px' }">
        <view :class="[`pt-${navBarInfo.statusHeight}`]" />
      </view> -->
      <Navbar
        bg-color="transparent"
        :placeholder="false"
        :bottom-shadow="false"
        show-back-icon
        show-home-icon
        :fixed="false"
        @click-back-icon="clickBackIcon"
        @click-home-icon="clickHomeIcon"
      />
      <view :class="[PLATFORM.isH5 ? 'pt-12' : 'pt-3.75']">
        <view class="h-16 flex flex-nowrap overflow-auto">
          <image
            v-for="(item, index) in bannerList"
            :key="index"
            :src="item"
            :class="index === 0 ? 'w-36' : 'w-16'"
            class="ml-5 flex-shrink-0 last:mr-5"
            mode="widthFix"
          />
        </view>
      </view>
    </view>

    <view class="mt--10 bg-#fff mx-5">
      <image :src="getImage('orderDetailCover1')" class="w-full" mode="widthFix" />
    </view>

    <view class="mt-4 mx-5">
      <view class="text-5 font-600">小奶茉(超大杯)</view>

      <view class="flex mt-1">
        <view
          v-for="(item, index) in productTagList"
          :key="index"
          class="text-2.5 px-1 line-height-4 mr-2 b-1 b-solid"
          :class="[item.active ? 'color-#CB9964 b-#CB9964' : 'color-#999 b-#999 ']"
        >
          {{ item.text }}
        </view>
      </view>

      <view
        class="mt-5 p-x-2 py-2.5 bg-[linear-gradient(270deg,#FEEFD6_0%,#FFF8EE_100%)] text-3 flex justify-between"
      >
        <view class="flex items-center">
          <image :src="getImage('orderDetailDoc')" class="w-6 h-6" />
          <view class="ml-1 color-#CB9964">配方/热量揭秘</view>
          <view class="px-1 color-#CB9964">|</view>
          <view>关于这一杯你想知道的</view>
        </view>

        <view
          class="flex items-center px-2 line-height-5 text-2.5 bg-#CB9964 rounded-full color-#fff"
        >
          <view>查看</view>
          <image :src="getImage('arrowRightWhite')" class="w-2 h-2" />
        </view>
      </view>

      <view class="mt-5 text-3.5">
        喜茶明星轻乳小奶茉升级超大杯，升大杯依然「轻」～定制经典无香精绿妍茶汤，超3000朵茉莉鲜花多次管制，提升萃取时长，萃出鲜醇白茉香。融合3.8源牧甄奶，100生牛乳，无香精，轻负担。
      </view>

      <view v-for="(item, index) in descList" :key="index" class="mt-4 text-3">
        <view class="color-#BDBDBD">{{ item.title }}</view>
        <view v-for="(cItem, cIndex) in item.content" :key="cIndex" class="color-#666 mt-1">
          {{ cItem }}
        </view>
      </view>
    </view>
    <view class="mt-6 flex b-0 b-b-1 b-#a7a7a7 b-solid">
      <view
        v-for="(item, index) in tabsList"
        :key="index"
        class="text-5 b-0 b-b-1 b-solid mr-10 first:ml-5"
        :class="[item.active ? 'color-#1a1a1a b-#1a1a1a' : 'color-#999 b-#999']"
        @click="handleTabClick(index)"
      >
        {{ item.title }}
      </view>
    </view>

    <view class="mx-5 mt-2">
      <view class="text-3">喜茶为你推荐最适合此款饮品的口味</view>
    </view>
    <view class="h-10"></view>
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
