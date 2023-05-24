const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email']
        // validate email here
    },
    thoughts: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Thoughts"
    },
    friends: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }]
})

userSchema.virtual('friendCount').get(function(){
    return `${this.friends.length}`;
})


const User = mongoose.model('User', userSchema);
module.exports = User