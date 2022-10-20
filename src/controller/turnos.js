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
            var disponibles = horarios.filter(horario => {
                return horario.horario > moment().format('HH:mm:ss')
            })

            reply.code(200).send({
                success: true,
                dara: disponibles
            })

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
    // const { data, status } = await axios.post(`https://turnostvc.intelnexo.com/api/CreateTurnoCliente`, {
    //     user_id,
    //     agencia_id,
    //     horario,
    //     cedula,
    //     nombres,
    //     referencias,
    //     correo,
    //     fecha_turno,
    //     tipo_turno
    // })

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
    console.log(data)
    if (data) {
        reply.code(200).send({
            success: true,
            dara: data
        })
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

