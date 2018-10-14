const mongoose = require('mongoose');
//const Schema = mongoose.Schema;
//destructuring : the mongoose object has a property called Schema. take that property and assign it to a new variable called Schema
const { Schema } = mongoose;
//a Schema allows mongoose to define which properties each user will have.
//Add or delete properties to the userSchema as necessary
const userSchema = new Schema({
    fitbitId: String,
    displayName: String,
    age: Number,
    avgDailySteps: Number

});
const User = mongoose.model('user', userSchema)
//This creates a mongoose class model therefore creating a collection in mongoDB. model is a built in mongoose function.
// mongoose.model('users', userSchema);
module.exports = User;

