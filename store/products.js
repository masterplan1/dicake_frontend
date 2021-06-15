export const state = () => ({
  cakes: []
})

export const mutations = {
  setCakes(state, cakes){
    state.cakes = cakes
  }
}

export const actions = {
  async fetchCakes({commit}, id){
    const cakes = await this.$axios.$get(`/api/product?type_filter=${id}`);
    commit('setCakes', cakes);
  }
}

export const getters = {
  cakes: state => state.cakes
}