import api from '@/services/api'

export default {
  index () {
    return api().get('places')
  },
  show (placeId) {
    return api().get(`places/${placeId}`)
  },
  post (place) {
    return api().post('places', place)
  }
}

