const mongoose = require('mongoose');

// Data scheme
const dreamSchema = new mongoose.Schema({
    nightOf: {type: Date, required: true},
    setting: {type: String, required: false},
    description: {type: String, required: true},
    emotions: {type: String, required: false}
});

const dream = mongoose.model('dream', dreamSchema);

// Export dream to have access to it across app
module.exports = dream;