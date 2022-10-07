import axios from "axios"



export const EnviarTokenEmail = async (email, token) => {

    try {
        const { data, status } = await axios.post('http://automation.xfiv.chat/sender_email/email/notificaciones', {
            email,
            asunto: "Token de verificación Kiosko",
            content: `"<h1>Welcome a Kiosko Xtrim</h1>
            <p>Este es tu token de verificación: ${token}</p>`
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ZW1haWxfbm90aWZpY2FjaW9uZXM6ZW1haWxfbm90aWZpY2FjaW9uZXMrMjAyMi4=`
            },
        })
        if (data) {
            return true
        } else {
            return false
        }
    } catch (error) {
        console.log(error)
    }


}