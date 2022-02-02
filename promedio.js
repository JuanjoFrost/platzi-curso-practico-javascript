//Array in order to plus the elements in the next step
const lista1 = [
    100,
    200,
    300,
    500
];

//sum of elements
let sumaLista1 = 0;
for(let i=0; i < lista1.length; i++){
    sumaLista1 = sumaLista1 + lista1[i];
};

//avg
const promedioLista1 = sumaLista1 / lista1.length;

//Functions
function calcularPromedio(array){
//    let sumaArray = 0;
//    for (let i = 0; i < array.length; i++) {
//        sumaArray= sumaArray + array[i];     
//    }

   const sumaLista1 = lista1.reduce( //reduce gets a function and we can sum the first and the next element
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
   );


   const promedioArray = sumaArray / array.length;
   return promedioArray;

};

