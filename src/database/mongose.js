import mongoose from 'mongoose'
import 'dotenv/config'

mongoose.connect(`${process.env.MONGO_HOST}${process.env.TABLE}`)
    .then(db => console.log('Conectado a MongoDB'))
    .catch(err => console.log(err));