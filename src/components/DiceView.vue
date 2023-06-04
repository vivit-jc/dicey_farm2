<template>
  <div class="row">
    <div class="box col">
      <div>
        1 / 8 ターン目<br/>
        アクション 0 / 2<br/>
      </div>
      <div class="row">
        <q-img v-for="die in dice" :key="die" :src="dice_img(die)" class="die" st/>
      </div>
      <div>
        <q-btn>ターンの最初からやり直す</q-btn>
      </div>
    </div>
    <div class="box col">
      <h2>{{ selectedAction.name }}</h2>
      <p>{{ selectedAction.text }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref,watch } from 'vue'
  import useMainStore from '../stores/main-store'
  import d1 from 'assets/d1.png'
  import d2 from 'assets/d2.png'
  import d3 from 'assets/d3.png'
  import d4 from 'assets/d4.png'
  import d5 from 'assets/d5.png'
  import d6 from 'assets/d6.png'

  const dice = ref([1,2,3,4,5,6])
  let store = useMainStore();

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
</style>