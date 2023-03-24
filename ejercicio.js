/*Programa que:
  * Solicite al usuario un numero por prompt o input y guardarlo
  * Debe calcular el factorial del numero recibido
  * Debe imprimir el resultado por consola o por el DOM
  * Debe ser capaz de identificar si el dato de entrada es de tipo number, 
  * en caso contrario debe mandar un mensaje de error y volver a solicitar el dato
*/
//funcion para calcular el factorial
function calcularFactorial(number) {
  let aggregate = 1;
  if (number > 0) {
    for (let i = number; i > 1; i--) {
      aggregate = aggregate * i
    }
    return aggregate;
  } 
}

//funcion que comprueba si es numero e imprime su resultado
function calcular() {
  alert("Bienvenido al calculo de factoriales")
  let number = Number(prompt("Ingrese el numero que desea calcular"));
  while (isNaN(number) && number > 0) {
    alert("Valor incorrecto, intenta nuevamente");
    number = Number(prompt("Ingrese el numero que desea calcular"));
  }
  let result = calcularFactorial(number);
  document.getElementById('resultado').innerHTML = `El factorial de ${number} es ${result}.`;
}

calcular();





