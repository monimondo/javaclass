

// uma função recebe um valor, pode gravar este valor em uma variável e executar ou não uma ação com esses valores (de variável e de dados gravados)
// exemplo de função que não retorna valor

function saudacao1(nome) {
console.log(`Bom dia ${nome}!`)
 
 } //não precisa ponto e virgula
 
 saudacao1('Luiz'); //o console.log aqui imprime Bom dia Monica!
 saudacao1('Maria'); //os parenteses avisam que a função será executada o que está dentro do parentese são os parâmetros que usamos para a função listar durante a execução
 saudacao1('Douglas'); // aqui a função vai imprimir 3x o bom dia com os nomes listados em cada linha como parâmetro


// neste exemplo acima a função apenas mostra/chama alguma coisa não está executando nenhuma tarefa. 
//podemos pedir que a função grave por exemplo alguma informação/valor em uma variável e retorne um resultado desta gravação, como no exemplo;
// podemos desejar que uma função grave um valor em uma variável e escrevemos isso da seguinte maneira

function saudacao(nome) {
console.log(`Bom dia ${nome}!`);
}
const variavvel = saudacao('luiz'); // ('luiz') entre parênteses é o parametro que estamos passando para a função gravar na variável ela vai executar a saudação e gravar "luiz" como nome (parametro estabelecido nas chaves)
console.log(variavvel); // aqui a fução executa a tarefa de saudação (bom dia luiz) mas nao dá nenhum retorno, a variável fica indefinida undefined


//para a função dar um retorno usamos assim:
function saudacao (nome) {
return`Bom dia ${nome}`;
}

const variavel = saudacao ('Luiz');
console.log(variavel);

//posso pedir para alenm de gravar um resultado que a minha função execute uma atividade e salve esse resultado de atividade
// imagine uma soma:

function soma(x, y) {
    const resultado = x + y;
    return resultado;
}

console.log(soma (2, 2));
console.log(soma (8, 2));
console.log(soma (5, 3));
console.log(soma (2, 1));

//podemos determinar o valor dos parametros previamente da seguinte maneira

function soma (x=1, y=1) {
    const resultado = x + y; // se eu nao declarar nenhum parametro qnd for chamar minha função o x e o y terão o valor de 1
    return resultado;
}
const resultado = soma();
console.log(resultado) // resultado 2

//caso eu determine apenas um dos valores do parâmetro: devo escrever assim

function soma (x= 1, y =8) {
    const resultadoo = x+y;
    return resultadoo;
}
const resultadoo = soma (4);
console.log(resultadoo); // ira imprimir 12 soma do y prefixado em 8 mais 4 determinado no parametro de x


function soma (x= 1, y =8) {
    const resultadoo = x+y;
    return resultadoo;
}

const resultadooo = soma (4);
console.log(resultadooo); // ira imprimir 12 soma do y prefixado em 8 mais 4 determinado no parametro de x



const raiz = function (n){
    return n ** 0.5;
}; // neste caso precisa de ponto e virgula - quando a função está dentro da variável

console.log(raiz(9)); //irá imprimir 3
console.log(raiz(16)); //irá imprimir 4
console.log(raiz(25));  //irá imprimir 5

// maneira mais otimizada de escrever uma função de apenas uma linha fica assim

const raizz = n => n ** 0.5; // funciona igual ao modelo de cima porem de forma muito mais otimizada
console.log(raizz(9)); //irá imprimir 3
console.log(raizz(16)); //irá imprimir 4
console.log(raizz(25));  //irá imprimir 5


