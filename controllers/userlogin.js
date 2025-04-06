const User=require('../Models/userSchema')

async function handleUserSignUp(req,res){
         try{
            //check if email exists in request body 
            //check if email already exists in database
            const data=new User(req.body);
            const userlogin=await data.save();
            res.status(201).json({userlogin});
         }catch(error){
            res.status(500).json({msg:"sign up unsuccesful"})
         }
      
         

}

async function handleUserSignIn(req,res){
  
      try{
        const{username,email}=req.body;
        const user=await User.findOne({email});
        if(!user){
         res.status(400).json({msg:"User not found"})
        }else{
         res.status(200).json({msg:"sign in successful"})
        }
      }
    catch(error){
         res.status(400).json({msg:"sign in unsuccessful"})
    }
}

module.exports={handleUserSignUp,handleUserSignIn}

