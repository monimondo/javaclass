let num1 = 9.54578
let num3 = Math.floor(num1); // arredonda pra baixo = 9
let num2 = Math.ceil(num1); // arredonda pra cima 10
let num4 = Math.round(num1); // até 4,49 aredonda pra baixo de 4,5 pra cima arredonda pra cima = 10

console.log(Math.max(1,2,3,5,369,5,6,5,8,45,555,669475,2846543,54,)); // mostra o maior numero da sequência
console.log(Math.min(25,2,25,1,2835,475,2846543,-54,)); // mostra o maior número da sequência

//exemplo do que se pode fazer com o math: posso gerar numeros aleatórios e determinar limites mínimos e máximos para esse gerar
const aleatorio = Math.round(Math.random() * (10 - 5) +5);
console.log(aleatorio);


// o java permite dividir por 0 e o resultado é verdadeiro e definido como infinity
