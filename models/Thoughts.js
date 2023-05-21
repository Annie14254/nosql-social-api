const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    thoughtText: {
        type: String,
        required: true,
        min: 1,
        max: 240,
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    username: {
        type: String,
        required: true
    },
    reactions: {
        // Array of nested documents created with the reaction schema
    }
})

userSchema.virtual('reactionCount').get(function(){
    return `${this.reactions.length}`;
})


const Thoughts = mongoose.model('Thoughts', userSchema);
module.exports = Thoughts