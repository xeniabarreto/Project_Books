const books = require('./database');

const input = require('readline-sync');

books.sort((a,b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0);

console.log('\n---------------------------------------\n   Projeto - Sistema de Livros\n   BIBLIOTECA PESSOAL\n   by Xenia Barreto - Seja bem vinda!\n---------------------------------------');

const booksTotal = books.length;
console.log(`\n Veja abaixo a lista de meus ${booksTotal} livros disponiveis: `);
console.table(books);

//ITEM 1 - buscar livros pela categoria
const seeBooksGenre = input.question('Deseja encontrar um livro por genero?(S/N): ').toLocaleUpperCase();

if (seeBooksGenre === 'S'){ 
    console.log('\nTemos seguintes generos:\n- AUTOAJUDA\n- BIOGRAFIA\n- PROFISSIONAL ACADEMICO\n- PSICOLOGIA\n- ROMANCE\n');
    
    const whatsGenre = input.question('Qual genero deseja visualizar? ').toLocaleUpperCase();
    console.log('\nEsses são os livros disponiveis no genero escolhido:');

    const genre = books.filter ((index) => index.genre == whatsGenre);
    console.table(genre);
}else{
    console.log('\nNão tem problema! :)\nVamos manter em ordem alfabetica para sua melhor experiencia!\n');
}


//ITEM 2 - buscar livros recomendados para leitura
const recommend = input.question('Gostaria de alguma recomendacao?(S/N): ').toLocaleUpperCase();

if (recommend === 'S'){ 
    console.log('\nRecomendamos os seguintes livros: ');
    const recommendBook = books.filter( (index)=> index.recommend == true); 
    console.table(recommendBook);
}else{
    console.log('\nOk, vamos partir para proxima opcao!\n');
}

//ITEM 3 - buscar livros que já li
const readBooks = input.question('Deseja visualizar os livros os quais ja li?(S/N): ').toLocaleUpperCase();

if (readBooks === 'S'){
  console.log ('\nEstes saos os livros que li: ');
  const read = books.filter((index) => index.read == true);
  console.table(read);
}else{
  console.log ('\nTudo bem! Quem sabe numa proxima, não é mesmo?!\n');
}

//ITEM 4 -buscar livros que não li e estão na minha lista de desejos
const wishlist  = input.question('Deseja visualizar minha lista de desejos?(S/N): ').toLocaleUpperCase();

if(wishlist  === 'S'){
  console.log('\nEstes são os livros da nossa lista de desejo: ');
  const whis = books.filter((index) => index.read == false);
  console.table(whis);
}else{
  console.log('\nQue pena!\nServiria como dica para um possivel presente de aniversário, rs!\n');
}

//ITEM 5 - buscar livros por ordenação de pagina de forma crescente e em ordem alfabética, caso usuário(a) não escolha a prmeira opção. 
const pageOrder = input.question('Deseja visualizar os livros por ordem de pagina?(S/N): ').toLocaleUpperCase();

if (pageOrder === 'S'){
  console.log('\nSegue os livros ordenados do menor ao maior numero de paginas:');
  books.sort((a,b) => a.page - b.page);
  console.table(books);
}else{
  console.log ('\nÉ isso ai, voce e como eu, encara qualquer livro!!!');
}

//FINAL - Solicitação de sugestao e despedida
const sugestao = input.question('\nAGORA E COM VOCE!\nMe indique um livro que leu e gostou: ').toLocaleUpperCase();
console.log('\n=======================================\nObrigada pela visita. Volte sempre!!!\n=======================================\n');


