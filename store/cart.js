
const diateryFind = (stateCart, product) => {
  if(product.categoryId === null){
    const productIdIndex = stateCart.findIndex(item => item.cartParam.item.productId === product.cartParam.item.productId)
    if(productIdIndex >= 0){
      return true;
    }
    return false;
  } 
}

export const state = () => ({
  cart: []
})

export const mutations = {
  SET_CART(state, product){
    if(state.cart.length){
      let itemIndex = state.cart.findIndex(item => item.categoryId === product.categoryId);
      if((itemIndex >= 0 && product.categoryId !== null) || diateryFind(state.cart, product)){
        state.cart[itemIndex] = product;

        // for reactivity
        state.cart.push('test1')
        state.cart.splice(-1, 1);
      }else{
        state.cart.push(product);
      }
    }else {
      state.cart.push(product);
    }
  },
  CLEAR_CART(state){
    state.cart = [];
  },
  ADD_QUANTITY(state, index){
    state.cart[index].counter++;
    state.cart[index].totalPrice = state.cart[index].price * state.cart[index].counter;

    // for reactivity
    state.cart.push('test1')
    state.cart.splice(-1, 1);
  },
  REMOVE_QUANTITY(state, index){
    if(state.cart[index].counter > state.cart[index].cartParam.item.min_quantity){
      state.cart[index].counter--;
      state.cart[index].totalPrice = state.cart[index].price * state.cart[index].counter;

      // for reactivity
      state.cart.push('test1')
      state.cart.splice(-1, 1);
    }
  },
  UPDATE_FILLING_ID(state, params){
    state.cart[params.index].fillingId = params.id;

    // for reactivity
    state.cart.push('test1')
    state.cart.splice(-1, 1);
  },
  DELETE_ITEM_FROM_CART(state, index){
    state.cart.splice(index, 1);
  },
  CLEAR_CART(state){
    state.cart = [];
  }
}

export const actions = {
  ADD_TO_CART({commit}, product){
    commit('SET_CART', product)
  },
  REMOVE_ITEMS_FROM_CART({commit}){
    commit('CLEAR_CART');
  },
  INCREASE_ITEM_QUANTITY({commit}, index){
    commit('ADD_QUANTITY', index)
  },
  DECREASE_ITEM_QUANTITY({commit}, index){
    commit('REMOVE_QUANTITY', index)
  },
  FILLING_CHANGE({commit}, params){
    commit('UPDATE_FILLING_ID', params)
  },
  DELETE_FROM_CART({commit}, index){
    commit('DELETE_ITEM_FROM_CART', index)
  },
  REMOVE_ITEMS_FROM_CART({commit}){
    commit('CLEAR_CART')
  }
}
export const getters = {
  // GET_CART(state){
  //   return state.cart;
  // },
  GET_TOTAL_PRICE(state){
    return state.cart.reduce((sum, current) => {
      return sum + current.totalPrice;
    }, 0)
  },
  GET_FILLING_IDS(state){
    return state.cart.map(item => item.fillingId);
  },
  GET_CART_FOR_ORDER(state){
    return state.cart.map(item => {
      const prodId = item.fillingId === '' ? item.cartParam.item.productId : item.fillingId
      return {type: item.categoryId, product_id: prodId, name: item.cartParam.item.name, 
      price: item.price, qty_item: item.counter, sum_item: item.totalPrice};
    
    })
  }
}