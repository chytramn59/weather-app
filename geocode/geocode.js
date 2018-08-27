const request = require('request');

var geocodeAddress = (address,callback) =>{
    var encodeAddress = encodeURIComponent(address);
request({
    url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`,
    json:true
},
(error,response,body)=>{

    // console.log(JSON.stringify(body,undefined,2));
    // console.log(JSON.stringify(response,undefined,2));
    // console.log(JSON.stringify(error,undefined,2));
    if(error){
        callback("unable to connect to the servers");
    }
    else if(body.status === 'ZERO_RESULTS'){
        callback('unable to conncet to the address')
    }
    else if(body.status === 'OK'){
    //     console.log(`Address:${body.results[0].formatted_address}`);
    // console.log(`latitude:${body.results[0].geometry.location.lat}`);
    // console.log(`longitude:${body.results[0].geometry.location.lng}`);
    callback(undefined,{
        address:body.results[0].formatted_address,
        latitude:body.results[0].geometry.location.lat,
        longitude:body.results[0].geometry.location.lng
    });
    }

});
}

module.exports.geocodeAddress = geocodeAddress;