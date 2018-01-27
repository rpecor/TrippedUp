<template>
<v-layout>
  <v-flex xs7>
  <div class="hello">
    
    <h3 >Ryan Pecor</h3>
    <h3> I love travel. </h3>
    
  </div>
  </v-flex>
  
  <v-flex xs5>
  <div class="white elevation-2 ">
      <div class="pt-2 pl-4 pr-4 pb-2">
        <slot>
        No slot content
        </slot>
      </div>
    </div>
  </v-flex>
  
</v-layout>
</template>

<script>
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
