<template>
<v-container>
<v-layout row wrap>
  <v-flex xs10 offset-xs1 s10 offset-s1 md5 offset-md1>
  <div class="hello">
    
    <h3 class="name">Ryan Pecor</h3>
    <h4 class="name"> I'm a guy who believes in the power of travel and the impact it has on people.</h4>
   
  </div>
  </v-flex>

  <v-flex xs10 offset-xs1 s10 offset-s1 md4 offset-md1>
  <div class="white elevation-2 ">
      <div class="pt-4 pl-4 pr-4 pb-4">
        <img class="image" :src="image" />     
      </div>
    </div>
  </v-flex>
</v-layout>
<v-layout>
  <v-flex xs10 offset-xs1 s10 offset-s1 md4 offset-md1>
  
    <br />
    <br />
   
  <div >
          <h5 class="name">
            Reach out if you'd like to help! 
            I could use developers, designers, 
            marketers, or anyone who is passionate
            about making travel easier!
          </h5>
    </div>
  </v-flex>
  
</v-layout>
</v-container>
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
