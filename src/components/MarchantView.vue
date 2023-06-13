<template>
  <div class="box">
    <div>商人</div>
    <div class="row">
      <q-card v-for="(item, n) in items" :key="item.j" class="item card">
        <q-img :src="dice_img(n + 1)" class="die" /><br />
        {{ item.j }}x{{ item.num }}
      </q-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useMainStore } from '../stores/main-store';
import { dice_img } from '../lib/misc';

let store = useMainStore();
let items = ref(store.marchant);

watch(
  () => store.marchant,
  (newValue) => {
    items.value = newValue;
  }
);
</script>

<style scoped></style>
