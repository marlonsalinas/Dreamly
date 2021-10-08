const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Data scheme
const dreamSchema = new Schema({
    nightOf: {type: String, required: true},
    setting: {type: String, required: false},
    description: {type: String, required: false},
    emotions: {type: String, required: false}
});

const dreams = mongoose.model('dreams', dreamSchema);

// Export dream to have access to it across app
module.exports = dreams;