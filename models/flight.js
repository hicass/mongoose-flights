const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const flightSchema = new mongoose.Schema({
    airline: {
        type: String, 
        enum: ['American', 'Southwest', 'United']
    },
    airport: {
        type: String, 
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'SAN'
    },
    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: function() {
            const currentDate = new Date().getFullYear();
            return currentDate + 1
        }
    }
});

// Compiling into a model and exporting it
module.exports = mongoose.model('Flight', flightSchema);