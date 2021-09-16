export const state = () => ({
  scrollPosition: 0
})

export const actions = {
  setScrollPosition({ commit }, position) {
    commit('SET_SCROLL_POSITION', { position })
  }
}

export const mutations = {
  SET_SCROLL_POSITION(state, { position }) {
    state.scrollPosition = position
  }
}

export const getters = {
  scrollPosition(state) {
    return state.scrollPosition
  }
}