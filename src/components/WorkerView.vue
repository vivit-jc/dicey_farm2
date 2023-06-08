<template>
  <div class="box">
    <div>職人</div>
    <div class="row">
      <q-card
        v-for="(worker, n) in workers"
        :key="worker.name"
        @click="clickWorker(n)"
        class="card"
      >
        {{ worker.name }}<br />
        {{ worker.text }}
      </q-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useMainStore } from '../stores/main-store';

let store = useMainStore();
let workers = ref([{ name: '菓子職人', text: '職人の説明' }] as Card[]);

function clickWorker(n: number) {
  console.log(n);
}
</script>

<style scoped></style>
