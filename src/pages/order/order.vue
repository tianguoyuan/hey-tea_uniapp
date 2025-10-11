<script lang="ts" setup>
import Tabbar from '@/components/Tabbar.vue'
import PLATFORM from '@/utils/platform'
import Navbar from '@/components/Navbar.vue'
import { getImage } from '@/utils/imageManager'
import { debounce, throttle } from 'throttle-debounce'
import { useAppStore } from '@/store/app'
import { useUniAppSystemRectInfo } from '@tuniao/tnui-vue3-uniapp/hooks/use-uniapp-system-rect-info'
import { calcSize } from '@/utils'

const { navBarInfo, navBarBoundingInfo } = useUniAppSystemRectInfo()

console.log('navBarInfo', navBarInfo)
console.log('navBarBoundingInfo', navBarBoundingInfo)

const appStore = useAppStore()

const list = [
  { imagePath: getImage('orderBanner1') },
  { imagePath: getImage('orderBanner2') },
  { imagePath: getImage('orderBanner3') },
]
const tabIndex = ref(0)

const apShow = ref(true)
const checkedListShow = ref(false)

const navbarOpacity = ref('rgba(255,255,255,0)')
const throttleChangeColor = throttle(50, (scrollTop) => {
  navbarOpacity.value = `rgba(255,255,255,${scrollTop / 300})`
})

onPageScroll(({ scrollTop }) => {
  throttleChangeColor(scrollTop)
})

const orderTagIndex = ref(0)
const orderTagList = ref([
  {
    title: '🍑时令上新',
    id: 'shiLing',
  },
  {
    title: '☁️轻负担推荐',
    id: 'qingFu',
  },
  {
    title: '🍇清爽真果茶',
    id: 'qingShuang',
  },
])
const productList = [
  {
    title: '多肉杨梅',
    desc: '优选时令杨梅鲜果+经典无香精绿妍茶底， 真果肉，无小料。轻负担',
    num: '19',
    imagePath: getImage('orderProduct1'),
    tags: [
      {
        name: '回归',
        bgColor: '#D2A667',
        color: '#fff',
      },
      {
        name: '含茶',
        bgColor: '#fff',
        color: '#999999',
      },
    ],
  },
  {
    title: '多肉桃李(首创)',
    desc: '优选时令杨梅鲜果+经典无香精绿妍茶底， 真果肉，无小料。轻负担',
    num: '15',
    imagePath: getImage('orderProduct2'),
    tags: [
      {
        name: '含茶',
        bgColor: '#fff',
        color: '#999999',
      },
    ],
  },
  {
    title: '小奶茉(超大杯)',
    desc: '优选时令杨梅鲜果+经典无香精绿妍茶底， 真果肉，无小料。轻负担',
    num: '15',
    imagePath: getImage('orderProduct3'),
    tags: [
      {
        name: '含茶',
        bgColor: '#fff',
        color: '#999999',
      },
    ],
  },
]
const orderProductList = ref([
  {
    title: '🍑时令上新',
    id: 'shiLing',
    list: [...productList],
  },
  {
    title: '☁️轻负担推荐',
    id: 'qingFu',
    list: [...productList, ...productList],
  },
  {
    title: '🍇清爽真果茶',
    id: 'qingShuang',
    list: [...productList, ...productList, ...productList],
  },
])

const scrollIntoView = ref('')
function handleTagList(item, index: number) {
  orderTagIndex.value = index
  scrollIntoView.value = item.id
}

const throttleChangeTagIndex = throttle(300, (e) => {
  const currentTop = e.detail.scrollTop
  uni
    .createSelectorQuery()
    .selectAll('.listItemProduct')
    .boundingClientRect((rect) => {
      if (!Array.isArray(rect)) return
      const filterItem = rect.filter((value) => value.top < currentTop)
      const maxItem = Math.max(...filterItem.map((v) => v.top))
      const currentIndex = filterItem.findIndex((v) => v.top === maxItem)
      orderTagIndex.value = currentIndex === -1 ? 0 : currentIndex
    })
    .exec()
})
function productScroll(e) {
  throttleChangeTagIndex(e)
}

// banner居中
const bannerScrollLeft = ref(calcSize(90))
uni.onWindowResize(() => {
  bannerScrollLeft.value = calcSize(90)
})
</script>

<template>
  <view class="">
    <Navbar :title="'点单'" :bg-color="navbarOpacity" :placeholder="false" />
    <view class="relative">
      <image :src="getImage('orderTopCover')" class="w-full" mode="widthFix" />

      <view
        class="absolute left-0 right-0"
        :style="{
          top: navBarInfo.height + 'px',
        }"
      >
        <view
          class="flex justify-between ml-3.5"
          :style="{
            marginRight: PLATFORM.isMp
              ? navBarBoundingInfo.right - navBarBoundingInfo.left + 'px'
              : '14px',
          }"
        >
          <view class="flex items-center text-4 line-height-7">
            <view
              :class="tabIndex === 0 ? 'color-#fff text-5 font-600' : 'color-#fff/55'"
              @click="tabIndex = 0"
            >
              到店取
            </view>
            <view class="w-1px bg-#C8C7C3 h-4 mx-3"></view>
            <view
              :class="tabIndex === 1 ? 'color-#fff text-5 font-600' : 'color-#fff/55'"
              @click="tabIndex = 1"
            >
              喜外送
            </view>
          </view>
          <image :src="getImage('searchCircle')" class="h-8 w-8" />
        </view>

        <view class="flex items-center mt-2.5 ml-3.5">
          <image :src="getImage('star')" class="w-3.5 h-3.5" />
          <view class="ml-1.5 text-4 color-#fff">深圳讯美科技店</view>
          <image :src="getImage('arrowRightWhite')" class="w-4 h-4" />
        </view>

        <view class="mt-0.5 flex items-center ml-3.5">
          <image :src="getImage('address')" class="h-3.5" mode="heightFix" />
          <view class="color-white ml-1">距离您959m</view>
        </view>

        <view class="mt-4 relative ml-3.5">
          <view class="flex items-center">
            <view
              class="text-2.5 px-1 line-height-4 bg-[linear-gradient(270deg,#E6D097_0%,#F4E4C2_100%)]"
            >
              贵宾活动
            </view>
            <view class="ml-2 color-white">加入「阿喜熟客群」，领18元新人礼！</view>
            <image :src="getImage('arrowRightWhite')" class="w-4 h-4" />
          </view>
          <image
            :src="getImage('orderYiqihe')"
            class="w-12 absolute right-4.5 bottom-0"
            mode="widthFix"
          />
        </view>

        <scroll-view scroll-x class="mt-3 mb-4" :scroll-left="bannerScrollLeft">
          <view class="flex flex-nowrap items-center pl-3">
            <view v-for="(item, i) in list" :key="i" class="w-[50%] shrink-0 snap-center pr-3">
              <image :src="item.imagePath" class="w-full" mode="widthFix" />
            </view>
          </view>
        </scroll-view>

        <!-- 商品列表 -->
        <view
          id="productList"
          class="overflow-hidden flex pb-12"
          :style="{
            height: `calc(${appStore.systemScreenHeight}px - ${navBarInfo.statusHeight}px - 90rpx - 100rpx - env(safe-area-inset-bottom))`,
          }"
        >
          <view class="w-19 flex-shrink-0">
            <scroll-view scroll-y>
              <view
                v-for="(item, index) in orderTagList"
                :key="index"
                class="h-18 px-2 flex justify-center items-center color-#000"
                :class="orderTagIndex === index ? 'opacity-100' : 'opacity-40'"
                @click="handleTagList(item, index)"
              >
                {{ item.title }}
              </view>
            </scroll-view>
          </view>
          <view class="flex-1 border-0 border-l border-#000/20 border-solid">
            <scroll-view
              class="h-100%"
              scroll-y
              :scroll-into-view="scrollIntoView"
              scroll-with-animation
              @scroll="productScroll"
            >
              <view
                v-for="(product, productIndex) in orderProductList"
                :key="productIndex"
                class="pb-4"
              >
                <view :id="product.id" class="pl-3 font-600 text-3.5 listItemProduct">
                  {{ product.title }}
                </view>
                <view
                  v-for="(item, index) in product.list"
                  :key="index"
                  class="flex px-3 pt-3 items-center"
                >
                  <image :src="item.imagePath" class="w-20.5 h-20.5 flex-shrink-0" />
                  <view class="ml-2">
                    <view class="text-3.5 line-height-5.5 font-600">{{ item.title }}</view>

                    <view class="flex mt-1">
                      <view v-for="(tag, tagIndex) in item.tags" :key="tagIndex">
                        <view
                          class="text-2 h-3.5 px-1 mr-1 box-border flex items-center"
                          :style="{
                            'background-color': tag.bgColor,
                            color: tag.color,
                            border: tag.bgColor === '#fff' ? '1px solid #999' : '',
                          }"
                        >
                          {{ tag.name }}
                        </view>
                      </view>
                    </view>

                    <view class="text-2.5 line-height-4 mt-1 line-clamp-2">{{ item.desc }}</view>

                    <view class="flex justify-between">
                      <view class="font-600">
                        <text class="text-2.5">¥</text>
                        {{ item.num }}
                      </view>
                      <view class="px-2 h-5 bg-#1A1A1A color-#fff flex justify-center items-center">
                        选规格
                      </view>
                    </view>
                  </view>
                </view>
              </view>
            </scroll-view>
          </view>
        </view>
        <!-- 占位tabbar -->
        <view class="h-12.5 pb-safe box-content"></view>
      </view>
    </view>

    <!-- 去支付控制栏 -->
    <view class="fixed left-0 right-0 pb-safe z-9 bottom-12.5 box-content">
      <!-- 产品 -->
      <Transition name="fade">
        <view
          v-if="checkedListShow"
          class="bg-#f8f8f8 pb-3 border-solid border-0 border-t border-t-0.5 rounded-t-2 border-#e8e8e8"
        >
          <view class="p-3 flex justify-between items-center">
            <view class="flex items-center">
              <view class="mr-1">预计可得积分</view>
              <view class="mr-1 color-#C69B66">7</view>
              <image :src="getImage('goldBrow')" class="w-3 h-3 mr-1" />
              <view class="mr-1">成长值</view>
              <view class="mr-1 color-#C69B66">15</view>
              <image :src="getImage('starBrown')" class="w-3 h-3" />
            </view>
            <image :src="getImage('arrowTopBlack')" class="w-4 h-4" />
          </view>
          <view class="mx-3 mt-2 bg-#fff">
            <view class="flex justify-between p-3">
              <view>深圳讯美科技店</view>
              <image :src="getImage('rubbish')" class="w-4 h-4" />
            </view>
            <view class="h-1px bg-#E7E7E7" />
            <view class="p-3 flex">
              <view class="flex items-center">
                <image :src="getImage('checkedRadio')" class="w-5 h-5" />
                <image :src="getImage('orderProduct1')" class="w-15 h-15 ml-3" />
              </view>
              <view class="ml-2.5">
                <view class="text-3.5 line-height-5.5 font-600">小奶茉(超大杯)</view>
                <view class="mt-1 flex justify-between items-center bg-#f9f9f9">
                  <view class="color-#A0A0A0 text-2.5 line-height-5">
                    推荐(少冰)，推荐甜度(少甜)，专用「品茗管」
                  </view>
                  <image :src="getImage('arrowRight')" class="rotate-z-90 w-4 h-4" />
                </view>
                <view class="mt-1 flex justify-between items-center">
                  <view class="font-600">¥15</view>
                  <view class="flex items-center">
                    <image :src="getImage('reduceRadio')" class="w-5 h-5" />
                    <view class="w-6.5 text-3.5 line-height-5.5 font-600 text-center">1</view>
                    <image :src="getImage('addRadio')" class="w-5 h-5" />
                  </view>
                </view>
              </view>
            </view>
          </view>
        </view>
      </Transition>

      <!-- 结算 -->
      <view class="items-center justify-between flex bg-#f2f2f2">
        <view class="pl-3 flex items-center">
          <view class="relative hasClickBox" @click="checkedListShow = !checkedListShow">
            <image :src="getImage('orderShopping')" class="w-8" mode="widthFix" />
            <view
              class="absolute right--1 top-0 w-4 h-4 bg-#CB9964 color-#fff rounded-full text-2.5 flex justify-center items-center"
            >
              1
            </view>
          </view>
          <view class="ml-4 font-600">
            <text class="text-2.5">¥</text>
            <text class="text-3.5">15</text>
          </view>
        </view>
        <view class="h-10.5 px-7 bg-#000 color-#fff flex items-center justify-center hasClickBox">
          结算
        </view>
      </view>
    </view>
    <!-- 广告 -->
    <view
      v-if="apShow"
      class="fixed left-0 right-0 h-12 bg-[linear-gradient(270deg,#FFF0DB_0%,#FCDDAE_100%)] pb-safe items-center justify-center flex z-10 bottom-12.5 box-content"
    >
      <view class="text-3.5">
        限时领
        <text class="color-#EC5E1C">2元</text>
        新人礼，下单更优惠
      </view>
      <view class="ml-12 color-#fff bg-#EA603B rounded-full line-height-6 px-2.5">去领取</view>

      <image
        :src="getImage('orderClose')"
        class="absolute right-0 top-0 w-5"
        mode="widthFix"
        @click="apShow = false"
      />
    </view>
    <Tabbar tabbar-path="/pages/order/order" />
  </view>
</template>

<style lang="scss" scoped>
//
</style>

<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '',
    navigationStyle: 'custom',
  },
}
</route>
