/* Luiz Otávio Miranda tem 30 anos de idade, pesa 84kg tem 1.8 de altura e seu IMC é de 25.925925925925924 */

const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const altura = 1.8;
let imc = peso / (altura * altura); //calculo do imc é feito com a seguinte fórmula peso / (altura * altura)
let anoNascimento = (2024 - idade);

console.log (`${nome} ${sobrenome} tem ${idade} anos de idade pesa ${peso}kg e tem ${altura}m de altura. O IMC de ${nome}, é de ${imc}. Já seu ano de nasciento foi ${anoNascimento}.`);