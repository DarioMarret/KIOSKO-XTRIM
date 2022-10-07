const { Schema, model } = require('mongoose');

const agencias = new Schema({
    id_agencia: String,
    nombre: String,
    ciudad: String,
    nemo: String,
    tipo: String,
    horario: String,
    caja: String,
}, { timeseries: true, versionKey: false });


export const Agencias = model('Agencias', agencias);