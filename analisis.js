//Salarios

//Here we create an array only with 
const salariosCol = colombia.map(function(persona){
        return persona.salary;
    }
);
//We order our array in ascendent way
const salariosColSorted = salariosCol.sort(function(salaryA,salaryB){
        return salaryA-salaryB;
    }
);

function esPar(numero){
    return (numero % 2 ===0);
};
//we recycle our past function

function calcularPromedio(list){ //function used at mediana.js
    const sumaLista = list.reduce( //reduce gets a function and we can sum the first and the next element
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
   );

   const promedioArray = sumaLista / list.length;
   return promedioArray;
};

//Calculadora de mediana
function medianaSalariosCol(list){
    const mitad = parseInt(list.length /2);

    if (esPar(list.length)) {
        const personaMitad = list[mitad -1];
        const personaMitad2 = list[mitad];
        
        const mediana =calcularPromedio([personaMitad, personaMitad2]);
        return mediana;

    }else{
        const personaMitad = list[mitad];
        return personaMitad;
    }
};

console.log(medianaSalariosCol(salariosColSorted));


//Mediana del top 10%
const spliceStart = (salariosColSorted.length * 90)/100;

const spliceCount = salariosColSorted.length - spliceStart;

//Splice recive two parameters, the first one is the cutter, and the
//second one want to say how much numbers we want to take out. 
//THE PROBLEM WITH THIS METHOS IS THAT THE METHOD MODIFY OUR ORIGINAL ARRAY
//INSTED OF USE THIS WE CAN USE SLICE
const salariosColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount,
);

const medianaTop10Col = medianaSalariosCol(salariosColTop10);

console.log(medianaTop10Col);