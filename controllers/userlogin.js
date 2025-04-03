const User=require('../Models/userSchema')

async function handleUserSignUp(req,res){
         try{
            const data=new User(req.body);
            const userlogin=await data.save();
            res.status(201).json({userlogin});
         }catch(error){
            res.status(500).json({msg:"sign up unsuccesful"})
         }
      
         

}

module.exports={handleuserSignUp}

