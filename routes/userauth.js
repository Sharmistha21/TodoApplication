const express =require('express')
const {handleUserSignUp,handleUserSignIn}= require('../controllers/userlogin')

const router=express.Router();

router.route('/signup').post(handleUserSignUp)
router.route('/signin').get(handleUserSignIn)

module.exports=router





