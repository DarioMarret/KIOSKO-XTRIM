import axios from "axios"
import isEmpty from "just-is-empty"
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
        if (data.Objeto != null) {
            reply.code(200).send({
                success: true,
                dara: data.Objeto
            })
        } else {
            reply.code(200).send({
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
        if (data.Objeto != null) {
            reply.code(200).send({
                success: true,
                dara: data.Objeto
            })
        } else {
            reply.code(200).send({
                success: false,
                msg: 'Error al consultar el estatus de la cuenta'
            })
        }
    } catch (error) {
        console.log(error)
    }
}


export const LinkPago = async (req, reply) => {
    const { cuenta, cedula, contrato, email, tipo } = req.body
    try {
        const { data, status } = await axios.post('https://whatsapp.grupotvcable.com:9007/api/tvcable/LinkPago', {
            tipo: tipo,
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

export const LinkPagoCorreo = async (req, reply) => {
    const { cuenta, cedula, contrato, email, tipo } = req.body
    try {
        const { data, status } = await axios.post('https://whatsapp.grupotvcable.com:9007/api/tvcable/LinkPagoCorreo', {
            tipo: tipo,
            cuenta: cuenta,
            cedula: cedula,
            contrato: contrato,
            sistema: "CRMWeb",
            canalNotificaciones: [
                {
                    tipo: "email",
                    canalEnvio: "masterbase",
                    valores: [email]
                }
            ],
            fechavencimiento: moment().add(1, 'days').format('YYYY-MM-DD')
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
    const { cedula } = req.body
    try {
        const { data, status } = await axios.post('https://whatsapp.grupotvcable.com:9007/api/tvcable/buscarCuentaSaldo', {
            Identificacion: cedula
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.TOKEN}`
            },
        })
        if (data.Objeto != null || Object.keys(data.Objeto).length > 0) {
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

export const planUpgrade = async (req, reply) => {
    const { NumeroContrato } = req.params
    try {
        const { data, status } = await axios.get(`https://whatsapp.grupotvcable.com:1299/api/whatsappstore/ConsultaNuevoPlanIdPromo?contrato=${NumeroContrato}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${process.env.TOKEN_PLAN}`
            },
        })
        if (data.CodigoError == "0") {
            reply.code(200).send({
                success: true,
                dara: data.Objeto
            })
        } else {
            reply.code(200).send({
                success: false,
                msg: 'Error al consultar el estatus de la cuenta'
            })
        }
    } catch (error) {
        console.log(error)
    }
}

export const ProblemadeServicio = async (req, reply) => {
    const { Mac } = req.body
    console.log(Mac)
    try {
        const { data, status } = await axios.get(`http://200.63.212.5:8080/api/terminals/${Mac}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${process.env.TOKEN_PLAN}`
            },
        })
        if (status == 200) {
            reply.code(200).send({
                success: true,
                dara: data
            })
        }
    } catch (error) {
        console.log(error)
    }
}

export const BuroCliente = async (req, reply) => {
    const { cedula } = req.body
    try {
        const { data, status } = await axios.post(`https://whatsapp.grupotvcable.com:12001/api/whatsappstore/BuroCliente`, {
            cedula: cedula
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${process.env.TOKEN_PLAN}`
            },
        })
        if (status == 200) {
            reply.code(200).send({
                success: true,
                dara: data
            })
        } else {
            reply.code(200).send({
                success: false,
                dara: data
            })
        }
    } catch (error) {
        console.log(error)
    }
}
export const ConsultaPlanActual = async (req, reply) => {
    const { contrato } = req.body
    try {
        const { data, status } = await axios.get(`https://whatsapp.grupotvcable.com:1299/api/whatsappstore/ConsultaNuevoPlanIdPromo?contrato=${contrato}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${process.env.TOKEN_PLAN}`
            },
        })
        if (status == 200) {
            reply.code(200).send({
                success: true,
                dara: data
            })
        } else {
            reply.code(200).send({
                success: false,
                dara: data
            })
        }
    } catch (error) {
        console.log(error)
    }
}
export const RegistroAutomatico = async (req, reply) => {
    const { cedula, Contrato, Cuenta, Product_id, Rootcitem, PlanActual, PlanNuevo, IdPromo, Correo, MegasNuevo, PrecioNuevo, Tecnologia } = req.body
    const { data, status } = await axios.post(`https://whatsapp.grupotvcable.com:1299/api/whatsappstore/CambiaPlanWhatsApp`, {
        cedula,
        Contrato,
        Cuenta,
        Product_id,
        Rootcitem,
        PlanActual,
        PlanNuevo,
        Origen: "KIOSKOVIRTUAL",
        IdPromo,
        ParametrosAdicionales: {
            Correo,
            MegasNuevo,
            PrecioNuevo,
            Tecnologia,
        }
    }, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${process.env.TOKEN_PLAN}`
        },
    })
    if (status == 200) {
        reply.code(200).send({
            success: true,
            dara: data
        })
    } else {
        reply.code(200).send({
            success: false,
            dara: data
        })
    }
}