<template>
<div class="row">
  <q-img v-for="die in dice" :key="die" :src="dice_img(die)" class="die" st/>
</div>
</template>

<script setup lang="ts">
  import { ref,watch } from 'vue'
import d1 from 'assets/d1.png'
import d2 from 'assets/d2.png'
import d3 from 'assets/d3.png'
import d4 from 'assets/d4.png'
import d5 from 'assets/d5.png'
import d6 from 'assets/d6.png'

  const dice = ref([1,2,3,4,5,6])

  function dice_img(num:number){
    return [d1,d2,d3,d4,d5,d6][num-1]
  }

</script>

<style scoped>
.die {
    height: 40px;
    max-width: 40px
}
</style>