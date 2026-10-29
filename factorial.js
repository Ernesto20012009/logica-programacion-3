function factorial(){
alert(`Programa para calcular el factorial de un numero.`);
    numero = Number(prompt("Dame un numero"));
    alert(`Tu numero es: ${numero}`);
    let resultado =1;
    for (let i = 1; i<=numero; i++){// recorre todo los numeros
        resultado= resultado * i;
    }
     alert( `El resultado es: ${resultado}`);
}
factorial();