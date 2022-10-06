

export const LoginKiosko = async (req, reply) => {
    const { email } = req.body

    try {
        
    } catch (error) {
        return {
            success: false,
            msg: 'Error al iniciar sesión'
        }
    }
}