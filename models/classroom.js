var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ClassRoomsSchema = new Schema({
    _id: {type: mongoose.Schema.Types.ObjectId, index: {unique: true}},
    members: [
        {
            type: mongoose.Schema.Types.ObjectId
        }
    ]
});

module.exports = mongoose.model('ClassRoom', ClassRoomsSchema);