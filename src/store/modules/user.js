const state = {
  userName: 'Default'
}

const getters = {
  
};

const actions = {
  login: (context) => {
    const response = {
      name: 'Gowtham',
      id: 1,
    }

    context.commit('LOGIN', response);
  }
}

const mutations = {
  LOGIN: (state, data) => {
    state.userName = data.name;
  }
}

export default {
  state,
  getters,
  actions,
  mutations
};
