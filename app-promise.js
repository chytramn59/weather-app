const axios = require('axios');
const yargs = require('yargs');
const argv = yargs
.options({
  a:{
      demand:true,
      alias: 'address',
      describe: 'address to fetch weather for',
      string:true
  } 
})
.help()
.alias('help','h')
.argv;
var encodeAddress = encodeURIComponent(argv.address);
var geocodeUrl =`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`;

axios.get(geocodeUrl).then((response)=>{
    if(response.data.status === 'ZERO_RESULTS'){
       throw new Error('unable to find address');
    }
    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    var weatherUrl=`https://api.darksky.net/forecast/2ed80bd4d2d2c16cfeb540f757ce18bf/${lat},${lng}`;
    console.log(response.data.results[0].formatted_address);

    return axios.get(weatherUrl);

}).then((response)=>{
    var temperature = response.data.currently.temperature;
    var apparenttemp =response.data.currently.apparentTemperature;
    console.log(`the temperature is ${temperature}.It feels like ${apparenttemp}`)
})
.catch((e)=>{
    if(e.code === 'ENOTFOUND'){
        console.log('unable to connect to api');
    }
    else{
        console.log(e.message);
    }
});