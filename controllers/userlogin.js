const User=require('../Models/userSchema')
const jwt = require('jsonwebtoken')

async function handleUserSignUp(req,res){
         try{
            const data = req.body;
            //check if email exists in request body 
            if(!data.email)
               return res.status(400).json({msg:'Bad Request'})
            
            //check if email already exists in database
            const person = await User.findOne({ 'email': data.email });
            if(person != null)
               return res.status(402).json({msg: 'User Already exist'})
            
            const newUser=new User(req.body);
            const userlogin=await newUser.save();
            return res.status(201).json({userlogin});
         }catch(error){
            return res.status(500).json({msg:"sign up unsuccesful"})
         }     
}
async function handleUserSignIn(req,res){
  
      try{
        const{email, password}= req.body;
        if(!email || !password)
            return res.status(400).json({msg: 'Bad Request, Require more fileds'})

      //   Looking for email
        const user= await User.findOne({email});

        if(password != user.password)
            return res.status(401).json('Credentials are wrong!!')
      
      //   If Email don't exist on database
      if(!user)
         return res.status(400).json({msg: 'Email not found for the user'})

      // Creating JWT token
      const token = await jwt.sign({
         data: user._id.toString()}, 
         process.env.JWT_SECRET,
         {expiresIn: '30d'}
      );
      
       console.log(token)
      res.status(200).json({msg:"sign in successful", token});
        
      }
    catch(error){
         res.status(400).json({msg:"sign in unsuccessful"})
    }
}

module.exports={handleUserSignUp,handleUserSignIn}

