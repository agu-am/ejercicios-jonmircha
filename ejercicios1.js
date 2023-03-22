// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

function contarCaracter(cadena) {
    if (typeof cadena === "string") {
        console.log(`La cadenada "${cadena}" tiene ${cadena.length} caracteres.`);
    } else {
        console.log("El texto ingresado es incorrecto.");
    }
}


contarCaracter("Hola mama")


// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

function cortarTexto(cadena, longitud) {
    if (typeof cadena === "string" && typeof longitud === "number") {
        console.log(`${cadena.slice(0, longitud)}`);
    } else {
        console.log("Valores ingresados incorrectos");
    }
}
cortarTexto("Hola mundo", 4)

// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

function transformarCadena(cadena, separador) {
    if (typeof cadena === "string") {
        console.log(cadena.split(separador));
    } else {
        console.log("Ingrese un texto");
    }
}

transformarCadena("Hola mundo", " ")

// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

function repetirTexto(texto, repeticiones) {
    if (typeof texto !== "string") {
        console.log("No introduciste un texto");
    }
    if (typeof repeticiones !== "number") {
        console.log("No intrduciste un numero");
    }
    if (repeticiones <= 0) {
        console.log("El numero debe ser positivo");
    } else {
        console.log(texto.repeat(repeticiones));
    }
}
repetirTexto("hOLA ", 2)

// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

const invertirCadena = (cadena) =>
    !(typeof cadena === 'string')
        ? console.log("Ingresa un texto")
        : console.log(cadena.split("").reverse().join(""));

invertirCadena("Hola mundo")

// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

const contarPalabra = (texto, palabra) => {
    if (typeof texto !== 'string') {
        console.log("Ingrese un texto");
    }
    if (typeof palabra !== 'string') {
        console.log("Ingrese una palabra");
    }
    texto = texto.toLowerCase();
    palabra = palabra.toLowerCase();

    const palabras = texto.split(" ");

    const coincidencias = palabras.filter(palabraActual => palabraActual === palabra).length;

    return coincidencias
}

console.log(contarPalabra('Hola Mundo Hola', 'hola'));

// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
