<template>
  <div class="box">
    <div>設備</div>
    <div class="row">
      <q-card v-for="facility,n in facilities" :key="facility.name" @click="clickFacility(n)">
        {{ facility.name }}<br/>
        {{ facility.text }}
      </q-card>
    </div>
  </div>
</template>
        
  <script setup lang="ts">
    import { ref,watch } from 'vue'
    import { useMainStore } from '../stores/main-store'
  
    let store = useMainStore();
    let facilities = ref([{name:'燻製小屋',text:'施設の説明'}] as Card[])
  
    function clickFacility(n:number){
      console.log(n)
    }
  </script>
  
  <style scoped>
  
  </style>