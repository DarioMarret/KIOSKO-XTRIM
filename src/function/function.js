import { Token } from "../model/token";

export function generateP() {
    var pass = '';
    var str = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (var i = 0; i < 6; i++) {
        var char = Math.floor(Math.random() * str.length);
        pass += str.charAt(char)
    }
    return pass;
}

export const EliminarToken = async (token) => {
    const tokenEliminado = await Token.findOneAndDelete({ token })
    console.log(tokenEliminado)
}