<template>
  <div class="box">
    <div>
      1 / 8 ターン目<br />
      アクション {{ actionPoint }} / 2<br />
    </div>
    <div
      class="row dice"
      :class="{ selecting: store.gamestate == 'selectingDie' }"
    >
      <q-img
        v-for="(die, i) in dice"
        :key="i"
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
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useMainStore } from '../stores/main-store';
import { Notify } from 'quasar';
import d1 from 'assets/d1.png';
import d2 from 'assets/d2.png';
import d3 from 'assets/d3.png';
import d4 from 'assets/d4.png';
import d5 from 'assets/d5.png';
import d6 from 'assets/d6.png';

let dice = ref([] as number[]);
let store = useMainStore();
let selectedAction = ref({} as Card);
let actionPoint = ref(store.actionPoint);

for (let i = 0; i < store.dealDice; i++) {
  dice.value.push(Math.floor(Math.random() * 6) + 1);
}

watch(
  // string,numberなど単独の値はgetterじゃないとエラーになるっぽい
  () => store.actionPoint,
  (newValue) => {
    actionPoint.value = newValue;
  }
);

watch(store.selectedAction, (newValue) => {
  selectedAction.value = newValue;
});

function clickDie(i: number) {
  let die = dice.value[i];
  if (store.gamestate == 'selectingDie') {
    const action = store.selectedAction.name;
    if (action == '釣り') {
      store.resources.fish.num += die;
      store.selectedAction.name = '';
      store.gamestate = '';
      store.actionPoint -= 1;
    } else if (action == '畑を耕す') {
      if (store.dieForField == 0) {
        store.fields.push('空き');
        store.dieForField = die;
      } else if (store.dieForField == die) {
        store.fields.push('空き');
      } else {
        Notify.create('同じダイスである必要があります');
        return false;
      }
    }
    dice.value.splice(i, 1);
  }
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
