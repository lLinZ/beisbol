import { formatDistanceToNow } from "date-fns";
import { es } from "date-fns/locale";

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