// os dados primitivos são: - string - number - booleam - undefined - null - bigint e symbol
// estes dados represetnam valores imutaveis - e seus valores são copiados. quando se copia um valor e posteriormente se altera ou a origem ou a cópia um não é alterado pelo outro


let nome = 'Luiz';
console.log(nome[0]);
//imprime L pois o indice da string na posição 0 é L

// se tentamos alterar esse indice usando 
nome[0] = 'R';
console.log(nome[0], nome);
//imprime L Luiz o indice segue sendo o L pois uma string é um tipo de dado primitivo e seu valor é imutável




// dados passados por referência são mutáveis e são:
// arrays, functions, e objetos - quando os dados são passados por referencia eles apontam para o mesmo local na memória e uma vez que um deles é alterados ambos são atingidos como vemos no exemplo


let a = [1, 2, 3]; //colchetes cria array
let b = a; //b tem o mesmo valor de a
console.log(a, b);

//imprime  [1, 2, 3] [1, 2, 3]

a.push(4); //inserindo um item mais no arrey de a
console.log(a, b);
//imprime [1, 2, 3, 4] [1, 2, 3, 4]

b.pop(4);
console.log(a, b);
//imprime  [1, 2, 3] [1, 2, 3]


// resumidamente os dados primitivos quando usados com o = copim os valores 
// e os dados passados por referencia, quando usados com o = passam a apontar para o mesmo local na memoria 