const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    admin: {
        type: Boolean,
        default: false
    }
});

// plugin passport to the userSchema
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);