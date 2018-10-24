const mongoose = require('mongoose');
//const Schema = mongoose.Schema;
//destructuring : the mongoose object has a property called Schema. take that property and assign it to a new variable called Schema
const { Schema } = mongoose;
//a Schema allows mongoose to define which properties each user will have.
//Add or delete properties to the userSchema as necessary
const groupSchema = new Schema({
    name: String,
    bio: String,
    users: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});


const Group = mongoose.model('Group', groupSchema)
 module.exports = Group;
