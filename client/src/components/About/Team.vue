<template>
<v-layout center>
  <v-flex transition="slide-x-transition" xs6 offset-xs1 >
  <div class="hello">
    
    <h3 class="name">Ryan Pecor</h3>
    <h4 class="name"> I'm a guy who believes in the power of travel and the impact it has on people.</h4>
    <br/>
    <br/>
    <br/>
    <h5 class="name">Always in need of motivated designers, developers, marketers and product people! Reach out if you'd like to help.</h5>
  </div>
  </v-flex>
  
  <v-flex xs4>
  <div class="white elevation-2 ">
      <div class="pt-4 pl-4 pr-4 pb-4">
        <img class="image" :src="image" />
        
      </div>
    </div>
  </v-flex>
  
</v-layout>
</template>

<script>

export default {
  data () {
    return {
      image: require('../../assets/me2.jpg')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.image {
  max-width: 100%;
}
.name {
  text-align: left ;
}
</style>
