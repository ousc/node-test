var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ClassRoomsSchema = new Schema({
    _id: {type: Object, index: {unique: true}},
    members: [
        {
            type: String
        }
    ]
});

module.exports = mongoose.model('ClassRoom', ClassRoomsSchema);