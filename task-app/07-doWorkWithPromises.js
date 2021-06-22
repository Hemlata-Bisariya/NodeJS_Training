const doWorkWithPromises = new Promise((resolve,reject) =>{               //constructor functin
    setTimeout(()=>{
       // resolve([1,2,3]);
        reject("I am errror")
    },2000)
})

doWorkWithPromises.then((result)=>{
    console.log("Success",result)
})