import isEmpty from "just-is-empty"
import moment from "moment/moment"
import axios from "axios"
moment.locale("es")

export const listarTurnos = async (req, reply) => {
    const { id_agent, fecha } = req.body
    let fecha_agent = isEmpty(fecha) ? moment().format('YYYY-MM-DD') : fecha
    try {
        const { data, status } = await axios.get(`https://turnostvc.intelnexo.com/api/GetHorarios/${id_agent}/${fecha_agent}`)
        if (status == 200) {
            console.log(moment().format('HH:mm:ss'))
            let horarios = data
            console.log(horarios)
            var disponibles = horarios.filter(horario => {
                return horario.horario > moment().format('HH:mm:ss')
            })
            if (disponibles.length > 0) {
                reply.code(200).send({
                    success: true,
                    dara: disponibles
                })
            } else {
                reply.code(200).send({
                    success: false,
                    msg: 'No hay turnos disponibles'
                })
            }

        } else {

            reply.code(200).send({
                success: false,
                msg: 'Error al consultar de turnos'
            })

        }
    } catch (error) {
        console.log(error)
        reply.code(200).send({
            success: false,
            msg: 'Error al consultar de turnos'
        })
    }
}

export const createTurno = async (req, reply) => {

    const { user_id, agencia_id, horario, cedula, nombres, referencias, correo, fecha_turno, tipo_turno } = req.body
    if (isEmpty(horario) && isEmpty(fecha_turno)) {
        // const fecha_agent = moment().add(1, 'days').format('YYYY-MM-DD')
        const fecha_agent = moment().format('YYYY-MM-DD')
        const { data, status } = await axios.get(`https://turnostvc.intelnexo.com/api/GetHorarios/${agencia_id}/${fecha_agent}`)
        if (status == 200) {
            let horarios = data
            var disponibles = horarios.filter(horario => {
                // return horario.horario > moment().add(-5, 'hours').format('HH:mm:ss')
                return horario.horario > moment().format('HH:mm:ss')
            })
            if (disponibles.length > 0) {
                for (let index = 0; index < disponibles.length; index++) {
                    let element = disponibles[index]
                    if (element.disponibles > 0) {
                        const response = await fetch(`https://turnostvc.intelnexo.com/api/CreateTurnoCliente`, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                user_id,
                                agencia_id,
                                horario: element.horario,
                                cedula,
                                nombres,
                                referencias,
                                correo,
                                fecha_turno: fecha_agent,
                                tipo_turno
                            })
                        })
                        const data = await response.json()
                        if (data) {
                            reply.code(200).send({
                                success: true,
                                dara: {
                                    fecha: fecha_agent,
                                    horario: element.horario,
                                    ...data
                                }
                            })
                        }
                        return
                    }
                }
            } else {
                reply.code(200).send({
                    success: false,
                    msg: 'No hay turnos disponibles'
                })
            }
        }
    } else {
        const response = await fetch(`https://turnostvc.intelnexo.com/api/CreateTurnoCliente`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user_id,
                agencia_id,
                horario,
                cedula,
                nombres,
                referencias,
                correo,
                fecha_turno,
                tipo_turno
            })
        })
        const data = await response.json()
        if (data) {
            reply.code(200).send({
                success: true,
                dara: data
            })
        }
    }


}



export const ConsultarTurno = async (req, reply) => {
    const { cedula } = req.params
    // const { data, status } = await axios.get(`https://turnostvc.intelnexo.com/api/GetTurnoCliente/${cedula}`)

    const response = await fetch(`https://turnostvc.intelnexo.com/api/GetTurnoCliente/${cedula}`)
    const data = await response.json()
    if (data) {
        reply.code(200).send({
            success: true,
            dara: data
        })
    } else {
        reply.code(200).send({
            success: false,
            msg: 'Error al consultar de turnos'
        })
    }
}

export const CancelarTurno = async (req, reply) => {
    const { user_id, cedula, ticket_id } = req.body
    // const { data, status } = await axios.post(`https://turnostvc.intelnexo.com/api/CancelarTurnoCliente`, {
    //     user_id, cedula, ticket_id
    // })

    const response = await fetch(`https://turnostvc.intelnexo.com/api/CancelarTurnoCliente`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user_id, cedula, ticket_id
        })
    })
    const data = await response.json()
    if (data) {
        reply.code(200).send({
            success: true,
            dara: data
        })
    } else {
        reply.code(200).send({
            success: false,
            msg: 'Error al consultar de turnos'
        })
    }
}

