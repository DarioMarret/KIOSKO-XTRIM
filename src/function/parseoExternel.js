

export const ProblemaServicions = async (req, reply) => {
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
        if (data.Objeto != null && data.Objeto != undefined) {
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
