<template>
  <div class="box">
    <div class="relbox" v-if="selectedAction.name">
      <p class="action">{{ selectedAction.name }}</p>
      <p>{{ selectedAction.text }}</p>
      <q-btn v-if="showFinishButton()" @click="clickFinishButton">終わる</q-btn>
      <q-btn class="cancel" @click="cancelAction">✗</q-btn>
    </div>
    <div v-else>
      <p class="action">クエストの表示</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useMainStore } from '../stores/main-store';
import { Notify } from 'quasar';

let store = useMainStore();
let selectedAction = ref({} as Card);

watch(
  () => store.selectedAction,
  (newValue) => {
    selectedAction.value = newValue;
  }
);

function clickFinishButton() {
  console.log('finish');
}

function showFinishButton() {
  if (store.selectedAction.name == '畑を耕す') {
    return true;
  } else {
    return false;
  }
}

function cancelAction() {
  selectedAction.value.name = '';
  store.gamestate = '';
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
