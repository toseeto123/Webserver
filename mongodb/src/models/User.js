//mongoose로 user 정보만듬 required(필수가아니면 타입만 적어줘도 가능하다.)
const {Schema,model} =require('mongoose');

const UserSchema=new Schema({

    username:{type:String,required:true, unique:true}, //username값에서 중복을 허용하지않기위해 unique 추가하여 중복방지
    name:{
        first:{type:String,required:true},
        last:{type:String,required:true}
    },
    age:Number,
    email:String
},{timestamps:true})

// 작업내용 몽구스한테 알려주기
const User=model('user',UserSchema)
module.exports={User}