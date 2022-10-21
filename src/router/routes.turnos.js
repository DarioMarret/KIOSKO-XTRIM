import { CancelarTurno, ConsultarTurno, createTurno, listarTurnos } from "../controller/turnos"


const routes = [
    {
        path: '/api/v1/listarTurnos',
        method: 'POST',
        schema: {
            body: {
                type: 'object',
                properties: {
                    id_agent: { type: 'string' },
                    fecha: { type: 'string' },
                },
                required: ['id_agent']
            },
        },
        handler: listarTurnos
    },
    {
        path: '/api/v1/createTurno',
        method: 'POST',
        schema: {
            body: {
                type: 'object',
                properties: {
                    user_id: { type: 'string' },
                    agencia_id: { type: 'string' },
                    horario: { type: 'string' },
                    cedula: { type: 'string' },
                    nombres: { type: 'string' },
                    referencias: { type: 'string' },
                    correo: { type: 'string', format: 'email' },
                    fecha_turno: { type: 'string', format: 'date' },
                    tipo_turno: { type: 'string' },
                },
                required: ['user_id', 'agencia_id', 'cedula', 'nombres', 'referencias', 'correo', 'tipo_turno']
            },
        },
        handler: createTurno
    },
    {
        path: '/api/v1/ConsultarTurno/:cedula',
        method: 'GET',
        schema: {
            params: {
                type: 'object',
                properties: {
                    cedula: { type: 'string' },
                },
                required: ['cedula']
            },
        },
        handler: ConsultarTurno
    },
    {
        path: '/api/v1/CancelarTurno',
        method: 'POST',
        schema: {
            body: {
                type: 'object',
                properties: {
                    user_id: { type: 'string' },
                    cedula: { type: 'string' },
                    ticket_id: { type: 'string' },
                },
                required: ['user_id', 'cedula', 'ticket_id']
            },
        },
        handler: CancelarTurno
    }
]


export default routes