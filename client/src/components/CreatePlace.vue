<template>
  <v-layout>
    <v-flex xs6>
      <panel title="Place Meta">
        <v-text-field 
          label="City"
          v-model="place.city"        
        ></v-text-field>
        
        <v-text-field 
          label="Country"
          v-model="place.country"        
        ></v-text-field>

        <v-text-field 
          label="Continent"
          v-model="place.continent"        
        ></v-text-field>

        <v-text-field 
          label="Image URL"
          v-model="place.placeImageUrl"        
        ></v-text-field>

        <v-text-field 
          label="YouTube ID"
          v-model="place.youtubeId"        
        ></v-text-field>

        <v-text-field 
          label="Airport Code"
          v-model="place.airportCode"        
        ></v-text-field>
      </panel>
      <v-btn class="light-blue lighten-3" dark @click="create">
        Create City
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import PlacesService from '@/services/PlacesService'
export default {
  data () {
    return {
      place: {
        city: null,
        country: null,
        continent: null,
        placeImageUrl: null,
        youtubeId: null,
        airportCode: null
      }
    }
  },
  methods: {
    async create () {
      try {
        await PlacesService.post(this.place)
        this.$router.push({
          name: 'destinations'
        })
      } catch (err) {
        console.log(err)
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
