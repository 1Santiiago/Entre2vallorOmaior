import "./styles.css";

//funçao que usara 2 numeros e retornará o maior entre eles

let valorMaior = max(5, 9);
console.log(valorMaior);
function max(numero1, numero2) {
  if (numero1 > numero2) {
    return numero1;
  } else {
    return numero2;
  }
}
// nessa resposta, sera o numero 9
