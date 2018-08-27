// var somePromise = new Promise((reslove,reject)=>{

//     setTimeout(()=>{
//         reslove('Hi it worked');
//     },2500);

// });

// somePromise.then((message)=>{
//     console.log('success:',message);
// },(errorMessage)=>{
//     console.log('Error:',errorMessage);
// });


var asyncAdd = (a,b)=>{
    return new Promise((reslove,reject)=>{
        setTimeout(()=>{
            if(typeof a === 'number' && typeof b === 'number'){
                reslove(a+b);
            }
            else{
                reject('argument must be number');
            }
        },1500);
    })
}

asyncAdd(5,3).then((res)=>{
    console.log('result:',res);
},(errorMessage)=>{
    console.log('error:',errorMessage);
}
)