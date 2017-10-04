<template>
<v-toolbar fixed class="light-blue lighten-3" dark>
    <v-toolbar-title to="root" class="mr-4"> 
        <span @click="navigateTo({name: 'root'})">
            Tripped UP
        </span>
    </v-toolbar-title>
    <v-toolbar-items>
        <v-btn 
            v-if="$store.state.isUserLoggedIn" flat dark to="/destinations">
            Browse
        </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items >
        <v-btn 
            v-if="!$store.state.isUserLoggedIn" flat dark to="/login">
            Login
        </v-btn>
        <v-btn 
            v-if="!$store.state.isUserLoggedIn" flat dark to="/register">
            Sign Up
        </v-btn>
        <v-btn 
            v-if="$store.state.isUserLoggedIn" flat dark @click="logout">
            Log Out
        </v-btn>
    </v-toolbar-items>
</v-toolbar>
  
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'root'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
