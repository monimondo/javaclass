//o exercício consiste em apontar o valor de A para B de B para C e de C para A

let varA = 'A'; //a vai ter o valor de b
let varB = 'B'; // b vai ter o valor de c
let varC = 'C'; // c vai ter o valor de a


//resultado
//guardamos o vaor de A em uma variável temporária para que o valor de A nao seja alterado pela linha de leitura do motor
const varATemp = varA // const pq o valor de a nao será alterado
varA = varB; //b 
varB = varC; //c
varC = varATemp; //a

console.log(varA, varB, varC);


// usando a lógica de programação podemos usar

[varA, varB, varC] = [1 , 2 , 3 ] //os numeros aqui só para mostrar que dentro de colchetes, por estar na mesma linha uma variavewl nao altera o valor da outra então apenas invertendo posiçõa podeoms chegar no resultado

//solução adequada pois nao precisa criar novas variaveis para guardar valor seria
[varA, varB, varC ] = [varB, varC,varA]

console.log(varA, varB, varC);
// imprime o resultado desejado B C A
