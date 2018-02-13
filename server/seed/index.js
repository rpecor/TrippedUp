const {
  sequelize,
  Place,
  User,
  Trip
} = require('../src/models')

const Promise = require('bluebird')
const places = require('./places.json')
const users = require('./users.json')
const trips = require('./trips.json')

sequelize.sync({force: true})
  .then(async function () {
    await Promise.all(
      users.map(user => {
        User.create(user)
      })
    )
    await Promise.all(
      places.map(place => {
        Place.create(place)
      })
    )
    await Promise.all(
      trips.map(trip => {
        Trip.create(trip)
      })
    )
  })
