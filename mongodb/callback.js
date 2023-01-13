const addSum=(a,b,callback) => {
    setTimeout(() => {
    if(typeof a !== 'number' || typeof b !== 'number') return callback('a,b must be numbers'); //return 으로 하단 함수 출력 안되게 하기
      callback(undefined, a+b)
    }, 3000);
}

let callback=(error,sum)=>{
//error:error key:value 랑 같으므로 error 하나로 지정함 return으로 error만 뜨게하기
    if(error) return console.log({error}); 
    console.log({sum})
}

//no.1
// addSum(10,'123',callback) 

//no.2 callback 지옥같히는예제
addSum(10,10,(error1,sum1)=>{
    if(error1) return console.log({error1});
    console.log({sum1})
    addSum(sum1,15,(error2,sum2)=>{
        if(error2) return console.log({error2})
        console.log({sum2})
    })
})
