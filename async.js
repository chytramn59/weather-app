console.log("starting app");

setTimeout( ()=>{
    console.log("inside the call back")
},2000);
setTimeout ( ()=>{
    console.log("another call back")
},0000);


console.log("finishing app");