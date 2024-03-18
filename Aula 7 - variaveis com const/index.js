// não podemos criar variaveis do tipo const com palavras reservadas como por exemplo: else.
// não podemos nomear as variaveis do tipo const começando seu nome com números exemplo: 1nome
// iniciar variaveis do tipo const simples com nome em minúsculas
// const nao podem conter traços ou espaços
// para nomes compostos usar camelCase exeplo: nomeCompletoDoCliente
// constantes são case-sensitive - ela diferencia entre maiusculas e minúsculas
// é fundamental nomear as consts com nomes que façam sentido / referência ao uso/dado listado
// NÃO podemos alterar o valor de variaveis do tipo const pois elas são constantes
// NÃO podemos criar variaveis do tipo const sem atribuir a ela o seu valor

const nome = 'João';

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5; //aqui não temos mais o valor inicial da primeira conta.

console.log(resultadoTriplicado);
 
//sobre o typescreapt  posso usar o console.log com a diretiva TYPEOF para identificar o tipo da variável const como no exemplo

const objeto = 'cinco';

console.log(typeof objeto)

// quando usamos duas variáveis alguns detalhes precisam ser cuidados, o sinal matematico da soma por exemplo, pode ser usado entre dois valores do tipo number e resultar uma soma (operação matemática), porém
// utilizado no console.log estando entre dois valores de tipos diferentes, ele serve para concatenação

const item = '5';
const item2 = 1;
console.log(item + item2);
//resultado é 51
//ou 
const item3 = 1;
const item4 = 1;
console.log(item3 + item4);
//resultado é 2

const item5 = '7';
const item6 = 7;

console.log(typeof item5 + item6);
//resultado é string7

console.log(typeof (item5 + item6));
//resultado é STRING

const item7 = 12;
const item8= 12;
console.log(typeof (item7 + item8));
//resultado é NUMBER