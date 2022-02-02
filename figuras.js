//square code
//group es para agrupar lo que hay dentro de un mensaje
console.group("Cuadrados");

//const ladoCuadrado = 5;

//const perimetroCuadrado = ladoCuadrado * 4;
function PerimetroCuadrado(lado)
{
    return 4*lado;
};

//const areaCuadrado = ladoCuadrado * ladoCuadrado;
function AreaCuadrado(ladoCuadrado)
{
    return ladoCuadrado*ladoCuadrado;
};

//console.log("El lado del cuadrado es: "+ladoCuadrado+"perimetro, "+perimetroCuadrado+"area, "+areaCuadrado);

PerimetroCuadrado(3);
AreaCuadrado(3);

console.groupEnd(); 

//triangle code
console.group("Triangulos");
/*const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo= 4;

const alturaTriangulo =5.5;
console.log("Los lados del triangulo, miden: "+ladoTriangulo1 + "cm, "+ladoTriangulo2 + "cm, "+baseTriangulo + "cm");
console.log("La altura del triangulo es de: "+alturaTriangulo);

const perimetroTriangulo = ladoTriangulo1+ladoTriangulo2+baseTriangulo;
console.log("El perimetro del triangulo es: "+perimetroTriangulo);

const areaTriangulo = (baseTriangulo*alturaTriangulo)/2;

//circle code 
//radio

const radioCirculo = 4;

//diametro

const diametroCirculo = radioCirculo*2;

//pi

const pi = Math.PI;

//circunferencia

const perimetroCirculo = (radioCirculo)*pi;

//Área

const areaCirculo = (radioCirculo)**2*pi;

console.log("Propiedades triangulo. Radio: "+radioCirculo+ " diametro; "+diametroCirculo+" pi: "+pi+" perimetro: "+perimetroTriangulo+" areaCirculo: "+areaCirculo);
*/

function PerimetroTriangulo(lado1,lado2,base)
{
    return lado1+lado2+base;
};

function AreaTriangulo(base, altura)
{
    return (base*altura)/2;
};

PerimetroTriangulo(3,3,4);
AreaTriangulo(4,2);

console.groupEnd();

console.group("Circulos");

function diametroCirculo(radio){
    return radio*2;
};

function Circunferencia(radioCirculo)
{
    const pi = Math.PI;
    return radioCirculo*pi;
};
diametroCirculo(3);

console.log(Circunferencia(5));

console.groupEnd();

//HTML interaction

//Botón calcular perimetro cuadrado
function calcularPerimetroCuadrado()
{
    const input = document.getElementById("inputCuadrado"); //here we call to our element into the textBox
    const value = input.value; //here we get the value of the textBox

    const perimetro = PerimetroCuadrado(value);
    alert(perimetro);
};

function calcularPerimetroCuadrado()
{
    const input = document.getElementById("inputCuadrado"); //here we call to our element into the textBox
    const value = input.value; //here we get the value of the textBox

    const perimetro = PerimetroCuadrado(value);
    alert(perimetro);
};

function calcularAreaCuadrado()
{
    const input = document.getElementById("inputCuadrado"); //here we call to our element into the textBox
    const value = input.value; //here we get the value of the textBox

    const area = AreaCuadrado(value);
    alert(area);
};

//Reto: matemáticas con JavasCript
function calcularAlturaIso(lado1,lado2,base)
{
    if (lado1 === lado2) {
        altura = Math.sqrt(lado1**2-(base**2/4)); //sqrt es raiz cuadrada
        return altura;
    }else{
        alert("El triangulo no es isoceles intente de nuevo");
    }
};

calcularAlturaIso(2,2,3);

