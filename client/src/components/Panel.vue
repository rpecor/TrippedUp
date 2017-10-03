<template>
    <div class="white elevation-2 ">
      <v-toolbar flat dense class="light-blue lighten-3" dark>
        <v-toolbar-title>{{title}}</v-toolbar-title>
      </v-toolbar>
      <div class="pt-2 pl-4 pr-4 pb-2">
        <slot>
        No slot content
        </slot>
      </div>
    </div>
</template>

<script>
export default {
  props: [
    'title'
  ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>