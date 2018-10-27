const mongoose = require("mongoose");

const { Schema } = mongoose;

const statsSchema = new Schema({
    stats: Array,
    
    date: {
        created: { type: Date, default: Date.now }
    },
    
    user: {
        type: Schema.Types.ObjectId,
        ref: "user"
    }
});

const stats = mongoose.model("stats", statsSchema);

module.exports = stats;