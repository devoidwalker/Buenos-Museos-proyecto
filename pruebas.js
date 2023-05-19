function multiplicar (num1, num2) {
    return num1 * num2;     
}

console.log(multiplicar(2,3));


function multiplicar_segunda (num1, num2) {
    console.log(num1 * num2);     
}

multiplicar_segunda(2,3);

const correoIngresado = document.getElementById("campo_correo");




function primeraFuncion() { 
    if (correoIngresado == "aaaaaa@sss.com") {
        document.console.warn();("correo VÁLIDO");
    } else {
        document.console.warn();("correo INVÁLIDO");
    }
    
}