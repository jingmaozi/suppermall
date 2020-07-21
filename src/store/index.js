import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    addToCart(state, payload){
      payload.checked = false
      state.cartList.push(payload)
    },
    addCounter(state, payload){
      payload.count++
    }
  },
  actions: {
    addCart(context, payload){
      return new Promise((resolve, reject) => {
        let oldProduct = null
        for(let value of context.state.cartList){
          if(value.iid === payload.iid){
            oldProduct = value
          }
        }
        if(oldProduct){
          // oldProduct.count += 1
          context.commit('addCounter', oldProduct)
          resolve('当前商品加1')
        }else {
          payload.count = 1
          context.commit('addToCart', payload)
          // context.state.cartList.push(payLoad)
          resolve('添加新的商品')
        }
      })
    }
  }
})

export default store
