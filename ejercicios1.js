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

const contarVocalesConsonantes = (cadena) => {
    cadena = cadena.toLowerCase();

    const numVocales = cadena.split("").filter(letra => "aeiouáéíóú".includes(letra)).length;
    const numConsonantes = cadena.split("").filter(letra => !"aeiouáéíóú".includes(letra) && letra.match(/[a-z]/i)).length;

    return console.log(`Vocales: ${numVocales}, Consonantes: ${numConsonantes}`)
}

contarVocalesConsonantes("Hólá múndó")

// 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.

const validarNombre = (nombre) => {
    if (typeof nombre !== 'string') return console.log('No ingresaste un nombre correcto');

    const regexNombre = /^[a-zA-Zaeiouáéíóú]+[\s]?[a-zA-Zaeiouáéíóú]+$/g.test(nombre);

    return (regexNombre)
        ? console.log(`El nombre ${nombre} es valido`)
        : console.log(`El nombre ${nombre} no es valido`);
}

validarNombre("Agustin Salinas")

// 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

const validarCorreo = (correo) => {
    if (typeof correo !== 'string') return console.log('No ingresaste un nombre correcto');

    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/g.test(correo);

    return (regexCorreo)
        ? console.log(`El nombre ${correo} es valido`)
        : console.log(`El nombre ${correo} no es valido`);
}

validarCorreo("agustin.cs96@gmail.com")

// 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

const arrayAlCuadrado = (numeros) => {
    if (!(numeros instanceof Array)) return console.log('No ingresaste un arreglo');
    if (numeros.length === 0) return console.log('Ingresaste un arreglo vacio');

    for (let num of numeros) {
        if (typeof num !== 'number') return console.log(`El valor ${num} no es un numero`);
    }
    return console.log(numeros.map(num => num * num));
}
arrayAlCuadrado([1, 4, 5])

// 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
const maxMinArray = (numeros) => {
    if (!(numeros instanceof Array)) return console.log('No ingresaste un arreglo');
    if (numeros.length === 0) return console.log('Ingresaste un arreglo vacio');

    for (let num of numeros) {
        if (typeof num !== 'number') return console.log(`El valor ${num} no es un numero`);
    }

    const max = Math.max(...numeros);
    const min = Math.min(...numeros);
    return console.log([max, min]);
}

maxMinArray(["aa", 1, 3, 54,])

// 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

const ordenarParImpar = (numeros) => {
    if (!(numeros instanceof Array)) return console.log('No ingresaste un arreglo');
    if (numeros.length === 0) return console.log('Ingresaste un arreglo vacio');

    for (let num of numeros) {
        if (typeof num !== 'number') return console.log(`El valor ${num} no es un numero`);
    }
    const pares = numeros.filter(num => num % 2 === 0)
    const impares = numeros.filter(num => num % 2 !== 0)

    return console.log({ pares, impares });
}

ordenarParImpar([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])

// 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.

const ordenarNumAscDesc = (numeros) => {
    if (!(numeros instanceof Array)) return console.log('No ingresaste un arreglo');
    if (numeros.length === 0) return console.log('Ingresaste un arreglo vacio');

    for (let num of numeros) {
        if (typeof num !== 'number') return console.log(`El valor ${num} no es un numero`);
    }

    return console.log(
        {
            asc: numeros.map(num => num).sort(),
            desc: numeros.map(num => num).sort().reverse()
        }
    );
}

ordenarNumAscDesc([1, 6, 7, 3, 0, 1, 4])


// 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

const eliminarDUplicados = (arreglo) => {
    if (!(arreglo instanceof Array)) return console.log('No ingresaste un arreglo');
    if (arreglo.length === 0) return console.log('Ingresaste un arreglo vacio');

    for (let num of arreglo) {
        if (typeof num !== 'number') return console.log(`El valor ${num} no es un numero`);
    }

    return console.log(

        arreglo.filter((elemento, indice) => {
            return arreglo.indexOf(elemento) === indice;
        })

    );
}

eliminarDUplicados([1, 1, 1, 1, 2, 3, 4, 5, 5, 5, 5, 6, 6, 7, 8, 9])

// 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

const promedio = (arreglo) => {
    if (!(arreglo instanceof Array)) return console.log('No ingresaste un arreglo');
    if (arreglo.length === 0) return console.log('Ingresaste un arreglo vacio');

    for (let num of arreglo) {
        if (typeof num !== 'number') return console.log(`El valor ${num} no es un numero`);
    }

    const suma = arreglo.reduce((acumulador, elemento) => acumulador + elemento, 0);
    return console.log(suma / arreglo.length);
}

promedio([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])

// 27) Programa una clase llamada Pelicula.

// La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
//   - Todos los datos del objeto son obligatorios.
//   - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
//      7 restantes números.
//   - Valida que el título no rebase los 100 caracteres.
//   - Valida que el director no rebase los 50 caracteres.
//   - Valida que el año de estreno sea un número entero de 4 dígitos.
//   - Valida que el país o paises sea introducidos en forma de arreglo.
//   - Valida que los géneros sean introducidos en forma de arreglo.
//   - Valida que los géneros introducidos esten dentro de los géneros 
//      aceptados*.
//   - Crea un método estático que devuelva los géneros aceptados*.
//   - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
//     decimal de una posición.
//   - Crea un método que devuelva toda la ficha técnica de la película.
//   - Apartir de un arreglo con la información de 3 películas genera 3 
//     instancias de la clase de forma automatizada e imprime la ficha técnica 
//     de cada película.

// * Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.

class Pelicula {
    constructor({ id, titulo, director, estreno, pais, generos, calificacion }) {
        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.estreno = estreno;
        this.pais = pais;
        this.generos = generos;
        this.calificacion = calificacion;

        this.validarIMBD(id);
        this.validarTitulo(titulo);
        this.validarDirector(director);
        this.validarEstreno(estreno);
        this.validarPais(pais);
        this.validarGeneros(generos);
        this.validarCalificacion(calificacion)
    }

    static get listaGeneros() {
        return ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"]
    }

    static generosAceptados() {
        return console.log(`Los generos aceptados son: ${Pelicula.listaGeneros.join(", ")}`);
    }

    validarCadena(propiedad, valor) {
        if (!valor) return console.log(`${propiedad} "${valor}" esta vacío`);
        if (typeof valor !== 'string') return console.log(`${propiedad} "${valor}" ingresado, NO es una cadena de texto`);


        return true
    }

    validarLongitudCadena(propiedad, valor, longitud) {
        if (valor.length > longitud) return console.log(`${propiedad} "${valor}" excede el numero de caracteres permitidos (${longitud})`);

        return true;
    }

    validarNumeros(propiedad, valor) {
        if (!valor) return console.log(`${propiedad} "${valor}" esta vacío`);

        if (typeof valor !== 'number') return console.log(`${propiedad} "${valor}" ingresado, NO es un número`);

        return true
    }

    validarArreglo(propiedad, valor) {
        if (!valor) return console.log(`${propiedad} "${valor}" esta vacío`);

        if (!(valor instanceof Array)) return console.log(`${propiedad} "${valor}" ingresado, NO es un arreglo`);

        if (valor.length === 0) return console.log(`${propiedad} "${valor}" no tiene datos`);

        for (let cadena of valor) {
            if (typeof cadena !== 'string') return console.log(`El valor "${cadena}" ingresado, NO es una cadena de texto`);
        }

        return true;
    }
    validarIMBD(id) {
        if (this.validarCadena('IMBD id', id)) {
            if (!(/^([a-z]{2}([0-9]){7})$/.test(id))) {
                return console.log(`IMBD id "${id}" no es valido, debe tener 9 caracteres, los dos primeros letras minusculas, los 7 restantes numeros`);
            }
        }
    }

    validarTitulo(titulo) {
        if (this.validarCadena("Titulo", titulo))
            this.validarLongitudCadena("Titulo", titulo, 100);
    }
    validarDirector(director) {
        if (this.validarCadena("Director", director))
            this.validarLongitudCadena("Director", director, 50);
    }

    validarEstreno(estreno) {
        if (this.validarNumeros("Año de estreno", estreno))
            if (!(/^([0-9]){4}$/).test(estreno))
                return console.log(`Año de Estreno "${estreno}" no es valido, debe ser un numero de 4 digitos.`);
    }

    validarPais(pais) {
        this.validarArreglo("Pais", pais);
    }
    validarGeneros(generos) {
        if (this.validarArreglo("Generos", generos)) {
            for (let genero of generos) {
                // console.log(genero, this.listaGeneros.includes(genero));
                if (!Pelicula.listaGeneros.includes(genero)) {
                    console.log(`Genero(s) incorrectos "${generos.join(", ")}"`);
                    Pelicula.generosAceptados();
                }
            }
        }
    }

    validarCalificacion(calificacion) {
        if (this.validarNumeros("Calificacion", calificacion))
            return (calificacion < 0 || calificacion > 10)
                ? console.log(`La calificacion tiene que estar en el rango de 0 y 10`)
                : this.calificacion = calificacion.toFixed(1)
    }

    fichaTecnica() {
        console.log(`Ficha tecnica:
        \nTitulo:"${this.titulo}"
        \nDirector:"${this.director}"
        \nAño:"${this.estreno}"
        \nPais:"${this.pais.join("-")}"
        \nIMDB Id:"${this.id}"`);
    }
}
// const peliculas = new Pelicula({
//     id: "tt1234567",
//     titulo: "Titulo de la peli",
//     director: "Director de la peli",
//     estreno: 2020,
//     pais: ["Mexico", "Argentina"],
//     generos: ["Comedy", "Sport"],
//     calificacion: 7.788
// });

const misPelis = [{
    id: "tt1234567",
    titulo: "Titulo de la peli",
    director: "Director de la peli",
    estreno: 2020,
    pais: ["Mexico", "Argentina"],
    generos: ["Comedy", "Sport"],
    calificacion: 7.788
},
{
    id: "tt1255569",
    titulo: "Titulo de la peli 2",
    director: "Director de la peli2",
    estreno: 2021,
    pais: ["Chile", "Argentina"],
    generos: ["Comedy", "Sport"],
    calificacion: 8.188
},
{
    id: "tt0994567",
    titulo: "Titulo de la peli 3",
    director: "Director de la peli3",
    estreno: 2022,
    pais: ["Paraguay", "Argentina"],
    generos: ["Comedy", "Sport"],
    calificacion: 4.288
}]

misPelis.forEach(item => new Pelicula(item).fichaTecnica())
