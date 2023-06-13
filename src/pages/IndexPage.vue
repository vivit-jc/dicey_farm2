<template>
  <h2>Dicey Farm 2</h2>
  <q-page class="row items-center justify-evenly">
    <div class="col-2">
      <div>
        <q-btn> abc </q-btn>
      </div>
      <ResourceView></ResourceView>
    </div>
    <div class="col-10">
      <div class="row">
        <DiceView class="col"></DiceView>
        <InfoView class="col"></InfoView>
      </div>
      <ActionView></ActionView>
      <WorkerView></WorkerView>
      <MarchantView></MarchantView>
      <FieldsView></FieldsView>
      <FacilityView></FacilityView>
      <ContractView></ContractView>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import ActionView from 'src/components/ActionView.vue';
import InfoView from 'src/components/InfoView.vue';
import DiceView from 'src/components/DiceView.vue';
import MarchantView from 'src/components/MarchantView.vue';
import FieldsView from 'src/components/FieldsView.vue';
import FacilityView from 'src/components/FacilityView.vue';
import ContractView from 'src/components/ContractView.vue';
import WorkerView from 'src/components/WorkerView.vue';
import ResourceView from 'src/components/ResourceView.vue';
import { game_init } from '../lib/misc';

game_init();
</script>

<style scoped>
main {
  min-height: 0% !important;
}
h2 {
  text-align: center;
}
</style>
