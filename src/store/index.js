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
      let oldProduct = null
      for(let value of context.state.cartList){
        if(value.iid === payload.iid){
          oldProduct = value
        }
      }
      if(oldProduct){
        // oldProduct.count += 1
        context.commit('addCounter', oldProduct)
      }else {
        payload.count = 1
        context.commit('addToCart', payload)
        // context.state.cartList.push(payLoad)
      }
    }
  }
})

export default store
