# country-timezone
Find timezone with city name, country name and country code

#### Install
```
npm install country-timezone --save
```
OR install with yarn
```
yarn add country-timezone
```

#### Get time with city name, country name and country code
```
import countryTimezone from 'country-timezone';

const timezonesWithCountryName = countryTimezone.getTimezones('India');
const timezonesWithCityName = countryTimezone.getTimezones('New Delhi');
const timezonesWithCode = countryTimezone.getTimezonesWithCountryCode('IN');

console.log(timezonesWithCountryName, timezonesWithCityName, timezonesWithCode, );
// [ 'Asia/Kolkata' ] [ 'Asia/Kolkata' ] [ 'Asia/Kolkata' ]
```
