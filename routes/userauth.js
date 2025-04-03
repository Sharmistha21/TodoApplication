const express =require('express')
const {handleUserSignUp}= require('../controllers/userlogin')

const router=express.Router();

router.route('/signup').post(handleUserSignUp)

module.exports=router





