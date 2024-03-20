// // /** operadores aritméticos 
// //  * + faz a adição e a concatenação dos valroes
// //  * - subtração
// //  * / divisão
// //  * * multiplicação
// //  * ** potenciação
// //  * % mostra o resto da divisão
// //  * 
// //  * () sempre o que estiver entre parenteses é calculado primeiro
// //  *  depois a pontenciação
// //  * depois multiplicação e divisão
// //  * e por último soma e subtração
// //  * */ 


// // // quando precisamos alterar a ordem que as operações acontecem, usamos parenteses como no exemplo abaixo

const num1 = 5;
const num2 = 2;
const num3 = 10;
console.log((num1 + num2) * num3) //aqui o que está dentro do parentese acontece primeiro e depois a multiplicação
//resultado: 2+5 = 7 *10 = 70


// // // quando eu não uso os parentenses a ordem é como acima, primeiro a multiplicação
const num4 = 5;
const num5 = 2;
const num6 = 10;
console.log(num1 + num2 * num3) //aqui o que está dentro do parentese acontece primeiro e depois a multiplicação
//resultado: 2*10 = 20 + 5 = 25

//quando há necessidade de incrementar valor ao valor de uma variável eu uso o incrementador ++
//e temos duas maneiras de fazer isso

let contador = 1; // se eu colocar o console.log aqui para imprimir o contador ele vai imprimir 1
console.log(contador++) // este console.log aqui está com o valor de 1 original do contador, como ele tem o incrementador, na próxima linha o valor dele será o original + 1
console.log(contador)// aqui o valor da impressão é 2
//na primeira leitura ele imprime o valor da variável 
//na segunda leitura ele imprime o valor da variável + 1

console.log(++contador) //aqui seria 2 como resultado 1 do incremento + 1 do contador
console.log(++contador) // nesta linha por estar embaixo seria 2 do incremento (1 do incremento linha 41 e 1 do incremento linha atual) + 1 do contador, resultado de impressão 3
console.log(++contador) // nesta linha por estar embaixo seria 3 do incremento (1 do incremento linha 41, 1 do incremento linha 42, um incremento da linha atual) + 1 do contador, resultado de impressão 4
console.log(contador) // aqui o resultado da impresao segue sendo 4 pq referencia a linha de cima e nao existe incremento algum.


//quando há necessidade de decrementar valor ao valor de uma variável eu uso o decrementador -- e ele subtrai 1 a cada leitura

let conta = 10;
 console.log(conta--); //resultado aqui sendo 10
 console.log(conta); // aqui o resultado seria 9
 console.log(conta--); // aqui o resultado seria 9 também
 console.log(conta--); // aqui o resultado seria 8 acima 9 pq qnd colocamos o decrementador pela primeira vez na linha após a varialvel ter sido lida sem decrementador o console le apenas o primeiro resultato ou seja a variavel sem tirar nada na proxima linh ele tira
 console.log(conta--);


//quando há necessidade de alterar o valor da variavel com valores específicos como de 2 em 2
//fazemos da seguinte forma

const passo = 2; // determinamos o valor que queremos que seja in ou decrementado
let contando = 0; // determinamos o valor da variavel

contando = (contando + passo); //escrevemos a função
console.log(contando); //aqui vai ser 2 o resultado
contando = (contando + passo); //escrevemos a função
console.log(contando); //aqui vai ser4 o resultado
contando = (contando + passo); //escrevemos a função
console.log(contando); //aqui vai ser 6 o resultado
contando = (contando + passo); //escrevemos a função
console.log(contando); //aqui vai ser 8 o resultado

// uma maneira otimizada de se escrever essas funcões relacionadas a contador é
// estes são os operadores de atribuição

let ccontaddor = 2;
contador *= 2; // aqui lemos contador é igual a contador vezes 2 

// NaN - significa not a number
/** Atenção: operações numericas funcionam com number, porem o js tenta resolver quando se tem por exemplo uma string na variavem e um number em outra. para garantir que temos
 * os dados do mesmo tipo para executar a função desejada podemos usar algumas funções como
 *  parseInt('');  - tudo que estiver dentro do parenteses essa função vai transformar em um numero inteiro - usado por exemplo para arredondar numeros com virgula;
 *  parseFloat(''); - considera os decimais na operação
 *  ou apenas Number - tipamos que tudo ali é numero e caso haja um string na variável ele acusa um erro.
 * 
 * 
 */

