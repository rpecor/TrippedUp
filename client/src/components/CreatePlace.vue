<template>
  <v-layout>
    <v-flex xs6>
      <panel title="Place Meta">
        <v-text-field 
          label="City"
          required
          :rules="[required]"
          v-model="place.city"        
        ></v-text-field>
        
        <v-text-field 
          label="Country"
          required
          :rules="[required]"
          v-model="place.country"        
        ></v-text-field>

        <v-text-field 
          label="Continent"
          required
          :rules="[required]"
          v-model="place.continent"        
        ></v-text-field>

        <v-text-field 
          label="Image URL"
          required
          :rules="[required]"
          v-model="place.placeImageUrl"        
        ></v-text-field>

        <v-text-field 
          label="YouTube ID"
          required
          :rules="[required]"
          v-model="place.youtubeId"        
        ></v-text-field>

        <v-text-field 
          label="Airport Code"
          required
          :rules="[required]"
          v-model="place.airportCode"        
        ></v-text-field>
      </panel>
    </v-flex>
    <v-flex xs6 class="pl-2">
      <panel title="Map" >
        <v-text-field 
          label="Search city"
          
          v-model="place.latitude"        
        ></v-text-field>
        <v-text-field 
          label="Latitude"
          required
          :rules="[required]"
          v-model="place.latitude"        
        ></v-text-field>
        <v-text-field 
          label="Longitude"
          required
          :rules="[required]"
          v-model="place.longitude"        
        ></v-text-field>
      </panel>
      <v-alert
        class="ml-2"
        :value="error"
        transition="scale-transition"
        error>
        {{error}}
      </v-alert>
      <v-btn class="light-blue lighten-3" dark @click="create">
        Create City
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>

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
        airportCode: null,
        latitude: null,
        longitude: null
      },
      error: null,
      required: (value) => !!value || 'Required.'
    }
  },
  methods: {
    async create () {
      this.error = null
      const areAllFieldsFilledIn = Object
      .keys(this.place)
      .every(key => !!this.place[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all required fields.'
        return
      }

      try {
        await PlacesService.post(this.place)
        this.$router.push({
          name: 'destinations'
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
