const precioOriginal = 100;
const descuento = 15;

const porcentajePrecioConDescuento = 100 - descuento ;

const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento)/100;
console.log(precioConDescuento);

function calcularPrecioConDescuento(precio, descuento)
{
    const porcentajeConDes = 100-descuento;
    const precioTotal = (precio * porcentajeConDes)/100;
    
    return precioTotal;
};

const cupones = [
    {
        name:"cupon1",
        discount: 15,
    },
    {
        name:"cupon2",
        discount: 30,
    },
    {
        name: "cupon3",
        discount: 25,
    },
];

//HTML Buttons
function botonCalcularPrecConDes()
{
//Reto: funciones más inteligentes Clase 13

    var precio = document.getElementById("InputPrecio");
    //We get the value
    var precioValor = parseInt(precio.value);

    //We calculate the discount of the second textBox.
    var descuentoInput = document.getElementById("InputDescuento")
    var descuentoValor = parseInt(descuentoInput.value);

    //We calculate the discount related to te cupon we choice
    var textBoxCupon = document.getElementById("InputCupon")
    var valorInputCupon = textBoxCupon.value;

    //We validate the value of the coupon
    //includes afford us validate if the element is in the array or not
    //if (!cupones.includes(valorInputCupon)) {
    //    alert("El cupón: "+ valorInputCupon + " no es válido :(")
    //}

    //we are going to validate with find()
    const isCouponValueValid = function(cupon)
    {  
        return cupon.name === valorInputCupon;  //here we return the name of the array according the input
    }

    const userCupon = cupones.find(isCouponValueValid);
    if (!userCupon)
    {
        alert("El cupón "+ valorInputCupon + " no es válido");
    }else{
        //we get the discount of our array property
        const descuento = userCupon.discount;

        //We plus the discount of the first textBox with the discount textBox
        let newDiscount = descuento + descuentoValor;

        //We save the result of the function in the variable result
        var result = calcularPrecioConDescuento(precioValor,newDiscount);

        //showing in the pharagraph the result
        var mostrarParrafo = document.getElementById("mostrarPrecio");
        mostrarParrafo.innerText = "El precio con descuento es de: "+result;
    }

    
};





