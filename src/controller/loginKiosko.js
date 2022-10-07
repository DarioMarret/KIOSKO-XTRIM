import { Agencias } from "../model"
import { Token } from "../model/token";
import { EnviarTokenEmail } from "../function/EnviatTokenEmail";
import { generateP } from "../function/function";


export const GenerarTokenVerificacion = async (req, reply) => {
    const { email } = req.body
    const token = generateP()
    const newToken = new Token({
        email,
        token
    })
    await newToken.save()
    await EnviarTokenEmail(email, token)
    reply.code(200).send({
        success: true,
        data: 'Token enviado exitosamente a su correo electronico expira en 5 minutos'
    })
}

export const VerificarToken = async (req, reply) => {
    const { token } = req.body
    const tokenVerificado = await Token.findOne({ token })
    if (tokenVerificado) {
        reply.code(200).send({
            success: true,
            data: tokenVerificado
        })
    } else {
        reply.code(200).send({
            success: false,
            msg: 'Token Invalido'
        })
    }
}

export const RegistrosAgencia = async (req, reply) => {
    const { id_agencia, nombre, ciudad, nemo, tipo, horario, caja } = req.body

    try {
        const newAgencia = new Agencias({
            id_agencia,
            nombre,
            ciudad,
            nemo,
            tipo,
            horario,
            caja
        })
        await newAgencia.save()
        reply.code(200).send({
            success: true,
            msg: 'Agencia registrada con éxito',
            data: newAgencia
        })
    } catch (error) {
        console.log(error)
        return {
            success: false,
            msg: 'Error al registrar'
        }
    }
}
export const ActualizarAgencia = async (req, reply) => {
    const { id_agencia, nombre, ciudad, nemo, tipo, horario, caja } = req.body
    try {
        const response = await Agencias.findByIdAndUpdate(id_agencia, {
            nombre,
            ciudad,
            nemo,
            tipo,
            horario,
            caja
        })
        reply.code(200).send({
            success: true,
            msg: 'Agencia actualizada con éxito',
            data: response
        })
    } catch (error) {
        return {
            success: false,
            msg: 'Error al actualizar'
        }
    }
}

export const EliminarAgencia = async (req, reply) => {
    const { _id } = req.body
    try {
        const response = await Agencias.findByIdAndDelete(_id)
        reply.code(200).send({
            success: true,
            msg: 'Agencia eliminada con éxito',
            data: response
        })
    } catch (error) {
        reply.code(200).send({
            success: false,
            msg: 'Error al eliminar'
        })
    }
}

export const ConsultarAgencias = async (req, reply) => {
    try {
        const response = await Agencias.find()
        console.log("Listar Agencias", response)
        reply.code(200).send({
            success: true,
            data: response
        })
    } catch (error) {
        reply.code(200).send({
            success: false,
            msg: 'Error al consultar'
        })
    }
}