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
    avgDailySteps: Number,
<<<<<<< HEAD
    stats: [{
        type: Schema.Types.ObjectId,
        ref: "stats"
    }]

=======
    group: [{ type: Schema.Types.ObjectId, ref: 'Group' }]
>>>>>>> 389480d7c3d4cf936f94813159da78b9dd226b4b
});


 const User = mongoose.model('users', userSchema)
//This creates a mongoose class model therefore creating a collection in mongoDB. model is a built in mongoose function.
// mongoose.model('users', userSchema);
module.exports = User;

