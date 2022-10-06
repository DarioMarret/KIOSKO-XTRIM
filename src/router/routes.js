import { BuroCliente, buscarCuentas, buscarCuentaSaldo, buscarEstatusCuenta, LinkPago, planUpgrade, ProblemadeServicio } from '../controller/controller'
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
    }
]

export default routes