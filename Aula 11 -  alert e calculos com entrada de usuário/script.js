let num1 = prompt ('Digite a sua idade');
let num2 = prompt ('Digite o seu peso');

num1 = Number(num1);
num2 = Number(num2);

const resultado = num1 + num2;

alert (`O resultado da sua conta foi ${resultado}`);
// pode ser feito a expresão no próprio resultado eliminaria a variavel de resultado, e faz a conta dentro do alert alert (`O resultado da sua conta foi ${num1 + num2}`);