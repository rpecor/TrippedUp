import api from '@/services/api'

export default {
  index () {
    return api().get('places')
  },
  post (place) {
    return api().post('places', place)
  }
}

