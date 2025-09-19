/**
 * 图片管理工具
 * 支持导入导出所有图片，并提供开关控制使用变量拼接还是直接引入图片
 */

// SVG 图标资源导入 - 从 static/icons 目录导入
import PLATFORM from './platform'
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
const imageBaseUrl = 'https://het-tea-uniapp.netlify.app'
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
  return (isHttpImage ? imageBaseUrl : '') + `/static/icons/${imageName}.svg`
}
