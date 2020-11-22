export const state = () => {
  return {
    authenticated: false,
  };
};

export const mutations = {
  authenticate(state) {
    state.authenticated = true;
  },
};

export const actions = {};

export const getters = {
  isAuthenticated: (state) => {
    return state.authenticated;
  },
};
