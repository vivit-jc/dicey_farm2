<template>
  <div class="box" v-if="st.craftsmen.length > 0">
    <div>契約済みの職人</div>
    <div class="row">
      <q-card
        v-for="c in st.craftsmen"
        :key="c.name"
        class="item card"
        @click="clickCraftsman(c)"
      >
        {{ c.name }}
      </q-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useMainStore } from '../stores/main-store';

let st = useMainStore();

function clickCraftsman(c: Card) {
  st.selectedCraftsman = { name: c.name, text: c.text };
}
</script>

<style scoped></style>
