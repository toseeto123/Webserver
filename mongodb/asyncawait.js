const { createStaticHandler } = require("@remix-run/router");

const addSum=(a,b)=> new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(typeof a !== 'number' || typeof b !== 'number') {
            reject('a,b must be numbers');
        }
        resolve(a+b)

    },1000);
})

// no.1
// addSum(10,20)
//     .then((sum) => console.log({sum}))
//     .catch((error)=> console.log({error}))

//no.2
// addSum(10,10)
//     .then(sum1 => addSum(sum1,1))
//     .then(sum1 => addSum(sum1,1))
//     .then(sum1 => addSum(sum1,1))
//     .then(sum1 => addSum(sum1,1))
//     .then(sum=>console.log({sum}))
//     .catch((error)=> console.log({error}))

const totalSum = async() => {
    try{
        let sum=await addSum(10,10)
        let sum2=await addSum(sum,10)
        console.log({sum,sum2})
    }catch(err){
        if(err) console.log({err})
    }
}

totalSum();