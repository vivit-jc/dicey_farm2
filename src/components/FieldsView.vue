<template>
  <div class="box">
    <div>畑の様子</div>
    <div class="row">
      <q-card v-for="field,n in fields" :key="field" @click="clickField(n)">
        {{ field }}
      </q-card>
    </div>
  </div>
</template>
      
<script setup lang="ts">
  import { ref,watch } from 'vue'
  import { useMainStore } from '../stores/main-store'

  let store = useMainStore();
  let fields = ref(['麦','羊'] as string[])

  function clickField(n:number){
    console.log(n)
  }
</script>

<style scoped>

</style>