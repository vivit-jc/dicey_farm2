<template>
  <h2>Dicey Farm 2</h2>
  <q-page class="row items-center justify-evenly">
    <div class="col-2 box">
      <q-btn>
        abc
      </q-btn>
    </div>
    <div class="col-10">
      <DiceView class="box"></DiceView>
      <ActionView class="box"></ActionView>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import ActionView from 'src/components/ActionView.vue';
import DiceView from 'src/components/DiceView.vue';

</script>

<style scoped>
h2 {
  text-align: center;
}
</style>