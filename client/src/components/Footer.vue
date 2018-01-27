<template>
<v-footer class="pa-4 green lighten-2">
    
    
        <v-btn 
            flat dark to="/mission">
            Mission
        </v-btn>
       
        <v-btn 
            flat dark to="/Team">
            Team
        </v-btn>
        
    <v-spacer></v-spacer>
  <div>© {{ new Date().getFullYear() }}</div>
</v-footer>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
