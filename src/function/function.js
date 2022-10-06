export const ExtraerMac = async (Objeto) => {
    var lista = []
    var cuentas = Objeto.Contrato.ListaCuentas
    for (let i = 0; i < cuentas.length; i++) {
        var mac = cuentas[i].ListaEquipos[i].
        lista.push(mac)
    }

}