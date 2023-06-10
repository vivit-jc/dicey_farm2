import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
  state: () => ({
    selectedAction: {} as Card,
    selectedDie: 0,
    dealDice: 5,
    gamestate: '' as string,
    dieForField: 0,
    actionPoint: 2,
    actionCancelable: true,
    marchant_count: 0,
    resources: [
      { j: '食料', num: 0 },
      { j: '魚', num: 0 },
      { j: '麦', num: 0 },
      { j: '野菜', num: 0 },
      { j: '花', num: 0 },
      { j: '卵', num: 0 },
      { j: '牛乳', num: 0 },
      { j: '麦の種', num: 2 },
      { j: '野菜の種', num: 3 },
      { j: '花の種', num: 1 },
      { j: '牛', num: 0 },
      { j: '豚', num: 0 },
      { j: '羊', num: 0 },
      { j: '鶏', num: 0 },
    ] as Resource[],
    marchant: [] as Resource[],
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
