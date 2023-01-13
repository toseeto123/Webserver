const express=require('express')
const app=express();
const {userRouter}=require('./routes/userRoute')
const mongoose=require('mongoose')


// const users=[];

const MONGO_URI='mongodb+srv://toseeto:213skatn@mongodbtutorial.hhoa5sj.mongodb.net/BlogService?retryWrites=true&w=majority';
mongoose.set('strictQuery', false); // 해당구간 세팅은 존재해야함.

//함수 server로 mongodb연결에 대한 내용감싸줌s
const server= async()=>{
    try{
        // mongoose6.0 들어오면서 뒷부분 MONGO_URI 뒷부분 필요없는 코드로 에러발생함 
        await mongoose.connect(MONGO_URI);
        mongoose.set('debug',true) // 몽구스로 쿼리 변화를 어떻게해주는지 나타내줌
        console.log('Mongodb connected')
        // console.log({mongodbConnection}) << 서버연결 확인용 log찍기
        app.use(express.json())

        app.use('/user',userRouter)

        app.listen(3000, () => console.log('server listening on port 3000'))
    }catch(err){
        console.log(err)
    }
}

server();