<template>
  <div class="row box">
    <q-btn
      v-for="action in actions"
      :key="action.name"
      class="action"
      @click="clickAction(action)"
      :disabled="st.disableAction.find((e) => e == action.name)"
    >
      {{ action.name }}
    </q-btn>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useMainStore } from '../stores/main-store';

let st = useMainStore();

const actions: Action[] = [
  {
    name: '釣り',
    text: 'ダイスを1個選び、その数の魚を得る。',
    useDice: true,
  },
  {
    name: '畑を耕す',
    text: '同じ目のダイスを任意の個数選び、その個数の畑を耕す。',
    useDice: true,
  },
  { name: '種をまく', text: '任意の回数、畑に種をまく。ダイスは消費しない。' },
  {
    name: '商人',
    text: 'ダイスを2個まで選び、商品を購入する。',
    useDice: true,
  },
  {
    name: '出荷',
    text: '商品を4つまで出荷する。フリーアクション。ダイスを消費しない。1ターンに1回まで。',
    free: true,
    num: 1,
  },
  {
    name: '契約',
    text: 'ダイスを1個選び、その位置にある職人と契約する。',
    useDice: true,
  },
  {
    name: '入れ替え',
    text: 'ダイスを1個選び、その数までの職人を取り除く。フリーアクション。',
    free: true,
    useDice: true,
  },
  {
    name: '増築',
    text: '6のダイスを1個使い、設備を一つ建てる。',
    useDice: true,
  },
];

function clickAction(action: Action) {
  if (!st.actionCancelable) {
    return false;
  }
  st.selectedAction = {
    name: action.name,
    text: action.text,
    free: action.free,
    num: action.num,
  } as Action;
  if (action.useDice) {
    st.gamestate = 'selectingDie';
  } else {
    st.gamestate = '';
  }
  console.log(action, st.gamestate);
}
</script>

<style scoped></style>
