<template>
  <div class="box">
    <div class="relbox" v-if="info.name">
      <p class="action">{{ info.name }}</p>
      <p>{{ info.text }}</p>
      <p v-if="st.dieForField != 0">
        <q-img :src="misc.dice_img(st.dieForField)" class="die" />を使用
      </p>
      <div v-if="info.name == '種をまく'">
        <q-btn
          v-for="seed in al.getSeedArray()"
          :key="seed"
          @click="al.doSeed(seed)"
        >
          {{ seed }}({{ misc.res_find(seed).num }})
        </q-btn>
      </div>
      <p v-if="info.name == '商人'">あと{{ al.buy_max() - st.rest_count }}回</p>
      <p v-if="info.name == '出荷'">
        あと{{ al.shipping_max() - st.rest_count }}回<br />
        <q-btn
          v-for="res in al.shippableResources()"
          :key="res.j"
          @click="al.shipping(res)"
          >{{ res.j }}({{ res.num }}):{{ res.value }}VP</q-btn
        >
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
let info = ref({} as Card);

watch(
  () => st.selectedAction,
  (newValue) => {
    info.value = newValue;
  }
);

watch(
  () => st.selectedCraftsman,
  (newValue) => {
    info.value = newValue;
  }
);

// アクションを終わるボタンが押された時の処理
function clickFinishButton() {
  const action = st.selectedAction;
  if (useFinishButton(action.name)) {
    if (!action.free) {
      st.actionPoint -= 1;
    }
    st.dieForField = 0;
    st.gamestate = '';
    st.actionCancelable = true;
    st.rest_count = 0;
    if (action.num) {
      st.disableAction.push(action.name);
      console.log(st.disableAction);
    }
    st.selectedAction.name = '';
  }
}

function showFinishButton() {
  if (useFinishButton(st.selectedAction.name)) {
    return true;
  }
  return false;
}

function useFinishButton(action: string) {
  const array = ['畑を耕す', '種をまく', '商人', '出荷'];
  if (array.find((e) => e == action)) {
    return true;
  } else {
    return false;
  }
}

function cancelAction() {
  info.value.name = '';
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
