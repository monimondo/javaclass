// [] - Array
// {} - objeto 
// argumento são os valores que iremos passar para os parâmetros. eles são determinados nos objetos e os parâmetros por sua vez são determinados na função.

// conjunto maior pessoa 1 é chamado de objeto
const pessoa1 = {
    nome: 'Luiz', // aqui cada linha é atributo do objeto, separados por virgula entre aspas
    sobrenome: 'Miranda',
    idade: '25',
};

//para acessar os atributos deste objeto  listamos
console.log(pessoa1.nome); //nome do objeto que quero acessar . nome do atributo que desejo imprimir
console.log(pessoa1.sobrenome); //nome do objeto que quero acessar . (unido por um ponto) + o nome do atributo que desejo imprimir
console.log(pessoa1.idade); //nome do objeto que quero acessar . nome do atributo que desejo imprimir



function criaPessoa(nome, sobrenome, idade) {  // o que eu indico aqui entre parenteses chamamos de parâmetros
    return{
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,
    };
}
const pessoa0 = criaPessoa('Luiz', 'Otávio',32); // o que se coloca aqui de valor entre os parenteses se chama argumentos - na função se chama paramentro e no objeto se chama argumento
const pessoa2 = criaPessoa('Carla', 'Mondo', 55); // argumnetos são os valores que enviamos para serem gravados nos parâmetros
const pessoa3 = criaPessoa('Armando', 'Garcia', 25);
const pessoa4 = criaPessoa('Luiza', 'Buss', 12);

console.log(pessoa0.nome, pessoa0.sobrenome, pessoa0.idade);
console.log(pessoa2.nome, pessoa2.sobrenome, pessoa2.idade);
console.log(pessoa3.nome, pessoa3.sobrenome, pessoa3.idade);
console.log(pessoa4.nome, pessoa3.sobrenome, pessoa3.idade);


const pessoa6 = {  //variavel - objeto - posso referenciar dentro da função / metodo qualquer atributo do meu objeto.
    nome: 'Luiz',  //atributos
    sobrenome: 'Miranda',
    idade: 25,

    fala() {  // quando uma função está dentro de um objeto ela é chamada de método - funções e métodos executam ações
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`); //referenciado os atributos do objeto dentro do método usamos this
        console.log(`A minha idade atual é ${this.idade}`);
    },

    incrementaIdade() {
        this.idade++; // cada vez que esse método de fala for acionado ele vai verificar a idade da pessoa do objeto e vai incrementar um ano a mais da idade passada como argumento para o parâmetro
    },
}

pessoa6.fala();
pessoa6.incrementaIdade(); 



