import cron from 'node-cron'
import { Token } from '../model/token';


(async () => {
    cron.schedule('*/1 * * * *', async () => {
        console.log('running a task every minute');
        const token = await Token.find()
        // console.log("Token-->",token)
    })
})()