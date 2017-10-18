<template>
<v-layout column>
  <v-flex xs6 offset-xs3>
      <panel title="Register"> 
        <form
        name="tripped-up-form"
        autocomplete="off">
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
              autocomplete="new-password"
              
            ></v-text-field>
          </form>
        <br>
        <div class="error" v-html="error"/>
        <br>
        <v-btn class="light-blue lighten-3" dark @click="register">Register</v-btn>
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
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
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
