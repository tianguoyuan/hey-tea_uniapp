/**
 * 图片管理工具
 * 支持导入导出所有图片，并提供开关控制使用变量拼接还是直接引入图片
 */

// SVG 图标资源导入 - 从 static/icons 目录导入
import PLATFORM from './platform'

// #ifndef MP
import addIcon from '@/static/icons/addIcon.svg'
import address from '@/static/icons/address.svg'
import arrowRight from '@/static/icons/arrowRight.svg'
import arrowRightBrown from '@/static/icons/arrowRightBrown.svg'
import arrowRightWhite from '@/static/icons/arrowRightWhite.svg'
import camera from '@/static/icons/camera.svg'
import close from '@/static/icons/close.svg'
import closeBrown from '@/static/icons/closeBrown.svg'
import goldCoupon from '@/static/icons/goldCoupon.svg'
import goldCouponActive from '@/static/icons/goldCouponActive.svg'
import goldCouponCardImg1 from '@/static/icons/goldCouponCardImg1.svg'
import goldCouponCardImg2 from '@/static/icons/goldCouponCardImg2.svg'
import goldCouponHB1 from '@/static/icons/goldCouponHB1.svg'
import goldCouponHB2 from '@/static/icons/goldCouponHB2.svg'
import goldCouponHB3 from '@/static/icons/goldCouponHB3.svg'
import goldCouponProduct1 from '@/static/icons/goldCouponProduct1.svg'
import goldCouponProduct2 from '@/static/icons/goldCouponProduct2.svg'
import goldCouponProduct3 from '@/static/icons/goldCouponProduct3.svg'
import goldCouponProduct4 from '@/static/icons/goldCouponProduct4.svg'
import goldCouponProduct5 from '@/static/icons/goldCouponProduct5.svg'
import goldCouponProduct6 from '@/static/icons/goldCouponProduct6.svg'
import goldCouponProduct7 from '@/static/icons/goldCouponProduct7.svg'
import goldCouponProduct8 from '@/static/icons/goldCouponProduct8.svg'
import goldCouponProductNumBg from '@/static/icons/goldCouponProductNumBg.svg'
import goldCouponTitleBg from '@/static/icons/goldCouponTitleBg.svg'
import goldCouponTopBg1 from '@/static/icons/goldCouponTopBg1.svg'
import goldCouponTopBg2 from '@/static/icons/goldCouponTopBg2.svg'
import goldCouponTopBg3 from '@/static/icons/goldCouponTopBg3.svg'
import happyMoneyBagXi from '@/static/icons/happyMoneyBagXi.svg'
import home from '@/static/icons/home.svg'
import homeActive from '@/static/icons/homeActive.svg'
import hornBrown from '@/static/icons/hornBrown.svg'
import indexCouponCityMore from '@/static/icons/indexCouponCityMore.svg'
import indexCouponCSImage1 from '@/static/icons/indexCouponCSImage1.svg'
import indexCouponCSImage2 from '@/static/icons/indexCouponCSImage2.svg'
import indexCouponCSImage3 from '@/static/icons/indexCouponCSImage3.svg'
import indexCouponCSImage4 from '@/static/icons/indexCouponCSImage4.svg'
import indexCouponJXImage1 from '@/static/icons/indexCouponJXImage1.svg'
import indexCouponJXImage2 from '@/static/icons/indexCouponJXImage2.svg'
import indexCouponMyUnUsedCover from '@/static/icons/indexCouponMyUnUsedCover.svg'
import indexCouponPayCover from '@/static/icons/indexCouponPayCover.svg'
import indexCouponPJCover1 from '@/static/icons/indexCouponPJCover1.svg'
import indexCouponXYFSImage1 from '@/static/icons/indexCouponXYFSImage1.svg'
import indexCouponXYFSImage2 from '@/static/icons/indexCouponXYFSImage2.svg'
import indexCouponXYFSImage3 from '@/static/icons/indexCouponXYFSImage3.svg'
import indexCouponXYFSImage4 from '@/static/icons/indexCouponXYFSImage4.svg'
import indexCouponXYYSImage1 from '@/static/icons/indexCouponXYYSImage1.svg'
import indexCouponXYYSImage2 from '@/static/icons/indexCouponXYYSImage2.svg'
import indexExchangeCouponCard from '@/static/icons/indexExchangeCouponCard.svg'
import indexJSRightArrow from '@/static/icons/indexJSRightArrow.svg'
import indexQHCover1 from '@/static/icons/indexQHCover1.svg'
import indexSplashScreen from '@/static/icons/indexSplashScreen.svg'
import indexTopCover from '@/static/icons/indexTopCover.svg'
import indexWS1 from '@/static/icons/indexWS1.svg'
import indexWS2 from '@/static/icons/indexWS2.svg'
import indexWS3 from '@/static/icons/indexWS3.svg'
import indexWS4 from '@/static/icons/indexWS4.svg'
import indexXiWaiSong from '@/static/icons/indexXiWaiSong.svg'
import indexYQCover1 from '@/static/icons/indexYQCover1.svg'
import indexYQCover2 from '@/static/icons/indexYQCover2.svg'
import indexYQCover3 from '@/static/icons/indexYQCover3.svg'
import indexYQRightArrow from '@/static/icons/indexYQRightArrow.svg'
import market from '@/static/icons/market.svg'
import marketActive from '@/static/icons/marketActive.svg'
import marketRX1 from '@/static/icons/marketRX1.svg'
import marketSX1 from '@/static/icons/marketSX1.svg'
import marketSX2 from '@/static/icons/marketSX2.svg'
import marketTopCover from '@/static/icons/marketTopCover.svg'
import marketZB1 from '@/static/icons/marketZB1.svg'
import marketZB2 from '@/static/icons/marketZB2.svg'
import marketZB3 from '@/static/icons/marketZB3.svg'
import myOrderUserCover from '@/static/icons/myOrderUserCover.svg'
import order from '@/static/icons/order.svg'
import orderActive from '@/static/icons/orderActive.svg'
import orderBanner1 from '@/static/icons/orderBanner1.svg'
import orderBanner2 from '@/static/icons/orderBanner2.svg'
import orderBanner3 from '@/static/icons/orderBanner3.svg'
import orderClose from '@/static/icons/orderClose.svg'
import orderProduct1 from '@/static/icons/orderProduct1.svg'
import orderProduct2 from '@/static/icons/orderProduct2.svg'
import orderProduct3 from '@/static/icons/orderProduct3.svg'
import orderShopping from '@/static/icons/orderShopping.svg'
import orderTopCover from '@/static/icons/orderTopCover.svg'
import orderYiqihe from '@/static/icons/orderYiqihe.svg'
import payCouponCityMoreBanner1 from '@/static/icons/payCouponCityMoreBanner1.svg'
import payCouponCityMoreBanner2 from '@/static/icons/payCouponCityMoreBanner2.svg'
import payCouponCityMoreBanner3 from '@/static/icons/payCouponCityMoreBanner3.svg'
import payCouponCityMoreBanner4 from '@/static/icons/payCouponCityMoreBanner4.svg'
import pointsMallList1 from '@/static/icons/pointsMallList1.svg'
import pointsMallList2 from '@/static/icons/pointsMallList2.svg'
import pointsMallList3 from '@/static/icons/pointsMallList3.svg'
import pointsMallList4 from '@/static/icons/pointsMallList4.svg'
import pointsMallList5 from '@/static/icons/pointsMallList5.svg'
import pointsMallList6 from '@/static/icons/pointsMallList6.svg'
import pointsMallTopList1 from '@/static/icons/pointsMallTopList1.svg'
import pointsMallTopList2 from '@/static/icons/pointsMallTopList2.svg'
import pointsMallTopList3 from '@/static/icons/pointsMallTopList3.svg'
import print from '@/static/icons/print.svg'
import qrcode from '@/static/icons/qrcode.svg'
import search from '@/static/icons/search.svg'
import searchCircle from '@/static/icons/searchCircle.svg'
import setting from '@/static/icons/setting.svg'
import star from '@/static/icons/star.svg'
import user from '@/static/icons/user.svg'
import userActive from '@/static/icons/userActive.svg'
import userTopCover from '@/static/icons/userTopCover.svg'
import userVipService1 from '@/static/icons/userVipService1.svg'
import userVipService2 from '@/static/icons/userVipService2.svg'
import userVipService3 from '@/static/icons/userVipService3.svg'
import userVipService4 from '@/static/icons/userVipService4.svg'
import userVipService5 from '@/static/icons/userVipService5.svg'
import userVipService6 from '@/static/icons/userVipService6.svg'
import userVipService7 from '@/static/icons/userVipService7.svg'
import userVipService8 from '@/static/icons/userVipService8.svg'
import userYQ1 from '@/static/icons/userYQ1.svg'

/**
 * 图片资源映射表
 * 键名：图片名称（不包含扩展名）
 * 值：导入的图片资源
 */
// eslint-disable-next-line @typescript-eslint/no-redeclare
const imageMap = {
  // 通用图标
  addIcon,
  address,
  arrowRight,
  arrowRightBrown,
  arrowRightWhite,
  camera,
  close,
  closeBrown,
  hornBrown,
  print,
  qrcode,
  search,
  searchCircle,
  setting,
  star,

  // Tabbar 图标
  home,
  homeActive,
  market,
  marketActive,
  user,
  userActive,
  order,
  orderActive,
  goldCoupon,
  goldCouponActive,

  // 金券相关
  goldCouponCardImg1,
  goldCouponCardImg2,
  goldCouponHB1,
  goldCouponHB2,
  goldCouponHB3,
  goldCouponProduct1,
  goldCouponProduct2,
  goldCouponProduct3,
  goldCouponProduct4,
  goldCouponProduct5,
  goldCouponProduct6,
  goldCouponProduct7,
  goldCouponProduct8,
  goldCouponProductNumBg,
  goldCouponTitleBg,
  goldCouponTopBg1,
  goldCouponTopBg2,
  goldCouponTopBg3,
  happyMoneyBagXi,

  // 首页相关
  indexCouponCityMore,
  indexCouponCSImage1,
  indexCouponCSImage2,
  indexCouponCSImage3,
  indexCouponCSImage4,
  indexCouponJXImage1,
  indexCouponJXImage2,
  indexCouponMyUnUsedCover,
  indexCouponPayCover,
  indexCouponPJCover1,
  indexCouponXYFSImage1,
  indexCouponXYFSImage2,
  indexCouponXYFSImage3,
  indexCouponXYFSImage4,
  indexCouponXYYSImage1,
  indexCouponXYYSImage2,
  indexExchangeCouponCard,
  indexJSRightArrow,
  indexQHCover1,
  indexSplashScreen,
  indexTopCover,
  indexWS1,
  indexWS2,
  indexWS3,
  indexWS4,
  indexXiWaiSong,
  indexYQCover1,
  indexYQCover2,
  indexYQCover3,
  indexYQRightArrow,

  // 市场相关
  marketRX1,
  marketSX1,
  marketSX2,
  marketTopCover,
  marketZB1,
  marketZB2,
  marketZB3,

  // 订单相关
  myOrderUserCover,
  orderBanner1,
  orderBanner2,
  orderBanner3,
  orderClose,
  orderProduct1,
  orderProduct2,
  orderProduct3,
  orderShopping,
  orderTopCover,
  orderYiqihe,

  // 支付优惠券城市更多
  payCouponCityMoreBanner1,
  payCouponCityMoreBanner2,
  payCouponCityMoreBanner3,
  payCouponCityMoreBanner4,

  // 积分商城
  pointsMallList1,
  pointsMallList2,
  pointsMallList3,
  pointsMallList4,
  pointsMallList5,
  pointsMallList6,
  pointsMallTopList1,
  pointsMallTopList2,
  pointsMallTopList3,

  // 用户相关
  userTopCover,
  userVipService1,
  userVipService2,
  userVipService3,
  userVipService4,
  userVipService5,
  userVipService6,
  userVipService7,
  userVipService8,
  userYQ1,
} as const
// #endif

// #ifdef MP
// eslint-disable-next-line @typescript-eslint/no-redeclare
const imageMap = {}
// #endif

export { imageMap }

const imageNames = [
  // 通用图标
  'addIcon',
  'address',
  'arrowRight',
  'arrowRightBrown',
  'arrowRightWhite',
  'camera',
  'close',
  'closeBrown',
  'hornBrown',
  'print',
  'qrcode',
  'search',
  'searchCircle',
  'setting',
  'star',

  // Tabbar 图标
  'home',
  'homeActive',
  'market',
  'marketActive',
  'user',
  'userActive',
  'order',
  'orderActive',
  'goldCoupon',
  'goldCouponActive',

  // 金券相关
  'goldCouponCardImg1',
  'goldCouponCardImg2',
  'goldCouponHB1',
  'goldCouponHB2',
  'goldCouponHB3',
  'goldCouponProduct1',
  'goldCouponProduct2',
  'goldCouponProduct3',
  'goldCouponProduct4',
  'goldCouponProduct5',
  'goldCouponProduct6',
  'goldCouponProduct7',
  'goldCouponProduct8',
  'goldCouponProductNumBg',
  'goldCouponTitleBg',
  'goldCouponTopBg1',
  'goldCouponTopBg2',
  'goldCouponTopBg3',
  'happyMoneyBagXi',

  // 首页相关
  'indexCouponCityMore',
  'indexCouponCSImage1',
  'indexCouponCSImage2',
  'indexCouponCSImage3',
  'indexCouponCSImage4',
  'indexCouponJXImage1',
  'indexCouponJXImage2',
  'indexCouponMyUnUsedCover',
  'indexCouponPayCover',
  'indexCouponPJCover1',
  'indexCouponXYFSImage1',
  'indexCouponXYFSImage2',
  'indexCouponXYFSImage3',
  'indexCouponXYFSImage4',
  'indexCouponXYYSImage1',
  'indexCouponXYYSImage2',
  'indexExchangeCouponCard',
  'indexJSRightArrow',
  'indexQHCover1',
  'indexSplashScreen',
  'indexTopCover',
  'indexWS1',
  'indexWS2',
  'indexWS3',
  'indexWS4',
  'indexXiWaiSong',
  'indexYQCover1',
  'indexYQCover2',
  'indexYQCover3',
  'indexYQRightArrow',

  // 市场相关
  'marketRX1',
  'marketSX1',
  'marketSX2',
  'marketTopCover',
  'marketZB1',
  'marketZB2',
  'marketZB3',

  // 订单相关
  'myOrderUserCover',
  'orderBanner1',
  'orderBanner2',
  'orderBanner3',
  'orderClose',
  'orderProduct1',
  'orderProduct2',
  'orderProduct3',
  'orderShopping',
  'orderTopCover',
  'orderYiqihe',

  // 支付优惠券城市更多
  'payCouponCityMoreBanner1',
  'payCouponCityMoreBanner2',
  'payCouponCityMoreBanner3',
  'payCouponCityMoreBanner4',

  // 积分商城
  'pointsMallList1',
  'pointsMallList2',
  'pointsMallList3',
  'pointsMallList4',
  'pointsMallList5',
  'pointsMallList6',
  'pointsMallTopList1',
  'pointsMallTopList2',
  'pointsMallTopList3',

  // 用户相关
  'userTopCover',
  'userVipService1',
  'userVipService2',
  'userVipService3',
  'userVipService4',
  'userVipService5',
  'userVipService6',
  'userVipService7',
  'userVipService8',
  'userYQ1',
] as const

const isHttpImage = PLATFORM.isMp
const imageBaseUrl = 'https://het-tea-uniapp.netlify.app/static/icon/'
/**
 * 图片名称类型
 */
type ImageName = (typeof imageNames)[number]

/**
 * 获取图片资源
 * @param imageName 图片名称
 * @returns 图片URL或导入的资源
 */
export const getImage = (imageName: ImageName): string => {
  if (isHttpImage) {
    // 使用变量拼接模式
    return `${imageBaseUrl}/${imageName}.svg`
  } else {
    // 使用直接引入模式
    return imageMap[imageName]
  }
}
