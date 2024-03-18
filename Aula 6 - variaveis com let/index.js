let nome = 'Monica';


console.log(nome, 'nasceu em 1984.');
console.log('Em 2000', nome, 'conheceu Maria.');
console.log(nome, 'casou-se com Maria em 2012.');
console.log('Maria teve 1 filho com', nome, 'em 2015.');
console.log('O filho de', nome, 'se chama Eduardo.');

// não podemos criar variáveis com palavras reservadas como por exemplo: else.
// não podemos nomear as variáveis começando seu nome com números exemplo: 1nome
// iniciar variáveis simples com nome em minúsculas
// nvariáveis nao podem conter traços ou espaços
// para nomes compostos usar camelCase exeplo: nomeCompletoDoCliente
// variáveis são case-sensitive - ela diferencia entre maiusculas e minúsculas
// é fundamental nomear as variáveis com nomes que façam sentido / referência ao uso/dado listado
// podemos alterar o valor da variável mas nunca redeclarar a variável usando let no mesmo sistema


// exemplo de como redefinir o valor de variável: na linha 22 o valor seria João e na linha 24 o valor é alterado para monica, então a partir dali ele passa a ter o segundo valor.
let nomeCliente = 'João';
console.log(nomeCliente);

nomeCliente = 'Monica';
console.log(nomeCliente);