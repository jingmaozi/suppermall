import {request} from "./request";

export function getCategoryData() {
  return request({
    url: '/category',
  })
}

export function getCategoryMaitKey(maitKey) {
  return request({
    url: '/category',
    params: {
      maitKey
    }
  })
}
