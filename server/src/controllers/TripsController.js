const {Trip} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const {placeId} = req.query
      const trip = await Trip.findOne({
        where: {
          PlaceId: placeId
        }
      })

      res.send(trip)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to fetch the trip. '
      })
    }
  },
  async post (req, res) {
    try {
      const {placeId, userId} = req.body
      const trip = await Trip.findOne({
        where: {
          PlaceId: placeId,
          UserId: userId
        }
      })
      if (trip) {
        return res.status(400).send({
          error: 'you already have this place added to this trip'
        })
      }

      const newAddToTrip = await Trip.create({
        PlaceId: placeId,
        UserId: userId
      })
      res.send(newAddToTrip)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to add the place to the trip. '
      })
    }
  },
  async delete (req, res) {
    try {
      const {tripId} = req.query
      const trip = await Trip.findOne(tripId)
      await trip.destroy()
      res.send(trip)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to remove the place from your trip. '
      })
    }
  }
}
