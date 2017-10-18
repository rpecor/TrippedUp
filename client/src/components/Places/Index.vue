<template>
  <v-layout>
    <v-flex xs6 offset-xs3>
      <places-search-panel />
      <places-panel class="mt-2"/>
    </v-flex>
  </v-layout>
</template>

<script>
import PlacesPanel from './PlacesPanel'
import PlacesSearchPanel from './PlacesSearchPanel'
import PlacesService from '@/services/PlacesService'
export default {
  components: {
    PlacesPanel,
    PlacesSearchPanel
  },
  data () {
    return {
      places: null
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  async mounted () {
    this.places = (await PlacesService.index()).data
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.place{
  padding: 20px;
  height: auto;
  overflow: hidden;
}
.place-city{
  font-size: 24px;
}
.place-country{
  font-size: 20px;
}
.place-continent{
  font-size: 16px;
}
.place-image{
  width:88%;
  margin: 0 auto;
}
</style>