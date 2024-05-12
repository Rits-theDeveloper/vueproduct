
/* eslint-disable */
import { createStore } from 'vuex'

export default createStore({
  state: {
    user: null,
    products: []
  },
  mutations: {
    login(state, email) {
      state.user = { email };
      localStorage.setItem('user', JSON.stringify(state.user));
    },
    logout(state) {
      state.user = null;
      localStorage.removeItem('user');
    },
    addProduct(state, product) {
      state.products.push(product);
    },
    updateProduct(state, { index, name, price }) {
      state.products[index] = { name, price };
    },
    deleteProduct(state, index) {
      state.products.splice(index, 1);
    }
  },
  actions: {
  },
  modules: {
  }
})