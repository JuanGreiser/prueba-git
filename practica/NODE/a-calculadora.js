let sumar = (numero1, numero2) => numero1 + numero2;
let resta = (numero1, numero2) => numero1 - numero2;
let multiplicacion = (numero1, numero2) => numero1 * numero2;
let division = (numero1, numero2) => numero1 / numero2;

let calculadora = (numero1,numero2,operacion) => operacion(numero1,numero2);

console.log(calculadora(1,2,multiplicacion));


//////////////////////////////////////////////////////////////////////////////////////

const calcu2 = (numA,operacion, numB) => {
    if (operacion == "+"){
        return numA + numB;
    }
       if (operacion == "-"){
        return numA-numB;
    }
       if (operacion == "/"){
        return numA/numB;
    }
       if (operacion == "*"){
        return numA*numB;
    }
}

console.log(calcu2(2,"+",1));

//////////////////////////////////////////////////////////////////////////////////////


const calculadoraB = (numA,operacion, numB)=>{

    switch (operacion){
        case "+":
            return numA+numB;
        break;

        case "-":
            return numA-numB;
        break;

        case "*":
            return numA*numB;
        break;

        case "/":
            return numA/numB;
        break;
    }
}
console.log(calculadoraB(5,"+",5))