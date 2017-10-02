<template>
<v-layout column>
  <v-flex xs6 offset-xs3>
    <div class="white elevation-2 ">
      <v-toolbar flat dense class="light-blue lighten-3" dark>
        <v-toolbar-title>Sign Up</v-toolbar-title>
      </v-toolbar>
      <div class="pt-2 pl-4 pr-4 pb-2">
        <v-text-field
              
              label="Email"
              v-model="email"
              
            ></v-text-field>
          <br>
          <v-text-field
              
              label="Enter your password"
              hint="At least 8 characters"
              v-model="password"
              min="8"
              
            ></v-text-field>
          
        <br>
        <div class="error" v-html="error"/>
        <br>
        <v-btn class="light-blue lighten-3" dark @click="register">Register</v-btn>
      </div>
    </div>
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
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
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
  .error {
    color: red;
  }


</style>
