import { BuroCliente, buscarCuentas, buscarCuentaSaldo, buscarEstatusCuenta, LinkPago, planUpgrade, ProblemadeServicio } from '../controller/controller'
import { ActualizarAgencia, ConsultarAgencias, EliminarAgencia, GenerarTokenVerificacion, RegistrosAgencia, VerificarToken } from '../controller/loginKiosko'
// import { ValidacionBasic } from '../function/ValidacionBasic'

const routes = [
    {
        path: '/api/v1/buscarEstatusCuenta',
        method: 'POST',
        schema: {
            body: {
                type: 'object',
                properties: {
                    cedula: { type: 'string' },
                },
                required: ['cedula']
            },
        },
        handler: buscarEstatusCuenta
    },
    {
        path: '/api/v1/buscarCuentas',
        method: 'POST',
        schema: {
            body: {
                type: 'object',
                properties: {
                    cedula: { type: 'string' },
                },
                required: ['cedula']
            },
        },
        handler: buscarCuentas
    },
    {
        path: '/api/v1/LinkPago',
        method: 'POST',
        schema: {
            body: {
                type: 'object',
                properties: {
                    tipo: { type: 'string' },
                    cedula: { type: 'string' },
                    cuenta: { type: 'string' },
                    contrato: { type: 'string' },
                    email: { type: 'string' },
                },
                required: ['cedula', 'cuenta', 'contrato', 'email', 'tipo']
            },
        },
        handler: LinkPago
    },
    {
        path: '/api/v1/buscarCuentaSaldo',
        method: 'POST',
        schema: {
            body: {
                type: 'object',
                properties: {
                    cedula: { type: 'string' },
                },
                required: ['cedula']
            },
        },
        handler: buscarCuentaSaldo
    },
    {
        path: '/api/v1/planUpgrade/:NumeroContrato',
        method: 'GET',
        schema: {
            params: {
                type: 'object',
                properties: {
                    NumeroContrato: { type: 'string' },
                }
            }
        },
        handler: planUpgrade
    },
    {
        path: '/api/v1/ProblemaServicios',
        method: 'POST',
        schema: {
            body: {
                type: 'object',
                properties: {
                    Mac: { type: 'string' },
                },
                required: ['Mac']
            },
        },
        handler: ProblemadeServicio
    },
    {
        path: '/api/v1/BuroCliente',
        method: 'POST',
        schema: {
            body: {
                type: 'object',
                properties: {
                    cedula: { type: 'string' },
                },
                required: ['cedula']
            },
        },
        handler: BuroCliente
    },
    {
        path: '/api/v1/Registrar_Agencias',
        method: 'POST',
        schema: {
            body: {
                type: 'object',
                properties: {
                    nombre: { type: 'string' },
                    ciudad: { type: 'string' },
                    nemo: { type: 'string' },
                    tipo: { type: 'string' },
                    horario: { type: 'string' },
                    caja: { type: 'string' },
                },
                required: ['nombre', 'ciudad', 'nemo', 'tipo', 'horario', 'caja']
            },
        },
        handler: RegistrosAgencia
    },
    {
        path: '/api/v1/Actualizar_Agencias',
        method: 'POST',
        schema: {
            body: {
                type: 'object',
                properties: {
                    id_agencia: { type: 'string' },
                    nombre: { type: 'string' },
                    ciudad: { type: 'string' },
                    nemo: { type: 'string' },
                    tipo: { type: 'string' },
                    horario: { type: 'string' },
                    caja: { type: 'string' },
                },
                required: ['id_agencia', 'nombre', 'ciudad', 'nemo', 'tipo', 'horario', 'caja']
            },
        },
        handler: ActualizarAgencia
    },
    {
        path: '/api/v1/eliminar_Agencias',
        method: 'POST',
        schema: {
            body: {
                type: 'object',
                properties: {
                    _id: { type: 'string' },
                },
                required: ['id']
            },
        },
        handler: EliminarAgencia
    },
    {
        path: '/api/v1/Agencias',
        method: 'GET',
        handler: ConsultarAgencias
    },
    {
        path: '/api/v1/generarToken',
        method: 'POST',
        schema: {
            body: {
                type: 'object',
                properties: {
                    email: { type: 'string' },
                },
                required: ['email']
            },
        },
        handler: GenerarTokenVerificacion
    },
    {
        path: '/api/v1/verificarToken',
        method: 'POST',
        schema: {
            body: {
                type: 'object',
                properties: {
                    token: { type: 'string' },
                },
                required: ['token']
            },
        },
        handler: VerificarToken
    }
]

export default routes