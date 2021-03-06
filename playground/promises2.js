const request = require('request');

var geocodeAddress = (address)=>{
    return new Promise((reslove,reject)=>{
        var encodeAddress = encodeURIComponent(address);
        request({
            url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`,
            json:true
        },
        (error,response,body)=>{
            if(error){
                reject("unable to connect to the servers");
            }
            else if(body.status === 'ZERO_RESULTS'){
                reject('unable to conncet to the address')
            }
            else if(body.status === 'OK'){
            reslove({
                address:body.results[0].formatted_address,
                latitude:body.results[0].geometry.location.lat,
                longitude:body.results[0].geometry.location.lng
            });
            }
        
        });
    });
};



geocodeAddress('19146').then((location)=>{
    console.log(JSON.stringify(location,undefined,2));
},(errorMessage)=>{
    console.log(errorMessage)
});