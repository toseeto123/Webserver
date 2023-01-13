//callback.js 와 Promise 생성자 비교 >> Promise 라이브러리 거의 사용할거임
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
addSum(10,10)
    .then(sum1 => addSum(sum1,1))
    .then(sum1 => addSum(sum1,1))
    .then(sum1 => addSum(sum1,1))
    .then(sum1 => addSum(sum1,1))
    
    .then(sum=>console.log({sum}))
    .catch((error)=> console.log({error}))

