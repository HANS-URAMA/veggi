const mongoose = require('mongoose');

let providersSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    }
});

let Providers = mongoose.model('Providers', providersSchema);
module.exports = Providers;