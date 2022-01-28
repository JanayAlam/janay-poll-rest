const { Schema, model } = require('mongoose');

const choiceSchema = new Schema(
    {
        choiceTitle: {
            type: String,
            trim: true,
            maxlength: 30,
            minlength: 5,
            required: true,
        },
        choiceDesc: {
            type: String,
            trim: true,
            maxlength: 350,
        },
        choicePhoto: {
            type: String,
            trim: true,
            default: 'images/defaults/choicePhoto/default.png',
        },
        poll: {
            type: Schema.Types.ObjectId,
            ref: 'Poll',
        },
        voters: [{
            type: Schema.Types.ObjectId,
            ref: 'Profile',
        }],
        voterCounter: {
            type: Number,
            required: true,
            default: 0,
        },
    },
    { timestamps: true }
);

const Choice = model('Choice', choiceSchema);

module.exports = Choice;
