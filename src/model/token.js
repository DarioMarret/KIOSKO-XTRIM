const { Schema, model } = require('mongoose');

const token = new Schema({
    email: String,
    token: String,
    fechaCreacion: String,
    estado: Boolean,
    agencia: String
}, { timeseries: true, versionKey: false });


export const Token = model('Token', token);