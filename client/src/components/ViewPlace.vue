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
                
              </v-flex>
                
              <v-flex xs6>
                <img class="place-image" :src="place.placeImageUrl" />
              </v-flex>
            </v-layout>
    </panel>
    </v-flex>
    <v-flex xs6>
    <panel title="Map View">
      {{place.city}}
    </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import PlacesService from '@/services/PlacesService'
import Panel from '@/components/Panel'

export default {
  data () {
    return {
      place: null
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
</style>