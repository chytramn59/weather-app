const request = require('request');

var getWeather = (lat,lng,callback)=>{
request({
    url:`https://api.darksky.net/forecast/2ed80bd4d2d2c16cfeb540f757ce18bf/${lat},${lng}`,
    json:true
},
   (error,response,body)=>{
       if(error){
           callback('unable to load server');
       }
       else if(response.statusCode === 400){
          callback("unable to fecth")
       }
       else if(response.statusCode === 200){
          callback(undefined,{
            Temperature:body.currently.temperature,
            Apparenttemp:body.currently.apparentTemperature
          });
       }
    //    or 
    //   if(!error && response.statusCode === 200){
    //       console.log(body.currently.temperature);
    //   }
    //   else{
    //       console.log('unable to fetch');
    //   }
    
});
}
module.exports.getWeather = getWeather;