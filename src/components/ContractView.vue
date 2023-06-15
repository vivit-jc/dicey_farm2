<template>
  <div class="box">
    <div>職人</div>
    <div class="row">
      <q-card
        v-for="(c, n) in st.contractTable"
        :key="c.name"
        @click="clickCraftsman(n)"
        class="item"
      >
        <q-img :src="misc.dice_img(n + 1)" class="die" /><br />
        {{ c.name }}
      </q-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useMainStore } from '../stores/main-store';
import * as misc from '../lib/misc';
import * as init from '../lib/initData';
import { Notify } from 'quasar';

let st = useMainStore();
let craftsmanDeck = init.craftsmanDeck;

misc.shuffle(craftsmanDeck);
st.craftsmanDeck = craftsmanDeck;
st.contractTable = st.craftsmanDeck.splice(0, 6);

function clickCraftsman(n: number) {
  const c = st.contractTable[n];
  if (st.selectedAction.name == '入れ替え' && st.rest_count > 0) {
    if (st.contractTable[n].name == '') {
      Notify.create('すでに取り除かれています');
    } else {
      st.contractTable[n] = { name: '', text: '' };
      st.rest_count -= 1;
      if (st.rest_count == 0) {
        st.selectedAction.name = '';
        st.actionCancelable = true;
      }
    }
  } else if (st.selectedAction.name == '') {
    st.selectedCraftsman = { name: c.name, text: c.text };
  }
}
</script>

<style scoped></style>
