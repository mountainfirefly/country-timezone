var rawData = require('./data.json');

function getTimezonesWithCountryName(name) {
  if (!name) {
    return []
  }

  const countries = Object.values(rawData)
  const matchedCountry = countries.find(function(country) {
    const removedSpaceName = name.replace(/^\s+|\s+$/g, '');
    return country.name.toLowerCase() === removedSpaceName.toLowerCase()
  })

  if (!matchedCountry) {
    return []
  }

  return matchedCountry.timezones
}

function getTimezonesWithCountryCode(code) {
  if (!code) {
    return []
  }

  const matchedCountry = rawData[code]

  if (matchedCountry) {
    return matchedCountry.timezones
  }

  return []
}

module.exports = {
  getTimezonesWithCountryCode: getTimezonesWithCountryCode,
  getTimezonesWithCountryName: getTimezonesWithCountryName
}
