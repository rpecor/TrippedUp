const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      )
    }

    const {error, value} = Joi.validate(req.body, schema)

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'You must provide a valid email address.'
          })
          break
        case 'password':
          res.status(400).send({
            error: `The password provided does not match the following rules:
            <br>
            1. It must contain only lower case letter, upper case letters and numbers
            <br>
            2. It must be at least 8 characters long and no more than 32 characters.
            `
          })
          break
        default:
          res.status(400).send({
            error: 'invalid reg info'
          })
      }
    } else {
      next()
    }
  }
}
