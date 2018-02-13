<template>
<div>
  <v-layout>
    <v-flex xs6>
    <panel title="Place Data">
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
                <div class="place-continent">
                  Airport Code: {{place.airportCode}}
                </div>
                <v-btn 
                class="light-blue lighten-3" 
                dark  
                @click="navigateTo({name: 'place-edit', params: {placeId: place.id}})">
                  Edit City
                </v-btn>
                <v-btn 
                v-if="isUserLoggedIn && !trip"
                class="light-blue lighten-3" 
                dark  
                @click="addToTrip">
                  Add to Trip
                </v-btn>
                <v-btn
                v-if="isUserLoggedIn && trip"
                class="light-blue lighten-3" 
                dark  
                @click="removeFromTrip">
                  Remove from Trip
                </v-btn>
              </v-flex>
                
              <v-flex xs6>
                <img class="place-image" :src="place.placeImageUrl" />
              </v-flex>
            </v-layout>
    </panel>
    </v-flex>
  </v-layout>
  <v-layout>
    <v-flex xs6 class="pt-2">
    <panel title="Map">
      <gmap-map
    :center="{lat: place.latitude, lng: place.longitude}"
    :zoom="11"
    style="width: 500px; height: 300px"
  >
    </gmap-map>

    <!-- <gmap-map :center="{lat:1.38, lng:103.8}" :zoom="12"   style="width: 500px; height: 300px"> -->
      
    
    </panel>
    </v-flex>
  
 
    <v-flex xs6 class="pl-2 pt-2">
      <panel title="YouTube Video">
        <youtube
        :video-id="place.youtubeId"
        :player-width="500"
        :player-height="300">
        </youtube>
      </panel>
    </v-flex>
</v-layout>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import TripsService from '@/services/TripsService'
import PlacesService from '@/services/PlacesService'
import * as VueGoogleMaps from 'vue2-google-maps'
import VueYoutubeEmbed from 'vue-youtube-embed'
import Vue from 'vue'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyA-6E2Wiy4dKht8zbi54HI4gYvE7Q1Z36g',
    v: 'OPTIONAL VERSION NUMBER'
    // libraries: 'places', //// If you need to use place input
  }
})
Vue.use(VueYoutubeEmbed)
export default {
  data () {
    return {
      place: {},
      trip: null
    }
  },
  async mounted () {
    const placeId = this.$store.state.route.params.placeId
    this.place = (await PlacesService.show(placeId)).data
  },
  watch: {
    async place () {
      if (!this.isUserLoggedIn) {
        return
      }
      try {
        this.trip = (await TripsService.index({
          placeId: this.place.id,
          userId: this.$store.state.user.id
        })).data
      } catch (err) {
        console.log(err)
      }
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    async addToTrip () {
      try {
        this.trip = (await TripsService.post({
          placeId: this.place.id,
          userId: this.$store.state.user.id
        })).data
      } catch (err) {
        console.log(err)
      }
    },
    async removeFromTrip () {
      try {
        this.trip = await TripsService.delete(this.trip.id)
        this.trip = null
      } catch (err) {
        console.log(err)
      }
    },
    components: {
      VueGoogleMaps,
      VueYoutubeEmbed
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
.map-container {
    width: 500px;
    height: 300px;
  }
</style>