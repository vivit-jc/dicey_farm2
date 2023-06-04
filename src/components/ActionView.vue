<template>
    <div class="row box">
      <q-btn v-for="action in actions" :key="action.name" class="action">
        {{ action.name }}
      </q-btn>
    </div>
    </template>
    
    <script setup lang="ts">
      import { ref,watch } from 'vue'

      const actions = ref([
        {name:'釣り',text:'アクションの説明'},
        {name:'畑を耕す',text:'アクションの説明'},
        {name:'種をまく',text:'アクションの説明'},
        {name:'商人',text:'アクションの説明'},
        {name:'出荷',text:'アクションの説明'},
        {name:'契約/募集',text:'アクションの説明'},
        {name:'増築',text:'アクションの説明'}
      ])    
    </script>
    
    <style scoped>

    </style>