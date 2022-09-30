import { buscarCuentas, buscarCuentaSaldo, buscarEstatusCuenta, LinkPago } from '../controller/controller'
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
                    cedula: { type: 'string' },
                    cuenta: { type: 'string' },
                    contrato: { type: 'string' },
                    email: { type: 'string' },
                },
                required: ['cedula', 'cuenta', 'contrato', 'email']
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
]

export default routes