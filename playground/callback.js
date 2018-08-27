var getUser = (id,callback)=>{
 var User ={
    id:id,
    name:"chytra",
 }
 setTimeout(()=>{
   callback(User);  
 },3000);

};

getUser(30,(User)=>{
    console.log(User);
});