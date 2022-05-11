import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";
import shoppingcart from './modules/shoppingcart'

export const state = () => ({
    authenticated: false,
    // cart: '',
    cartcount:'',
    // plugins: [createPersistedState()],
  })
  // this is to change state
  export const mutations = {

    SET_CART(state){
      //  state.cart = JSON.parse(localStorage.getItem('cart'));
    },

    SET_AUTHENTICATED(state, payload){
        state.authenticated = payload;
        console.log('working');
    },

  }
  export const getters = {

    Get_Auth (state) {
      return state.authenticated
    }
  }
  // server-side interaction
  export const actions = {
    someFunc(context, payload){
      // code
    },
    someFunc2({commit, getters}, data){
      // code
    }
  }


  // const store = new Vuex.Store({
  //   modules: {
  //     a: shoppingcart
  //   }
  // })

  // export default store;
