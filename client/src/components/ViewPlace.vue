<template>
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
                  {{place.latitude}}
                </div>
                <div class="place-continent">
                  {{place.longitude}}
                </div>
              </v-flex>
                
              <v-flex xs6>
                <img class="place-image" :src="place.placeImageUrl" />
              </v-flex>
            </v-layout>
    </panel>
    </v-flex>
    <v-flex xs6>
    <panel title="Place Data">
      <gmap-map
    :center="{lat: place.latitude, lng: place.longitude}"
    :zoom="11"
    style="width: 500px; height: 300px"
  >
    </gmap-map>

    <!-- <gmap-map :center="{lat:1.38, lng:103.8}" :zoom="12"   style="width: 500px; height: 300px"> -->
      
    </gmap-map>
    </panel>
    </v-flex>
  </v-layout>
</template>

<script>

import PlacesService from '@/services/PlacesService'
import Panel from '@/components/Panel'
import * as VueGoogleMaps from 'vue2-google-maps'
import Vue from 'vue'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyA-6E2Wiy4dKht8zbi54HI4gYvE7Q1Z36g',
    v: 'OPTIONAL VERSION NUMBER'
    // libraries: 'places', //// If you need to use place input
  }
})
export default {
  data () {
    return {
      place: {}
    }
  },
  async mounted () {
    const placeId = this.$store.state.route.params.placeId
    this.place = (await PlacesService.show(placeId)).data
  },
  components: {
    Panel
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