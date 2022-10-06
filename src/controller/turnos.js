import isEmpty from "just-is-empty"
import moment from "moment/moment"
import axios from "axios"

export const listarTurnos = async (req, reply) => {
    const { id_agent, fecha } = req.body
    let fecha_agent = isEmpty(fecha) ? moment().format('YYYY-MM-DD') : fecha
    try {
        const { data, status } = await axios.get(`https://turnostvc.intelnexo.com/api/GetHorarios/${id_agent}/${fecha_agent}`)
        if (status == 200) {

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
    } catch (error) {
        console.log(error)
        reply.code(200).send({
            success: false,
            msg: 'Error al consultar de turnos'
        })
    }
}

export const createTurno = async (req, reply) => {

    try {
        const { user_id, agencia_id, horario, cedula, nombres, referencias, correo, fecha_turno, tipo_turno } = req.body
        const { data, status } = await axios.post(`https://turnostvc.intelnexo.com/api/CreateTurnoCliente`, {
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
        if (status == 200) {

            reply.code(200).send({
                success: true,
                data: data
            })

        }
    } catch (err) {
        if (err.response) {
            return err.response
        } else if (err.request) {
            return err.request
        }
    }

}



export const ConsultarTurno = async (req, reply) => {
    const { cedula } = req.params
    try {
        const { data, status } = await axios.get(`https://turnostvc.intelnexo.com/api/GetTurnoCliente/${cedula}`)
        if (status == 200) {

            reply.code(200).send({
                success: true,
                dara: data
            })

        } else {

            reply.code(200).send({
                success: false,
                msg: data
            })

        }
    } catch (error) {
        console.log(error)
    }
}

export const CancelarTurno = async (req, reply) => {
    const { user_id, cedula, ticket_id } = req.body
    try {
        const { data, status } = await axios.post(`https://turnostvc.intelnexo.com/api/CancelarTurnoCliente`, {
            user_id, cedula, ticket_id
        })
        if (status == 200) {

            reply.code(200).send({
                success: true,
                dara: data
            })

        } else {

            reply.code(200).send({
                success: false,
                msg: 'Error al cancelar el turno'
            })

        }
    } catch (error) {
        console.log(error)
    }
}