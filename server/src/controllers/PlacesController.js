const {Place} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const places = await Place.findAll({
        limit: 10
      })
      res.send(places)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to fetch the place. '
      })
    }
  },
  async show (req, res) {
    try {
      const place = await Place.findById(req.params.placeId)
      res.send(place)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to fetch the place. '
      })
    }
  },
  async post (req, res) {
    try {
      const place = await Place.create(req.body)
      res.send(place)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to create the place. '
      })
    }
  },
  async put (req, res) {
    try {
      const place = await Place.update(req.body, {
        where: {
          id: req.params.placeId
        }
      })
      res.send(req.body)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to update the place. '
      })
    }
  }
}
