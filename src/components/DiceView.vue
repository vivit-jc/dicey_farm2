<template>
  <div class="row box">
    <div class="col">
      <div>
        1 / 8 ターン目<br />
        アクション 0 / 2<br />
      </div>
      <div
        class="row dice"
        :class="{ selecting: store.gamestate == 'selectingDie' }"
      >
        <q-img
          v-for="(die, i) in dice"
          :key="die"
          :src="dice_img(die)"
          class="die"
          @click="clickDie(i)"
          st
        />
      </div>
      <div>
        <q-btn>ターンの最初からやり直す</q-btn>
      </div>
    </div>
    <div class="col relbox" v-if="selectedAction.name">
      <p class="action">{{ selectedAction.name }}</p>
      <p>{{ selectedAction.text }}</p>
      <q-btn class="cancel" @click="cancelAction">✗</q-btn>
    </div>
    <div class="col" v-else>
      <p class="action">クエストの表示</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useMainStore } from '../stores/main-store';
import d1 from 'assets/d1.png';
import d2 from 'assets/d2.png';
import d3 from 'assets/d3.png';
import d4 from 'assets/d4.png';
import d5 from 'assets/d5.png';
import d6 from 'assets/d6.png';

let dice = ref([] as number[]);
let store = useMainStore();
let selectedAction = ref({} as Card);

for (let i = 0; i < store.dealDice; i++) {
  dice.value.push(Math.floor(Math.random() * 6) + 1);
}

watch(
  () => store.selectedAction,
  (newValue) => {
    selectedAction.value = newValue;
  }
);

function clickDie(i: number) {
  let die = dice.value[i];
  if (store.gamestate == 'selectingDie') {
    if (store.selectedAction.name == '釣り') {
      store.resources.fish.num += die;
      store.selectedAction.name = '';
      store.gamestate = '';
    }
    dice.value.splice(i, 1);
  }
}

function cancelAction() {
  selectedAction.value.name = '';
  store.gamestate = '';
}

function dice_img(num: number) {
  return [d1, d2, d3, d4, d5, d6][num - 1];
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
