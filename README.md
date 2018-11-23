# country-timezone
Find timezone with country code and country name

#### Install
```
npm install country-timezone --save
```
OR install with yarn
```
yarn add country-timezone
```

#### Get time with country name and country code
```
import countryTimezone from 'country-timezone';

const timezonesWithName = countryTimezone.getTimezonesWithCountryName('India');
const timezonesWithCode = countryTimezone.getTimezonesWithCountryCode('IN');

console.log(timezonesWithName, timezonesWithCode);
// [ 'Asia/Kolkata' ] [ 'Asia/Kolkata' ]
```
