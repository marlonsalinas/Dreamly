const mongoose = require('mongoose');

// Data scheme
const dreamSchema = new mongoose.Schema({
    nightOf: {type: Date, required: true},
    setting: {type: String, required: false},
    description: {type: String, required: true},
    emotions: {type: String, required: false}
});

const dreams = mongoose.model('dreams', dreamSchema);

// Export dream to have access to it across app
module.exports = dreams;