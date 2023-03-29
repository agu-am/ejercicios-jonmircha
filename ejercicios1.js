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

const esPalindromo = (palabra) => {
    if (typeof palabra !== 'string') console.log('Ingrese una palabra');

    palabra = palabra.toLowerCase();

    let alReves = palabra.split('').reverse().join('');

    return (palabra === alReves)
        ? console.log(`${palabra} es palíndromo`)
        : console.log(`${palabra} NO es palíndromo`);

}
esPalindromo("aliendor")

// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

const eliminarPatron = (texto, patron) => {
    if (typeof texto !== 'string') console.log('No ingresaste un texto');
    if (typeof patron !== 'string') console.log('No ingresaste un patron');
    return console.log(texto.replace(new RegExp(patron, 'ig'), ''));
}

eliminarPatron("asad", 'a')

// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

const numeroAleatorio = () => console.log(Math.round(Math.random() * 100) + 500);

numeroAleatorio();

// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

const numeroCapicua = (numero) => {
    if (typeof numero !== 'number') return console.log('No ingresaste un numero');
    const numeroAString = numero.toString();
    const numeroReverso = numeroAString.split('').reverse().join('');
    return (numeroAString === numeroReverso)
        ? console.log(`El numero ${numero} es capicua`)
        : console.log(`El numero ${numero} no es capicua`);
}
numeroCapicua(5665)

// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

const factorial = (numero) => {
    if (typeof numero === 'number' && numero <= 0) {

        let producto = 1;

        for (let i = 1; i <= numero; i++) {
            producto *= i;
        }
        return producto
    } else {
        return console.log('No ingresaste un numero o el numero es negativo');
    }
}

factorial(6)

// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
const esPrimo = (numero) => {

    if (typeof numero !== 'number') console.log('No ingresaste un numero');
    if (!(numero > 0)) console.log('No ingresaste un numero positivo');

    let divisible = false;
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            divisible = true;
            break;
        }
    }

    return (divisible)
        ? console.log(`El numero ${numero} no es primo.`)
        : console.log(`El numero ${numero} es primo.`);
}

esPrimo(2)

// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

const esPar = (numero) => {
    if (typeof numero !== 'number') console.log('No ingresaste un numero');
    if (!(numero > 0)) console.log('No ingresaste un numero positivo');

    return (numero % 2 === 0)
        ? console.log(`El numero ${numero} es par`)
        : console.log(`El numero ${numero} es impar`)
}

esPar(2)

// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

const conversionTemperatura = (grados, escala) => {
    if (typeof grados !== 'number') console.log('No ingresaste grados correctamente');
    if (typeof escala !== 'string') console.log('No ingresaste la escala correctamente');

    escalaMinuscula = escala.toLowerCase();

    if (escalaMinuscula !== "c" && escalaMinuscula !== "f") console.log('No ingresaste la escala correcta');

    if (escalaMinuscula === "c") {
        return console.log(`32°C es igual a ${(grados * (9 / 5)) + 32}°F`);
    }
    if (escalaMinuscula === "f") {
        return console.log(`32°F es igual a ${(grados - 32) * (9 / 5)}°C`);
    }
}

conversionTemperatura(32, "c");

// 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.

const binarioADecimal = (numero, base) => {

    if (typeof numero !== 'number') console.log('No ingresaste un numero');
    if (typeof base !== 'number') console.log('No ingresaste un numero');

    if (base === 2) {
        return console.log(`${numero} base ${base} = ${parseInt(numero, base)} base 10`);
    } else if (base === 10) {
        return console.log(`${numero} base ${base} = ${numero.toString(2)} base 2`);
    }
}

binarioADecimal(4, 10)
// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

const descuento = (monto, descuento) => {
    if (typeof monto !== 'number') return console.log('No ingresaste un monto correcto');
    if (typeof descuento !== 'number') return console.log('No ingresaste un descuento correcto');
    if (descuento <= 0) return console.log('El descuento debe ser mayor a 0');
    return console.log(monto - ((descuento / 100) * monto));
}

descuento(1000, 20)

// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

const aniosTranscurridos = (fecha = undefined) => {
    if (fecha === undefined) return console.log('No ingresaste una fecha correcta');
    if (!(fecha instanceof Date)) return console.log('No ingresaste una fecha correcta');

    let aniosCalculo = new Date().getTime() - fecha.getTime(),
        aniosMilisegundos = 1000 * 60 * 60 * 24 * 365,
        aniosHumano = Math.floor(aniosCalculo / aniosMilisegundos)

    return (Math.sign(aniosHumano) === -1)
        ? console.log((`Faltan ${Math.abs(aniosHumano)} años para el ${fecha.getFullYear()}`))
        : (Math.sign(aniosHumano) === 1)
            ? console.log(`Han pasado ${aniosHumano} años desde ${fecha.getFullYear()}`)
            : console.log(`Estamos en el año actual ${fecha.getFullYear()}`)
}

aniosTranscurridos(new Date(1996))

// 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

function contarVocalesConsonantes(cadena) {
    cadena = cadena.toLowerCase();

    const numVocales = cadena.split("").filter(letra => "aeiouáéíóú".includes(letra)).length;
    const numConsonantes = cadena.split("").filter(letra => !"aeiouáéíóú".includes(letra) && letra.match(/[a-z]/i)).length;

    return console.log(`Vocales: ${numVocales}, Consonantes: ${numConsonantes}`)
}

contarVocalesConsonantes("Hólá múndó")

// 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.

function validarNombre(nombre) {
    if (typeof nombre !== 'string') return console.log('No ingresaste un nombre correcto');

    const regexNombre = /^[a-zA-Zaeiouáéíóú]+[\s]?[a-zA-Zaeiouáéíóú]+$/g.test(nombre);

    return (regexNombre)
        ? console.log(`El nombre ${nombre} es valido`)
        : console.log(`El nombre ${nombre} no es valido`);
}

validarNombre("Agustin Salinas")

// 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

function validarCorreo(correo) {
    if (typeof correo !== 'string') return console.log('No ingresaste un nombre correcto');

    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/g.test(correo);

    return (regexCorreo)
        ? console.log(`El nombre ${correo} es valido`)
        : console.log(`El nombre ${correo} no es valido`);
}

validarCorreo("agustin.cs96@gmail.com")