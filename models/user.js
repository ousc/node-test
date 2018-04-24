var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    slug: String,
    name: String,
    email: String,
    role: {type:String,default:'student'},
    passwordHash: {
        type: String,
        default: '6395106e872da27af5ef52c11ac1c19c637c0ece89a1cfc9c3173ab5deea285caa31f5a6f289d3b9e9ffcecacc8830a1c272ac05b595266ecacb034472566294'
    },
    createdOnHost: {
        type: String,
        default: 'xy.imayuan.com'
    },
    preferredLanguage: {
        type: String,
        default: 'zh-HANS'
    },
    courseInstance: {
        type: Array,
        default: ["5adec7e447560503235d9f3f", "5adec7f847560503235d9f41", "5adec7fd47560503235d9f43", "5adec80047560503235d9f45", "5adec80347560503235d9f47", "5adec80e47560503235d9f49", "5adec95e47560503235d9f5f"]
    },
    testGroupNumber: {
        type: Number,
        default: 165
    },
    anonymous: {
        type: Boolean,
        default: false
    },
    points: {
        type: Number,
        default: 20
    },
    __v: {
        type: Number,
        default: 0
    },
    referrer: {
        type: String,
        default: 'http://xy.imayuan.com/students'
    },
    heroConfig: {
        thangType: {
            type: String,
            default: '53e12be0d042f23505c3023b'
        }
    },
    firstName: String,
    lastName: String,
    //todo 时区问题
    dateCreated: {
        type:Date,
        default:new Date()
    },
    emails: {
        generalNews:{
            enabled:{
               type:Boolean,
               default:true
            }
        }
    },
});

module.exports = mongoose.model('User', UserSchema);