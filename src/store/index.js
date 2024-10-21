import { createStore } from 'vuex';

export default createStore({
  state: {
    counter: 0,
    projects: [
      { id: "dropdown", name: "Dropdown" },
      { id: "counter", name: "Counter" },
      { id: "table", name: "Table" }
    ],
    tableData: [
      { id: 1, name: 'Item 1', value: 100 },
      { id: 2, name: 'Item 2', value: 200 }
    ]
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
    editTable(state, payload) {
      const item = state.tableData.find(item => item.id === payload.id);
      if (item) {
        item.value = payload.value;
      }
    }
  },
  actions: {
    increment({ commit }) {
      commit('increment');
    },
    editTable({ commit }, payload) {
      commit('editTable', payload);
    }
  },
  getters: {
    projects: (state) => state.projects,
    tableData: (state) => state.tableData,
    counter: (state) => state.counter,
    hello: (state) => state.hello
  }
});