// existem 6 tipos de dados primitivos: string, number, undefined, boolean, symbol;

//dados primitivos do tipo string
const nome = 'Luiz';
const nome1 = "Luiz";
const nome2 = `Luiz`;

// dados primitivos do tipo number
const num1 = 10; 
const num2 = 10.52;

//variavel sem valor atribuido (undefined) não aponta para nenhum local na mamória
//este não é um valor declarado PELO DEV , quem faz esse undefined é o motor do js.
// quando deixamos uma váriavel sem valor, tanto a variável quanto o seu valor, serão undefined.
let nomeAluno;

//para deixar uma variável vazia declaramos assim como é mostrado no exemplo da linha 15. null vai apontar para o tipo undefined
const sobrenomeAluno = null;

// variável do tipo boolean = true or false (lógico)
const aprovado = false; 

// para confirmar o tipo de variável usamos typeof e o js nos mostra seu tipo.
console.log(typeof num2, num2)

// existem dois tipos de dados: os primitivos e os passados por uma constante.
// o operador para atribuição de valor é o sinal de =
