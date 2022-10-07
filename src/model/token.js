const { Schema, model } = require('mongoose');

const token = new Schema({
    email: String,
    token: String,
}, { timeseries: true, versionKey: false });


export const Token = model('Token', token);