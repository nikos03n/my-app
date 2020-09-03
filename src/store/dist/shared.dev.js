"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  state: {
    loading: false,
    error: null
  },
  mutations: {
    setLoading: function setLoading(state, payload) {
      state.loading = payload;
    },
    setError: function setError(state, payload) {
      state.error = payload;
    },
    clearError: function clearError(state) {
      state.error = null;
    }
  },
  actions: {
    setLoading: function setLoading(_ref, payload) {
      var commit = _ref.commit;
      commit('setLoading', payload);
    },
    setError: function setError(_ref2, payload) {
      var commit = _ref2.commit;
      commit('setError', payload);
    },
    clearError: function clearError(_ref3) {
      var commit = _ref3.commit;
      commit('clearError');
    }
  },
  getters: {
    loading: function loading(state) {
      return state.loading;
    },
    error: function error(state) {
      return state.error;
    }
  }
};
exports["default"] = _default;