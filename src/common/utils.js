// 防抖
export function debounce(func, delay){
  let timer = null;
  return function (...args) {
    if(timer) clearTimeout(timer)
    timer = setTimeout(() => {
      // console.log('-------------------')
      func.apply(this, args)
    },delay)
  }
}

//时间戳
export const publicMethod = { //当前时间转成日期格式
  //时间戳转换成日期时间
  getTimestamp: function (timestamp) {
    // console.log(timestamp)
    if (timestamp) {
      var date = new Date(timestamp * 1000); //时间戳为10位需*1000(为秒)，时间戳为13位的话不需乘1000(毫秒)
      var Y = date.getFullYear();
      var M =
        date.getMonth() + 1 < 10 ?
          "0" + (date.getMonth() + 1) :
          date.getMonth() + 1;
      var D = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
      var h = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
      var m =
        date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
      var s = date.getSeconds();
      // console.log(Y + "-" + M + "-" + D + " " + h + ":" + m + ":" + s);
      return Y + "-" + M + "-" + D + " " + h + ":" + m + ":" + s;
    }
  }
}

