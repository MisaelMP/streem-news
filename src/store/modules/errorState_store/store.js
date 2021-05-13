// module to manage simple error state

const state = {
  errorState: {
    news: false
  }
};

const getters = {
  newsError: state => state.errorState.news
};

const mutations = {
  SET_IS_ERROR(state, context) {
    state.errorState[context.context] = context.value;
  }
};

export const errorStateStore = {
  state,
  getters,
  mutations
};
