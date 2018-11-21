var rawData = require('./data.json');

function getTimezonesWithCountryName(name) {
  const countries = Object.values(rawData)
  const matchedCountry = countries.find(function(country) {
    return country.name === name
  })

  if (!matchedCountry) {
    return []
  }

  return matchedCountry.timezones
}

function getTimezonesWithCountryCode(name) {
  const matchedCountry = rawData[code]

  if (matchedCountry) {
    return matchedCountry.timezones
  }

  return []
}

module.exports = {
  getTimezonesWithCountryCode: getTimezonesWithCountryName,
  getTimezonesWithCountryName: getTimezonesWithCountryName
}
