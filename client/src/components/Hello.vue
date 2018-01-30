<template>
<v-container grid-list-md text-xs-center>
<v-layout row wrap>
  
  <v-flex xs10 offset-xs1 md6 class="header_text">
  <div class="hello">
    <h1>{{ msg }}</h1>
    <br/>
    <h3 >The first travel app built for the traveler.</h3>
    <h3>Ready to explore?</h3>
    
  </div>
  </v-flex>
  <v-flex>
  <register >
  </register>
  </v-flex>
</v-layout>
<br/>
<!-- TODO: Tinker with this layout and the offsets. Kind of broken right now -->
<v-layout row wrap offset-(xs1|sm1|md0)>
  <v-flex xs10  s10 md4>
    <div>
      <h3>Plan Trips.</h3> 
    </div>
  </v-flex>
  <v-flex xs10 offset-xs1 s10 md4>
    <div>
      <h3>Take Trips.</h3>
    </div>
  </v-flex>
  <v-flex xs10 offset-xs1 s10 md4>
    <div >
    <h3>Sell Trips.</h3>
  </div>
  </v-flex>
</v-layout>
</v-container>

</template>

<script>
import register from '@/components/Register'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Tripped Up'
    }
  },
  components: {
    register
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  position: left;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.header_text {
  text-align: left;
}
</style>
