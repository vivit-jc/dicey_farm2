<template>
  <div class="row box">
    <q-btn
      v-for="action in actions"
      :key="action.name"
      class="action"
      @click="clickAction(action)"
    >
      {{ action.name }}
    </q-btn>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useMainStore } from '../stores/main-store';

let store = useMainStore();

const actions = [
  {
    name: '釣り',
    text: 'ダイスを1個選び、その数の魚を得る。',
  },
  {
    name: '畑を耕す',
    text: '同じ目のダイスを任意の個数選び、その個数の畑を耕す。',
  },
  { name: '種をまく', text: '任意の回数、畑に種をまく。ダイスは消費しない。' },
  { name: '商人', text: 'ダイスを2個まで選び、商品を購入する。' },
  { name: '出荷', text: 'アクションの説明' },
  { name: '契約/募集', text: 'アクションの説明' },
  { name: '増築', text: 'アクションの説明' },
];

function clickAction(action: Card) {
  if (!store.actionCancelable) {
    return false;
  }
  store.selectedAction = { name: action.name, text: action.text };
  if (
    action.name == '釣り' ||
    action.name == '畑を耕す' ||
    action.name == '商人'
  ) {
    store.gamestate = 'selectingDie';
  } else if (action.name == '種をまく') {
    store.gamestate = '';
  }
  console.log(action, store.gamestate);
}
</script>

<style scoped></style>
