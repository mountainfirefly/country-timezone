var rawData = require('./data.json');

// Find timezones with city name and country name.
function getTimezones(name) {
  if (!name) {
    return []
  }

  const countries = Object.values(rawData)
  const matchedCountry = countries.find(function(country) {
    // If country doesn't have cities array in it.
    if (!country.cities) {
      country.cities = []
    }

    const removedSpaceName = name.replace(/^\s+|\s+$/g, '');
    const lowerCountryName = country.name.toLowerCase().trim()
    const userEnteredCountryName = removedSpaceName.toLowerCase()

    // If user has entered both country name and city name together.
    const nameSplit = name.toLowerCase().split(' ')
    // User entered text matched with the country name.
    const matchedCountryName = lowerCountryName === userEnteredCountryName || nameSplit.includes(lowerCountryName)

    if (matchedCountryName) {
      return true
    }

    // Matching user entered text with cities name
    const matchCityName = country.cities.find((cityName) => {
      return cityName.toLowerCase() === name.toLowerCase()
    })

    if (matchCityName) {
      return true
    }

    return false
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
  getTimezones: getTimezones
}
