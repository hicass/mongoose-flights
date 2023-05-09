const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const destinationSchema = new Schema ({
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
    },
    arrival: { type: Date }
});

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
            const currentDate = new Date().getFullYear().toDateString();
            return currentDate + 1
        }
    },
    destinations: [destinationSchema]
});

// Compiling into a model and exporting it
module.exports = mongoose.model('Flight', flightSchema);