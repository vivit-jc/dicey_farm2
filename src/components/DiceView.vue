<template>
  <div class="box">
    <div>
      1 / 8 ターン目<br />
      アクション {{ actionPoint }} / 2<br />
    </div>
    <div
      class="row dice"
      :class="{ selecting: st.gamestate == 'selectingDie' }"
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
import { dice_img, res_find } from '../lib/misc';

let dice = ref([] as number[]);
let st = useMainStore();
let selectedAction = ref({} as Card);
let actionPoint = ref(st.actionPoint);

for (let i = 0; i < st.dealDice; i++) {
  dice.value.push(Math.floor(Math.random() * 6) + 1);
}

watch(
  // string,numberなど単独の値はgetterじゃないとエラーになるっぽい
  () => st.actionPoint,
  (newValue) => {
    actionPoint.value = newValue;
  }
);

watch(st.selectedAction, (newValue) => {
  selectedAction.value = newValue;
});

// ダイスがクリックされた時の処理
function clickDie(i: number) {
  let die = dice.value[i];
  if (st.gamestate == 'selectingDie') {
    const action = st.selectedAction.name;
    if (action == '釣り') {
      res_find('魚').num += die;
      st.selectedAction.name = '';
      st.gamestate = '';
      st.actionPoint -= 1;
    } else if (action == '畑を耕す') {
      if (st.dieForField == 0) {
        st.fields.push('空き');
        st.dieForField = die;
        st.actionCancelable = false;
      } else if (st.dieForField == die) {
        st.fields.push('空き');
      } else {
        Notify.create('同じダイスである必要があります');
        return false;
      }
    } else if (action == '商人') {
      const items = st.marchant;
      const buy_max = 2;
      if (st.rest_count < buy_max) {
        res_find(items[die - 1].j).num += items[die - 1].num;
        st.rest_count += 1;
        st.actionCancelable = false;
      } else {
        Notify.create('買い物回数の上限に達しています');
        return false;
      }
    } else if (action == '契約') {
      const craftsman = st.contractTable[die - 1];
      if (craftsman.name == '') {
        Notify.create('その位置に職人はいません');
        return false;
      }
      st.craftsmen.push({ name: craftsman.name, text: craftsman.text });
      st.contractTable.splice(die - 1, 1, { name: '', text: '' });
      st.selectedAction.name = '';
      st.gamestate = '';
      st.actionPoint -= 1;
    }
    dice.value.splice(i, 1);
  }
}
</script>

<style scoped>
.col {
  padding: 3px;
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
