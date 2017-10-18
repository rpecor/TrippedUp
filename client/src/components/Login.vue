<template>
<v-layout column>
  <v-flex xs6 offset-xs3>
    <panel title="Login"> 
        <v-text-field 
            label="Email"
            v-model="email"
              
        ></v-text-field>
        <br>
        <v-text-field
           type="password"
           label="Enter your password"
           hint="At least 8 characters"
           v-model="password"
           min="8"
              
        ></v-text-field>

        <br>
        <v-alert
        class="ml-2"
        :value="error"
        transition="scale-transition"
        error>
        {{error}}
      </v-alert>
        <!-- <div class="error" v-html="error"/> -->
        <br>
        <v-btn class="light-blue lighten-3" dark @click="login">Login</v-btn>
    </panel>
  </v-flex>
</v-layout>

  
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {

  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name: 'destinations'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
