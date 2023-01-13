const {Router} =require('express');
const userRouter= Router();
const {User}=require('../models/User')

userRouter.get('/',async (req,res) => {
    // res.send({users: users})
    try{
        const users= await User.find({});
        return res.send({users})
    }catch(err){
        console.log(err);
        return res.status(500).send({err:err.message}) 
    }
})
userRouter.get('/:userId',async(req,res)=>{
    // console.log(req.params)
    
    try{
        const {userId}=req.params;
        if(!mongoose.isValidObjectId(userId)) return res.status(400).send({err:"invalid useriId"})
        const user=await User.findOne({ _id: userId });
        return res.send({user});
    }catch(err){
        console.log(err);
        return res.status(500).send({err:err.message}) 
    }
})

userRouter.post('/', async (req,res) => {
    //try&catch로 감싸기
    try{
        let { username , name } = req.body;

        if(!username) return res.status(400).send({err:"username is required"});
        if(!name || !name.first || !name.last) return res.status(400).send({err:"Both first and lat names are required"});

        const user = new User(req.body);
        await user.save();
        return res.send({user})
    }catch(err){
        console.log(err);
        return res.status(500).send({err:err.message})
    }
}) 

userRouter.delete('/:userId' ,async(req,res) => {
    try{
        const { userId }=req.params;
        if(!mongoose.isValidObjectId(userId)) return res.status(400).send({err:"invalid userId"})
        const user= await User.findOneAndDelete({ _id:userId }); //null을 리턴했을때도 존재하지않는 유저id를 삭제하기로
        return res.send({ user })
    } catch(err){
        console.log(err);
        return res.status(500).send({err:err.message})
    }
})

userRouter.put('/:userId',async (req,res)=>{
    try{
        const { userId }=req.params;
        if(!mongoose.isValidObjectId(userId)) return res.status(400).send({err:"invalid userId"})
        const {age,name} = req.body;
        if(!age&& !name) return res.status(400).send({err:"age or name is required"});
      
        if(age && typeof age !== 'number') return res.status(400).send({err: "age must be a number"})
        if( name && typeof name.first !== 'string' && typeof name.last !== 'string') return res.status(400).send ({err:"first and last name are string "})
        
        let updateBody={};
        if (age) updateBody.age=age;
        if(name) updateBody.name=name;

        //mongoose를 통해 좀더 깔끔하게 업데이트 되는 메소드
        const user= await User.findByIdAndUpdate(userId,updateBody, {new:true}); //new:true 를 추가하지않으면 업뎃전의 값만 출력으로나옴
        return res.send({user})

    }catch(err){
        console.log(err);
        return res.status(500).send({err:err.message})
    }
})

module.exports={
    userRouter
}