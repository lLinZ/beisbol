import Swal from 'sweetalert2';
import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';

export const getFormatDistanceToNow = (date: Date) => {
    const fromNow = formatDistanceToNow(date, { locale: es });
    return `Creada hace ${fromNow}`;
}
export const recortar = (dato: string) => {
    const longitud = 35;
    let datoAMostrar = "";

    for (let i = 0; i < longitud && i < dato.length; i++) { datoAMostrar = datoAMostrar + dato[i]; }
    if (dato.length > longitud) {
        datoAMostrar = datoAMostrar + "...";
    }
    return datoAMostrar;
}
export function numberWithDots(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
/**
 * Función para seleccionar un elemento del DOM
 * @param {string} selector La propiedad del elemento del DOM (clase, id, name, tag)
 * @returns El elemento del DOM
 * @author Linz web dev (José Linares)
 */
export const $ = (selector: string) => {
    return document.querySelector(selector);
}
export const isEmailValid = (email: string) => {
    const emailRegex = /^[-!#$%&'*+/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
    if (!email)
        return false;

    if (email.length > 254)
        return false;

    const valid = emailRegex.test(email);
    if (!valid)
        return false;

    // Further checking of some things regex can't handle
    const parts = email.split("@");
    if (parts[0].length > 64)
        return false;

    const domainParts = parts[1].split(".");
    if (domainParts.some(function (part) { return part.length > 63; }))
        return false;

    return true;
}
export const getFullDate = () => {
    let date_ob = new Date();

    // current date
    // adjust 0 before single digit date
    let date = ("0" + date_ob.getDate()).slice(-2);

    // current month
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

    // current year
    let year = date_ob.getFullYear();

    // current hours
    let hours = date_ob.getHours();

    // current minutes
    let minutes = date_ob.getMinutes();

    // current seconds
    let seconds = date_ob.getSeconds();

    // prints date & time in YYYY-MM-DD HH:MM:SS format
    const fulldate = year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;
    return fulldate;
}
export const exists = (data: string) => {
    if (!data) return false;
    switch (data.toUpperCase()) {
        case 'N':
            return false;
        case 'NO':
            return false;
        case 'NOTIENE':
            return false;
        case 'NO TIENE':
            return false;
        case 'NOPOSEE':
            return false;
        case 'NO POSEE':
            return false;
        default:
            return true;
    }
}
/**
 * Función para seleccionar varios elementos del DOM
 * @param {string} selector La propiedad del elemento del DOM (clase, id, name, tag)
 * @returns Los elementos del DOM
 * @author Linz web dev (José Linares)
 */
export const $all = (selector: string) => {
    return document.querySelectorAll(selector);
}
/**
 * Funcion para mostrar los errores recibidos del servidor con SweetAlert2,
 * recorre el array y añade los errores en la descripcion de la alerta
 * @param {string[]} errores Array de errores, debe contener strings con la descripcion de cada error
 * @author Linz web dev (José Linares) 
*/
export const errorAlertHandler = (errores: string[]) => {
    let errors = "";
    for (let index = 0; index < errores.length; index++) {
        const element = errores[index];
        if (index === 0) {
            errors += `&#9940; ${element}`;
        }
        else {
            errors += `<br> &#9940; ${element}`;
        }
    }
    Swal.fire("Error", errors, "error");
}
/**
 * Función para el manejo de alertas en base al status de la solicitud HTTP enviada
 * @param {number} status Status de la respuesta HTTP
 * @param {string} mensajePersonalizado Mensaje que se puede mostrar en el Sweet Alert
 * @author Linz web dev (José Linares)
 */
export const alertHandler = (status: number, mensajePersonalizado: boolean = false) => {
    switch (status) {
        case 204:
            Swal.fire({
                title: "Oops!",
                html: mensajePersonalizado ? mensajePersonalizado : "No se encontraron resultados",
                icon: "warning",
                timer: 2000,
                showConfirmButton: false,
                timerProgressBar: true,
            })
            break;
        case 400:
            console.log("Error con los datos enviados");
            Swal.fire({
                title: "Error",
                html: mensajePersonalizado ? mensajePersonalizado : "Revise los datos enviados",
                icon: "error",
                timer: 2000,
                showConfirmButton: false,
                timerProgressBar: true,
            })
            break;
        case 401:
            console.log("Autenticación erronea");
            Swal.fire({
                title: "Error",
                html: mensajePersonalizado ? mensajePersonalizado : "Autentiquese correctamente para poder ingresar data",
                icon: "error",
                timer: 2000,
                showConfirmButton: false,
                timerProgressBar: true,
            })
            break;
        case 403:
            console.log("Autorizacion denegada");
            Swal.fire({
                title: "Error",
                html: mensajePersonalizado ? mensajePersonalizado : "No tiene acceso a la información",
                icon: "error",
                timer: 2000,
                showConfirmButton: false,
                timerProgressBar: true,
            })
            break;
        case 405:
            console.log("Método no permitido");
            Swal.fire({
                title: "Alerta",
                html: mensajePersonalizado ? mensajePersonalizado : "Método de conexión no permitido",
                icon: "warning",
                timer: 2000,
                showConfirmButton: false,
                timerProgressBar: true,
            })
            break;
        case 500:
            Swal.fire({
                title: "Error",
                html: mensajePersonalizado ? mensajePersonalizado : `Ocurrió un error interno del servidor`,
                icon: "error",
                timer: 2000,
                showConfirmButton: false,
                timerProgressBar: true,
            })
            break;
        default:
            Swal.fire({
                title: "Error",
                html: mensajePersonalizado ? mensajePersonalizado : `Ocurrió un error interno del servidor`,
                icon: "error",
                timer: 2000,
                showConfirmButton: false,
                timerProgressBar: true,
            })
            break;
    }
}

export const createCookie = async (name: string, data: string, expire: string = "Thu, 01 Jan 2100 00:00:00 UTC", path: string = "/") => {
    document.cookie = `${name}=${data}; expires=${expire}; path=${path}`;
}
/**
 * Funcion para borrar una cookie en el documento
 * @param {string} name Nombre de la cookie a borrar
 * @param {string} path Direccion de la cookie
 * @author Linz web dev (José Linares)
 */
export const deleteCookie = async (name: string, path: string = "/") => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${path}`;
}
/**
 * Funcion para buscar una cookie por su nombre
 * @param {string} name Nombre de la cookie
 * @returns Valor de la cookie
 * @author Linz web dev (José Linares)
 */
export const getCookieValue = (name: string) => (decodeURIComponent(document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || ''))
/**
 * Funcion para codificar en UTF-8 un string
 * @param {string} argString String a codificar
 * @returns El string codificado en UTF-8
 * @author Linz web dev (José Linares)
 */
export const utf8_encode = (argString: string) => {
    if (argString === null || typeof argString === 'undefined') {
        return ''
    }
    const string = (argString + '')
    let utftext = ''
    let start
    let end
    let stringl = 0
    start = end = 0
    stringl = string.length
    for (let n = 0; n < stringl; n++) {
        let c1 = string.charCodeAt(n)
        let enc = null
        if (c1 < 128) {
            end++
        } else if (c1 > 127 && c1 < 2048) {
            enc = String.fromCharCode(
                (c1 >> 6) | 192, (c1 & 63) | 128
            )
        } else if ((c1 & 0xF800) !== 0xD800) {
            enc = String.fromCharCode(
                (c1 >> 12) | 224, ((c1 >> 6) & 63) | 128, (c1 & 63) | 128
            )
        } else {
            // surrogate pairs
            if ((c1 & 0xFC00) !== 0xD800) {
                throw new RangeError('Unmatched trail surrogate at ' + n)
            }
            const c2 = string.charCodeAt(++n)
            if ((c2 & 0xFC00) !== 0xDC00) {
                throw new RangeError('Unmatched lead surrogate at ' + (n - 1))
            }
            c1 = ((c1 & 0x3FF) << 10) + (c2 & 0x3FF) + 0x10000
            enc = String.fromCharCode(
                (c1 >> 18) | 240, ((c1 >> 12) & 63) | 128, ((c1 >> 6) & 63) | 128, (c1 & 63) | 128
            )
        }
        if (enc !== null) {
            if (end > start) {
                utftext += string.slice(start, end)
            }
            utftext += enc
            start = end = n + 1
        }
    }
    if (end > start) {
        utftext += string.slice(start, stringl)
    }
    return utftext
}
/**
 * Funcion para volver mayúsculas la primera letra de cada palabra en una cadena de strings
 * @param {string} str El estring que se va a formatear
 * @returns el string formateado
 * @author Linz web dev (José Linares)
 */
export const ucwords = (words: string) => {
    words += '';
    const formatted = words.toLowerCase().replace(/\b[a-z]/g, function (firstLetter) {
        return firstLetter.toUpperCase();
    });
    return formatted;
}
export const ucfirst = (str: string) => {
    //  discuss at: https://locutus.io/php/ucfirst/
    // original by: Kevin van Zonneveld (https://kvz.io)
    // bugfixed by: Onno Marsman (https://twitter.com/onnomarsman)
    // improved by: Brett Zamir (https://brett-zamir.me)
    //   example 1: ucfirst('kevin van zonneveld')
    //   returns 1: 'Kevin van zonneveld'
    str += '';
    const f = str.charAt(0).toUpperCase();
    return f + str.substr(1);
}