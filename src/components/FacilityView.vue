<template>
  <div class="box" :class="{ selecting: st.gamestate == 'selectingFacility' }">
    <div>設備</div>
    <div class="row">
      <q-card
        v-for="(facility, n) in facilities"
        :key="facility.name"
        @click="clickFacility(facility)"
        class="card col"
      >
        <q-icon
          name="home"
          v-if="facility.ftype == 'passive'"
          class="icon"
        ></q-icon>
        <q-icon
          name="accessibility"
          v-if="facility.ftype == 'action'"
          class="icon"
        ></q-icon>
        {{ facility.name }}
        <q-icon
          name="check"
          color="green"
          class="exist icon"
          v-if="checkFacility(n)"
        ></q-icon>
      </q-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useMainStore } from '../stores/main-store';
import * as init from '../lib/initData';

let st = useMainStore();
let facilities = ref(init.facilities);

function clickFacility(f: Facility) {
  if (st.selectedAction.name == '' || st.gamestate == 'selectingFacility') {
    st.selectedFacility = {
      name: f.name,
      text: f.text,
      ftype: f.ftype,
    };
  }
}

function checkFacility(n: number) {
  return st.existFacility[n];
}
</script>

<style scoped>
.exist {
  position: absolute;
  top: 0%;
  right: 0%;
}
.icon {
  font-size: 1.6em;
}
.selecting {
  background-color: skyblue;
}
</style>
