var rawData = require('./data.json');

export const getTimezonesWithCountryName = (name) => {
  const countries = Object.values(rawData)
  const matchedCountry = countries.find((country) => {
    return country.name === name
  })

  if (!matchedCountry) {
    return []
  }

  return matchedCountry.timezones
}

export const getTimezonesWithCountryCode = (code) => {
  const matchedCountry = rawData[code]

  if (matchedCountry) {
    return matchedCountry.timezones
  }

  return []
}