import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
  state: () => ({
    selectedAction: {name: '', text: ''},
  }),
  /*
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++;
    },
  },
  */
});
