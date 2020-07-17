import {request} from "./request";

export function  getDetailsData(iid) {
    return request({
      url: '/detail',
      params: {
        iid
      }
    })
}

//获取推荐数据
export function getDetailRecommend() {
  return request({
    url: '/recommend',
  })
}
export class DetailsGoodsInfo {
  constructor(columns, itemInfo, shopInfo) {
    this.title = itemInfo.title;
    this.highNowPrice = itemInfo.highNowPrice;
    this.lowNowPrice = itemInfo.lowNowPrice;
    this.price = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discountDesc = itemInfo.discountDesc;
    this.discountBgColor = itemInfo.discountBgColor;
    this.columns = columns;
    this.services = shopInfo.services;
  }
}

export class DetailsShopInfo {
  constructor(shopInfo) {
    this.cGoods = shopInfo.cGoods;
    this.cSells = shopInfo.cSells;
    this.shopId = shopInfo.shopId;
    this.shopLogo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.score = shopInfo.score;
  }
}

//用户评价
export class DetailsRate {
  constructor(rate) {
    this.list = rate
    this.avatar = rate.user.avatar
    this.uname = rate.user.uname
  }
}
