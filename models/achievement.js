var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EarnedachievementsSchema = new Schema({
    _id: {
        type: Object,
        default:mongoose.Types.ObjectId()
    },
    user: String,
    achievement: {
        type: String,
        default: '53ed2e2bbbcf5c0000f8b6ac'
    },
    achievementName: {
        type: String,
        default: 'Signed Up'
    },
    changed: {
        type: Date,
        default: new Date()
    },
    earnedPoints: {
        type: Number,
        default: 20
    },
    earnedGems: {
        type: Number,
        default: 0
    },
    notified: {
        type: Boolean,
        default: true
    },
    __v: {
        type: Number,
        default: 0
    },
    earnedRewards: {
        gems: {
            type: Number,
            default: 0
        }
    }
});

module.exports = mongoose.model('Earnedachievement', EarnedachievementsSchema);