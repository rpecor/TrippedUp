const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const PlacesController = require('./controllers/PlacesController')

module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)
  app.post('/login',
    AuthenticationController.login)

  app.get('/places',
    PlacesController.index)
  app.get('/places/:placeId',
    PlacesController.show)
  app.post('/places',
    PlacesController.post)
  app.put('/places/:placeId',
    PlacesController.put)
}
