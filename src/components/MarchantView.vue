<template>
  <div class="box">
    <div>商人</div>
    <div class="row">
      <q-card v-for="item,n in items" :key="item.name" class="item">
        <q-img :src="dice_img(n+1)" class="die" />
        {{ item.name }}x{{ item.num }}
      </q-card>
    </div>
  </div>
</template>
  
<script setup lang="ts">
    import { ref,watch } from 'vue'
    import { useMainStore } from '../stores/main-store'
    import d1 from 'assets/d1.png'
    import d2 from 'assets/d2.png'
    import d3 from 'assets/d3.png'
    import d4 from 'assets/d4.png'
    import d5 from 'assets/d5.png'
    import d6 from 'assets/d6.png'

    let store = useMainStore();
    let selectedAction = ref(store.selectedAction)
    let items = ref([{name:'豚',num:1},{name:'鶏',num:1},{name:'花の種',num:2},{name:'野菜の種',num:2},{name:'羊',num:1},{name:'麦の種',num:2}])

    watch(
        () => store.selectedAction,
        (newValue) => {
        selectedAction.value = newValue
        },
    )

    function dice_img(num:number){
        return [d1,d2,d3,d4,d5,d6][num-1]
    }
  
</script>
  
<style scoped>
  .die {
      height: 40px;
      max-width: 40px
  }
  .dice {
    width:300px;
  }
  .item {
    margin: 3px;
    width: 50px;
    text-align: center;
  }
</style>