import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
  state: () => ({
    selectedAction: {} as Card,
    selectedDie: 0,
    dealDice: 5,
    gamestate: '',
    dieForField: 0,
    actionPoint: 2,
    resources: {
      food: { j: '食料', num: 0 } as Resource,
      fish: { j: '魚', num: 0 } as Resource,
      wheat: { j: '麦', num: 0 } as Resource,
      vegetable: { j: '野菜', num: 0 } as Resource,
      flower: { j: '花', num: 0 } as Resource,
      egg: { j: '卵', num: 0 } as Resource,
      milk: { j: '牛乳', num: 0 } as Resource,
    },
    fields: ['空き'] as string[],
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
