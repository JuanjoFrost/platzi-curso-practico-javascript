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
   return promedioArray/2;
};

function medianaSalariosCol(list){
    const mitad = parseInt(list.length /2);

    if (esPar(list.length)) {
        const personaMitad = list[mitad -1];
        const personaMitad2 = list[mitad];
        
        const mediana =calcularPromedio([personaMitad, personaMitad2]);
        return mediana;

    }else{
        const personaMitad = lista[mitad];
        return personaMitad;
    }
};

console.log(medianaSalariosCol(salariosColSorted));
