import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
  state: () => ({
    selectedAction: { name: '', text: '' } as Action,
    selectedCraftsman: {} as Craftsman,
    selectedDie: 0,
    dealDice: 5,
    gamestate: '' as string,
    dieForField: 0,
    actionPoint: 2,
    actionCancelable: true,
    rest_count: 0,
    disableAction: [] as string[],
    resources: [
      { j: 'VP', num: 0, rot: false, value: 0 },
      { j: '食料', num: 0, rot: true, value: 0 },
      { j: '魚', num: 6, rot: true, value: 1 },
      { j: '麦', num: 0, rot: false, value: 1 },
      { j: '野菜', num: 0, rot: true, value: 1 },
      { j: '花', num: 0, rot: true, value: 2 },
      { j: '肉', num: 4, rot: true, value: 2 },
      { j: '卵', num: 0, rot: true, value: 1 },
      { j: '牛乳', num: 0, rot: true, value: 1 },
      { j: '羊毛', num: 0, rot: false, value: 1 },
      { j: '麦の種', num: 2, rot: true, value: 0 },
      { j: '野菜の種', num: 3, rot: true, value: 0 },
      { j: '花の種', num: 1, rot: true, value: 0 },
      { j: '牛', num: 0, rot: false, value: 0 },
      { j: '豚', num: 0, rot: false, value: 0 },
      { j: '羊', num: 0, rot: false, value: 0 },
      { j: '鶏', num: 0, rot: false, value: 0 },
    ] as Resource[],
    marchant: [] as Resource[],
    fields: ['空き'] as string[],
    craftsmen: [] as Craftsman[],
    contractTable: [] as Craftsman[],
    craftsmanDeck: [] as Craftsman[],
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
