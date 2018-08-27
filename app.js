
const yargs = require('yargs');
 const geocode = require('./geocode/geocode');
 const weather = require('./weather/weather');



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

 geocode.geocodeAddress(argv.address,(errorMessage,results)=>{
     if(errorMessage){
         console.log('error in geocode');
     }
     else{
        console.log(results.address);
        weather.getWeather(results.latitude,results.longitude,(errorMessage,weatherResults)=>{
            if(errorMessage){
                console.log('error message');
            }
            else{
                console.log(`the current temp ${weatherResults.Temperature}.It feels like ${weatherResults.Apparenttemp}`);
            }
        });
     }
 });

// weather.getWeather(12.5193723,76.89172580000002,(errorMessage,weatherResults)=>{
//     if(errorMessage){
//         console.log('error occured');
//     }
//     else{
//         console.log(JSON.stringify(weatherResults,undefined,2));
//     }
// });


















// var encodeAddress = encodeURIComponent(argv.address);
// request({
//     url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`,
//     json:true
// },
// (error,response,body)=>{
    // console.log(JSON.stringify(body,undefined,2));
    // console.log(JSON.stringify(response,undefined,2));
    // console.log(JSON.stringify(error,undefined,2));
    // if(error){
    //     console.log("unable to connect to the servers");
    // }
    // else if(body.status === 'ZERO_RESULTS'){
    //     console.log('unable to conncet to the address')
    // }
    // else if(body.status === 'OK'){
    //     console.log(`Address:${body.results[0].formatted_address}`);
    // console.log(`latitude:${body.results[0].geometry.location.lat}`);
    // console.log(`longitude:${body.results[0].geometry.location.lng}`);
    // }

//     console.log(`Address:${body.results[0].formatted_address}`);
//     console.log(`latitude:${body.results[0].geometry.location.lat}`);
//     console.log(`longitude:${body.results[0].geometry.location.lng}`);
//  });


//2ed80bd4d2d2c16cfeb540f757ce18bf


