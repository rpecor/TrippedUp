module.exports = (sequelize, DataTypes) => {
  const Place = sequelize.define('Place', {
    city: DataTypes.STRING,
    country: DataTypes.STRING,
    continent: DataTypes.STRING,
    placeImageUrl: DataTypes.STRING,
    youtubeId: DataTypes.STRING,
    airportCode: DataTypes.STRING
  })

  return Place
}
