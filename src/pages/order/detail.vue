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

const foodTypeList = ref([
  {
    title: '原创 0糖0卡糖',
    content: [{ title: '真0卡糖¥1', active: false }],
  },

  {
    title: '状态',
    content: [
      { title: '推荐(少冰)', active: true },
      { title: '少少冰', active: false },
      { title: '去冰(不推荐)', active: false },
      { title: '多冰', active: false },
      { title: '比较烫', active: false },
      { title: '温', active: false },
    ],
  },
  {
    title: '甜度',
    content: [
      { title: '推荐甜度(少甜)', active: true },
      { title: '少少甜', active: false },
      { title: '少少少甜', active: false },
      { title: '不另外加糖(不推荐)', active: false },
      { title: '多甜', active: false },
    ],
  },
  {
    title: '♻️绿色喜茶',
    content: [
      { title: '专用「品茗管」', active: true },
      { title: '不使用吸管', active: false },
    ],
  },
])

const userMessageList = ref([
  {
    avatar: getImage('userAvatarDefault'),
    username: '小海鸥',
    vip: '见习贵宾',
    star: 5,
    likeNum: 26,
    content: [
      '小奶茉可以升级超级大杯啦！',
      ' 口感还是一如既往的赞，入口细腻清爽，回甘夹杂茉莉清香，非常棒，以后就点超大杯的了😋😋',
    ],
    imageList: [
      getImage('orderDetailBanner2'),
      getImage('orderDetailBanner3'),
      getImage('orderDetailBanner4'),
      getImage('orderDetailBanner2'),
      getImage('orderDetailBanner3'),
    ],
  },
])
</script>

<template>
  <view class="">
    <view class="bg-#060606/90 pb-15">
      <Navbar
        bg-color="transparent"
        :bottom-shadow="false"
        show-back-icon
        show-home-icon
        @click-back-icon="clickBackIcon"
        @click-home-icon="clickHomeIcon"
      />
      <view class="pt-3">
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
    <!-- 食物规格类型 -->
    <view class="mx-5">
      <view
        v-for="(item, index) in foodTypeList"
        :key="index"
        :class="[index === 0 ? 'mt-5' : 'mt-2']"
      >
        <view class="color-#999 text-3 line-height-5 mb-1">{{ item.title }}</view>
        <view class="flex flex-wrap">
          <view
            v-for="(cItem, cIndex) in item.content"
            :key="cIndex"
            class="text-3 line-height-5 py-1.5 px-6 mr-3 flex-shrink-0 mb-3"
            :class="[cItem.active ? 'bg-#1A1A1A color-#fff' : 'bg-#e7e7e7 color-#1A1A1A']"
          >
            {{ cItem.title }}
          </view>
        </view>
      </view>
    </view>

    <!-- 精选评价 -->
    <view class="mx-5 mt-5">
      <view class="flex justify-between items-center">
        <view class="text-4">精选评价</view>
        <image :src="getImage('circleEdit')" class="w-7.5 h-7.5" />
      </view>

      <view v-for="(item, index) in userMessageList" :key="index">
        <view class="flex justify-between items-center mt-3">
          <view class="flex items-center">
            <image :src="getImage('userAvatarDefault')" class="w-8 h-8" />
            <view class="ml-2 text-3">
              <view class="flex items-center">
                <view>{{ item.username }}</view>
                <view class="ml-3 bg-#E44E45 color-#fff px-1 rounded-1 text-2.5">
                  {{ item.vip }}
                </view>
              </view>
              <view>
                <image
                  v-for="star in item.star"
                  :key="star"
                  :src="getImage('starBrownFill')"
                  class="w-2.5 h-2.5 mr-1"
                />
              </view>
            </view>
          </view>
          <view class="flex items-center">
            <view class="flex items-center">
              <image :src="getImage('shareGray')" class="h-3" mode="heightFix" />
              <view class="color-#999 ml-1">分享</view>
            </view>
            <view class="ml-5 flex items-center">
              <image :src="getImage('likeGray')" class="h-3" mode="heightFix" />
              <view class="color-#999 ml-1">{{ item.likeNum }}</view>
            </view>
          </view>
        </view>

        <view class="mt-2 text-3.5">
          <view v-for="(cItem, cIndex) in item.content" :key="cIndex">{{ cItem }}</view>
        </view>
        <view class="mt-3 grid grid-cols-3 gap-3">
          <view v-for="(cItem, cIndex) in item.imageList" :key="cIndex">
            <image :src="cItem" class="w-full" mode="widthFix" />
          </view>
        </view>
      </view>
    </view>

    <!-- 他的口味 -->
    <view class="mx-5 mt-3 bg-#f2f2f2 py-2 px-3">
      <view class="flex justify-between items-center">
        <view>
          <view class="text-3 line-height-5">TA的口味</view>
          <view class="color-#999 text-2.5">210人品尝</view>
        </view>
        <view class="bg-#1a1a1a color-#fff text-3 line-height-5 px-4.5 py-1.25">点同款</view>
      </view>

      <view class="text-2.5 color-#999 mt-2">推荐(少冰),推荐甜度(少甜),专用「品茗管」</view>
    </view>

    <view class="mt-10 px-5 py-4 b-0 b-t b-solid b-#EDEDED">
      <view class="flex justify-between items-center">
        <view class="flex justify-between items-center">
          <image :src="getImage('heart')" class="h-4.5" mode="heightFix" />
          <view class="ml-1 text-3 color-#999">保存口味</view>
        </view>
        <view class="flex justify-between items-center">
          <image :src="getImage('reduceRadio')" class="w-5 h-5" />
          <view class="mx-2">1</view>
          <image :src="getImage('addRadio')" class="w-5 h-5" />
        </view>
      </view>

      <view class="mt-5 flex">
        <view class="flex-1 b-1 b-solid b-#999 flex justify-center items-center py-3">
          <view class="flex items-baseline">
            <view class="text-2">¥</view>
            <view class="text-4">15</view>
          </view>
          <view class="ml-0.5 text-3">原价购买</view>
        </view>
        <view
          class="py-3 flex-1 flex ml-2 justify-center items-center bg-[linear-gradient(90deg,#F6BE8D_1%,#F8CF97_100%)] color-#522200"
        >
          <view class="flex items-baseline">
            <view class="text-2">¥</view>
            <view class="text-4">13</view>
          </view>
          <view class="text-2 color-#522200/40 px-1 line-through">¥15</view>
          <image :src="getImage('goldCouponCardImg1')" class="w-4 h-4" />
          <view class="ml-0.5">金喜价</view>
        </view>
      </view>
    </view>

    <view class="pb-safe"></view>
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
