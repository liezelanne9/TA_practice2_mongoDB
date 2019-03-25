const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/TA_mongoose_practice').then(() => console.log(`~~~~ Connected to MongoDB ~~~~`))

const todoSchema = mongoose.Schema({
    name: {type: String, required: true, unique: true},
    priority: {type: Number, required: true}
});

const Todo = mongoose.model('todo', todoSchema);

module.exports = Todo;