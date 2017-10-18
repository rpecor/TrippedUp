import api from '@/services/api'

export default {
  index (search) {
    return api().get('places', {
      params: {
        search: search
      }
    })
  },
  show (placeId) {
    return api().get(`places/${placeId}`)
  },
  post (place) {
    return api().post('places', place)
  },
  put (place) {
    return api().put(`places/${place.id}`, place)
  }
}

