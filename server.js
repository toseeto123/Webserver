//server 기본세팅 
const express=require('express')
const app=express();

app.listen(8080,function(){
    console.log('listening on 8080')
});

//url로 요청 때려 박기위해 get으로 요청 >> 
//방법 : /pet으로 방문시에 pet 관련 안내문 띄우기 

app.get('/pet',function(request,response){
    response.send('펫용품 쇼핑 페이지입니다');
    // nodemon 추가하여 서버 재실행 귀찮은거 없앰
});

app.get('/beauty',function(request,response){
    response.send('뷰티용품 쇼핑 페이지입니다');
   
});
app.get('/',function(request,response){
    response.sendFile(__dirname + '/index.html');
});
app.get('/write',function(request,response){
    response.sendFile(__dirname + '/write.html');
});
