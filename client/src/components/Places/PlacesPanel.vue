<template>
  <panel title="Destinations">
    <div slot="action">
      <v-btn
        class="green lighten-3"
        medium
        absolute
        right
        middle
        fab
        to="create">
        <v-icon>add</v-icon>
      </v-btn>
    </div>
      <div 
      v-for="place in places" 
      class="place"
      :key="place.id">
      <v-layout>
        <v-flex xs6>
          <div class="place-city">
            {{place.city}}
          </div>
          <div class="place-country">
            {{place.country}}
          </div>
          <div class="place-continent">
            {{place.continent}}
          </div>
          <v-btn 
          class="light-blue lighten-3" 
          dark 
          @click="navigateTo({name: 'place', params: {placeId: place.id}})">
          View City
          </v-btn>
        </v-flex>
          
        <v-flex xs6>
          <img class="place-image" :src="place.placeImageUrl" />
        </v-flex>
      </v-layout>
      </div>
  </panel>
</template>

<script>
import PlacesService from '@/services/PlacesService'

export default {
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
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.places = (await PlacesService.index(value)).data
      }
    }
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