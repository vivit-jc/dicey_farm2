<template>
  <div v-for="res in resources" :key="res.j">{{ res.j }}:{{ res.num }}</div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useMainStore } from '../stores/main-store';

let store = useMainStore();
let resources = ref(store.resources);

watch(
  () => store.resources,
  (newValue) => {
    resources.value = newValue;
  }
);
</script>

<style scoped></style>
