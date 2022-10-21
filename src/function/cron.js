import cron from 'node-cron'
import { Token } from '../model/token';


(async () => {
    cron.schedule('*/1 * * * *', async () => {
        const token = await Token.find()
        token.forEach(async (element) => {
            const fechaCreacion = new Date(element.fechaCreacion)
            const fechaActual = new Date()
            const diferencia = fechaActual.getTime() - fechaCreacion.getTime()
            const minutos = Math.round(diferencia / (1000 * 60))
            console.log(minutos)
            if (minutos > 5) {
                await Token.deleteOne({ token: element.token })
                // await Token.findOneAndUpdate({ token: element.token }, { estado: false })
            }
        });
        // console.log("Token-->",token)
    })
})()