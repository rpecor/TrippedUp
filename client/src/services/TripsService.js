import api from '@/services/api'

export default {
  index (trip) {
    return api().get('trips', {
      params: trip
    })
  },
  post (trip) {
    return api().post('trips', trip)
  },
  delete (tripId) {
    return api().delete(`trips/${tripId}`)
  }
}

