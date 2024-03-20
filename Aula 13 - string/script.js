let umaString = "um 'texto'";  // posso usar aspas duplas para determinar e usar simples no texto
let duasString = 'um "texto"'; // posso usar aspas simples para determinar e usar duplas no texto
let tresString = "um \"texto\""; // usamos  a barra iinvertida para determinar a string com aspas do mesmo tipo no exemplo aspas duplas
let quatroString = 'um \\texto'; // para imprimir uma barra invertida usamos ela duas vezes, a primeira sera o escape e a segunda será impressa
// para imprimir apenas uma das letras da strins usamos o indice que começa sempre em zero na palavra zer por exeplo seria assim
// console.log('zero'[2]); aqui o console.log ira imprimir apenas o E da palavra zero. Se nos colchetes eu colocar o 4 imprime o O e se coloco por exemplo o 8, como não existe ficará undefined
// para ver as opções dentro da string coloca um ponto após o nome da variável e o vc code irá listar as opções

console.log(quatroString);
