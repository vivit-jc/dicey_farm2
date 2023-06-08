<template>
  <h2>Dicey Farm 2</h2>
  <q-page class="row items-center justify-evenly">
    <div class="col-2">
      <q-btn>
        abc
      </q-btn>
      <ResourceView></ResourceView>
    </div>
    <div class="col-10">
      <DiceView></DiceView>
      <ActionView></ActionView>
      <MarchantView></MarchantView>
      <FieldsView></FieldsView>
      <FacilityView></FacilityView>
      <WorkerView></WorkerView>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import ActionView from 'src/components/ActionView.vue';
import DiceView from 'src/components/DiceView.vue';
import MarchantView from 'src/components/MarchantView.vue';
import FieldsView from 'src/components/FieldsView.vue';
import FacilityView from 'src/components/FacilityView.vue';
import WorkerView from 'src/components/WorkerView.vue';
import ResourceView from 'src/components/ResourceView.vue';


</script>

<style scoped>
main {
  min-height: 0% !important;
}
h2 {
  text-align: center;
}
</style>