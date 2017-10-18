<template>
  <panel title="Search">
    <v-text-field
    label="Search by city, country or continent. "
    v-model="search"
     ></v-text-field>
  </panel>
</template>

<script>
export default {
  data () {
    return {
      search: ''
    }
  }
}
</script>

<style>

</style>
