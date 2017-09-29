module.exports = {
  register (req, res) {
    res.send({
      message: `Hi ${req.body.email}. the email was registered`
    })
  }
}
