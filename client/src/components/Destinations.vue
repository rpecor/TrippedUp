<template>
  <v-layout>
    <v-flex xs6 offset-xs3>
        <panel title="Destinations">
            <div 
            v-for="place in places" 
            :key="place.id">
                {{place.city}} -
                {{place.country}} - 
                {{place.continent}}
            </div>
        </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import PlacesService from '@/services/PlacesService'
import Panel from '@/components/Panel'
export default {
  components: {
    Panel
  },
  data () {
    return {
      places: null
    }
  },
  async mounted () {
    this.places = (await PlacesService.index()).data
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>