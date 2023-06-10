<template>
  <div class="box">
    <div class="relbox" v-if="selectedAction.name">
      <p class="action">{{ selectedAction.name }}</p>
      <p>{{ selectedAction.text }}</p>
      <p v-if="st.dieForField != 0">
        <q-img :src="misc.dice_img(st.dieForField)" class="die" />を使用
      </p>
      <div v-if="selectedAction.name == '種をまく'">
        <q-btn
          v-for="seed in al.getSeedArray()"
          :key="seed"
          @click="al.doSeed(seed)"
        >
          {{ seed }}({{ misc.res_find(seed).num }})
        </q-btn>
      </div>
      <p v-if="selectedAction.name == '商人'">
        あと{{ al.buy_max - st.marchant_count }}回
      </p>
      <q-btn v-if="showFinishButton()" @click="clickFinishButton">終わる</q-btn>
      <q-btn class="cancel" @click="cancelAction" v-if="st.actionCancelable"
        >✗</q-btn
      >
    </div>
    <div v-else>
      <p class="action">クエストの表示</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useMainStore } from '../stores/main-store';
import * as misc from '../lib/misc';
import * as al from '../lib/ActionLogic';

let st = useMainStore();
let selectedAction = ref({} as Card);

watch(
  () => st.selectedAction,
  (newValue) => {
    selectedAction.value = newValue;
  }
);

// アクションを終わるボタンが押された時の処理
function clickFinishButton() {
  const action = st.selectedAction.name;
  if (action == '畑を耕す' || action == '種をまく' || action == '商人') {
    st.selectedAction.name = '';
    st.actionPoint -= 1;
    st.dieForField = 0;
    st.gamestate = '';
    st.actionCancelable = true;
    st.marchant_count = 0;
  }
}

function showFinishButton() {
  const action = st.selectedAction.name;
  if (action == '畑を耕す' || action == '種をまく' || action == '商人') {
    return true;
  }
  return false;
}

function cancelAction() {
  selectedAction.value.name = '';
  st.gamestate = '';
}
</script>

<style scoped>
.col {
  padding: 3px;
}
.die {
  height: 40px;
  max-width: 40px;
}
.dice {
  padding: 2% 5%;
}
.selecting {
  background-color: skyblue;
}
.relbox {
  position: relative;
}
.cancel {
  position: absolute;
  right: 0;
  bottom: 70%;
}
</style>
