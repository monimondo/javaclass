const numero = Number (prompt ('Digite um número'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p>Seu numero + 2 é ${numero +2}.</p>`;
texto.innerHTML += `<p>Raiz Quadrada do seu número é ${numero ** 0,5}.</p>`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>Arredondado para baixo: ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>Arredondado para cima: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>É NaN?: ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${Math.ceil(numero)}</p>`;

