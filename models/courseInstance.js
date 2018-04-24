var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CourseInstancesSchema = new Schema({
    _id: {type: mongoose.Schema.Types.ObjectId, index: {unique: true}},
    members: [
        {
            type: mongoose.Schema.Types.ObjectId
        }
    ]
},{ collection: 'course.instances' });

module.exports = mongoose.model('CourseInstancesSchema', CourseInstancesSchema);