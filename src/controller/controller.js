import axios from "axios"
import moment from "moment"
moment.locale("es")




export const buscarEstatusCuenta = async (req, reply) => {
    const { cedula } = req.body
    try {
        const { data, status } = await axios.post('https://whatsapp.grupotvcable.com:9007/api/tvcable/buscarEstatusCuenta', {
            Identificacion: cedula
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.TOKEN}`
            },
        })
        if (status === 200) {
            reply.code(200).send({
                success: true,
                dara: data.Objeto
            })
        } else {
            reply.code(401).send({
                success: false,
                msg: 'Error al consultar el estatus de la cuenta'
            })
        }
    } catch (error) {
        console.log(error)
    }
}

export const buscarCuentas = async (req, reply) => {
    const { cedula } = req.body
    try {
        const { data, status } = await axios.post('https://whatsapp.grupotvcable.com:9007/api/tvcable/buscarCuentas', {
            Identificacion: cedula
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.TOKEN}`
            },
        })
        if (status === 200) {
            reply.code(200).send({
                success: true,
                dara: data.Objeto
            })
        } else {
            reply.code(401).send({
                success: false,
                msg: 'Error al consultar el estatus de la cuenta'
            })
        }
    } catch (error) {
        console.log(error)
    }
}


export const LinkPago = async (req, reply) => {
    const { cuenta, cedula, contrato, email } = req.body
    try {
        const { data, status } = await axios.post('https://whatsapp.grupotvcable.com:9007/api/tvcable/LinkPago', {
            tipo: "Mensualidad",
            cuenta: cuenta,
            cedula: cedula,
            contrato: contrato,
            sistema: "ChatBot",
            canalNotificaciones: [
                {
                    tipo: "email",
                    canalEnvio: "masterbase",
                    valores: [email]
                }
            ],
            fechavencimiento: moment().add(1, 'days').format('YYYY-MM-DD HH:mm:ss')
        },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${process.env.TOKEN}`
                },
            })
        if (status === 200) {
            reply.code(200).send({
                success: true,
                data: data.Objeto
            })
        } else {
            reply.code(401).send({
                success: false,
                msg: 'Error al consultar el estatus de la cuenta'
            })
        }
    } catch (error) {
        console.log(error)
    }
}

export const buscarCuentaSaldo = async (req, reply) => {
    const {  cedula } = req.body
    try {
        const { data, status } = await axios.post('https://whatsapp.grupotvcable.com:9007/api/tvcable/buscarCuentaSaldo', {
            Identificacion: cedula
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.TOKEN}`
            },
        })
        if (status === 200) {
            reply.code(200).send({
                success: true,
                dara: data.Objeto
            })
        } else {
            reply.code(401).send({
                success: false,
                msg: 'Error al consultar el estatus de la cuenta'
            })
        }
    } catch (error) {
        console.log(error)
    }
}
