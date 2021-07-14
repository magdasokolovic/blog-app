const router = require('express').Router()
const User = require('../models/User') 

router.post('/signup', async(req, res, next) => {
    console.log(req.body)
    const {email, password, confirmPassword} = req.body
    try{
        const user = await User.findOne({ email: email})
        if (!user){
            if (password === confirmPassword) {

            } else {
                console.log('Please confirm the password')
            }
        }
    }
    catch(err) {
        console.log(err)
    }
})
module.exports = router