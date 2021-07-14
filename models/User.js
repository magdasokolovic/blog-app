const mongoose = require('mongoose')
const {Schema} = mongoose

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false   
    },
    avatar: {
        type: String,
        default: "https://images.pexels.com/photos/4588019/pexels-photo-4588019.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    }

})

module.exports = User = mongoose.model('user', UserSchema)