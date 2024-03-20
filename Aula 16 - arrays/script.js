// arrais são uma lista de coisas
const alunos = ['monica', 'luiz', 'maria'];

// arrays são indexados como acontece nas strings  
//      0123456789
//      monica dos

//arrays são indexados por elementos
            //     0       1         2
const exemplo = ['item1', 'item2', 'item3'];
console.log(alunos[0]); // apenas o indice 0
console.log(alunos[2]); // apenas o indice 2 item3
console.log(alunos); // indice completo


// para alterar um item especifico do array usamos:
alunos[0] = 'eduardo';
console.log(alunos);

//para adicioar um item ao array posso fazer usando o .length, essa diretiva faz uma varredura no arrey ve quantos elementos ele tem e adiciona ao final, no ultimo indice o elemento determinado
alunos[alunos.length] = 'Luiza';
alunos[alunos.length] = 'Larissa';
alunos[alunos.length] = 'Fábio';
console.log(alunos);

// outra maneira de adicionar itens em um array é com a função push aqui não nos importa quantos elementos tem no array ele não calcula nada disso, ele apenas insere um elemento mais ao final
alunos.push('Otávio');
alunos.push('Carluce');
console.log(alunos);


// caso desejemos adicionar um elemento no início do arrey
alunos.unshift('Luiza');
alunos.unshift('Felipe');
console.log(alunos);


//para eu remover um elemento do final do arrey usamos assim:
alunos.pop();
console.log(alunos);

//para eu salvar o elemento removido em uma variável usamos assim:
const removidos = alunos.pop();
console.log(removidos);
console.log(alunos);


//para eu remover um elemento do inicio do arry usamos assim:
const removidosinicio = alunos.shift();
console.log(removidosinicio);
console.log(alunos);

//para remover um elemento do arrey sem alterar os indices fazemos assim, usando o delete. neste caso ele cria um elemento vazio no arrey
delete alunos[1];
console.log(alunos);