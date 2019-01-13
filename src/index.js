var rawData = require('./data.json');

function getTimezonesWithCountryName(name) {
  if (!name) {
    return []
  }

  const countries = Object.values(rawData)
  const matchedCountry = countries.find(function(country) {

    const removedSpaceName = name.replace(/^\s+|\s+$/g, '');
    const lowerCountryName = country.name.toLowerCase().trim()
    const userEnteredCountryName = removedSpaceName.toLowerCase()

    // If user has entered both country name and city name together
    const nameSplit = name.toLowerCase().split(' ')

    return lowerCountryName === userEnteredCountryName || nameSplit.includes(lowerCountryName)
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
