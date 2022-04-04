const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const interviewSchema = mongoose.Schema({
    date: Date,
    type: String,
    status: String,
    technologies: String,
    link: String
})

const JobSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    company: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true,
        default: false
    },
    dateApplied: {
        type: Date,
        default: Date.now
    },
    description: {
        type: String
    },
    link: {
        type: String
    },
    interviews: [interviewSchema]
});

module.exports = Job = mongoose.model('Job', JobSchema);