function calcularPromedio(array){ //function used at promedio.js
    const sumaLista = lista.reduce( //reduce gets a function and we can sum the first and the next element
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
   );

   const promedioArray = sumaLista / array.length;
   return promedioArray/2;
};

const lista = [10,20,30,40];

const mitadLista = parseInt(lista.length / 2);

function esPar(numero){
    if (numero % 2 === 0) {
        return true;
    }else{
        return false;
    }
};


let mediana;

if (esPar(lista.length)) {
    const elemento1 = lista[mitadLista-1]; //we gives it an -1 to substract one position of our array that is  the half.
    const elemento2 = lista[mitadLista];

    const calcularPromedio1y2 = calcularPromedio(
        [
            elemento1,elemento2
        ]
        
    );

    mediana = calcularPromedio1y2;

}else{
    mediana = lista[mitadLista];
};
    
//Reto platzi, crear una función donde agreguemos un array a la función y pueda calcular si es par o impar solo con el array. PERO PRIMERO, Ordenar el array

arrayReto1 = [1,2,4,5];



arrayReto2 = ["a","c","b","e","z"];

array1Ordenado = arrayReto1.sort();
array2Ordenado = arrayReto2.sort();

function arrayMediana(array)
{
    if (esPar(array.length)) {
        const ele1 = array1Ordenado[mitadLista-1];
        const ele2 = array2Ordenado[mitadLista];

        const resultadoPromedio = calcularPromedio(
            [
                ele1,ele2
            ]
        );
        let mediana2 = resultadoPromedio;
        return mediana2;

        
    }
};

//MODA

const listaModa = [1,2,3,4,5,6,6,6,6,7];

//We create a empty object
const listaModaCount = {};


listaModa.map(
    function (elemento) { //anonymous function
        if (listaModaCount[elemento]){ //if exists our element
            listaModaCount[elemento] += 1; //We sum one to our array
        }else{
            listaModaCount[elemento] = 1;
        }
            
    }
);

//we transform our object to an array

//we order our array with sort
const listaModaCountArray = Object.entries(listaModaCount).sort(
    function(valorAcumulado, nuevoValor){
        return valorAcumulado[1] - nuevoValor[1];
    }
); // we can send the object to transform in an array

const moda = listaModaCountArray[listaModaCountArray.length - 1]

//Reto platzi, transfomrmar a función el código para poder ingresar cualquier array y poder ordenarlo y obtener la moda

const listaDePrueba = [1,1,1,1,2,2,3,3,3];


function obtenerLaModa(arrayModa)
{
    const listaModaObject = {};

    arrayModa.map(function(elemento){
        if (listaModaObject[elemento]) {
            listaModaObject[elemento] +=1;
        }else{
            listaModaObject[elemento] = 1;
        };
    }    
    );

    const listaModaNueva = Object.entries(listaModaObject).sort(
        function(elemento, elementoAcumulado){
            return elemento[1] - elementoAcumulado[1]
        }
    );

    const moda = listaModaNueva[listaModaNueva.length - 1 ];

    return moda;
};

//Reto platzi 
//Responde las siguientes preguntas en los comentarios:

//¿Cuál tipo de promedio elegiste para trabajar?: MEDIA ARMÓNICA
//¿Qué casos de uso tiene tu tipo de promedio?: UN CASO DE USO SERÍA MEDIAR LA VELOCIDAD ENTRE AUTOS, ES UNA MEDIA MUY ESPECÍFICA
//¿Cómo traduces su fórmula a código JavaScript? Su formula es: N / SUMATORIA de los valores de cada uno de los valores pero de forma inversa.
//dónde N es el total de datos y H la media armónica.


listaDeDatos = [4,9,6,5,2,8];
let inversos = [];

//función para formula


function obtenerMediaH(array){
    // N
    let cantidadDeDatos = array.length;
    //Se ordena n de forma ascendente
    let listaordenada = array.sort(function(a,b){
        return a-b;
    })
    //se dejan todos los números del arreglo como función
    let inversos = listaordenada.map(x => 1/x);
    //Se suman los inversos 
    let sumaDeInversos = inversos.reduce((acc, vActual) => acc+vActual)
    // se obtiene formula. H = N / Suma(Inversos)
    let mediaH = cantidadDeDatos /sumaDeInversos;
    //Se retorna resultado
    return mediaH;

};


