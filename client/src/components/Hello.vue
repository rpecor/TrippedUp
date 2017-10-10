<template>
<v-layout>
  <v-flex xs7>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <br/>
    <h3 >The first travel app built for the traveler.</h3>
    <h3>Ready to explore?</h3>
    
  </div>
  </v-flex>
  <v-flex xs5>
  <register xs6>

  </register>
  </v-flex>
  
</v-layout>
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
</style>
