//non-blocking 개념이해를 위한 예제

console.log('start')

setTimeout(function(){
    console.log('your meal is ready')
},3000);

console.log('end')