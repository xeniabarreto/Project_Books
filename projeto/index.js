const books = require('./database') 

const input = require('readline-sync');

books.sort((a,b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0);

console.log('\n---------------------------------------\n   Projeto - Sistema de Livros\n   BIBLIOTECA PESSOAL\n   by Xenia Barreto - Seja bem vinda!\n---------------------------------------')

const booksTotal = books.length
console.log(`\n Veja abaixo a lista de meus ${booksTotal} livros disponiveis: `)
console.table(books)

//ITEM 1 - buscar livros pela categoria 
const seeBooksGenre = input.question('Deseja encontrar um livro por genero?(S/N): ').toLocaleUpperCase();

if (seeBooksGenre === 'S'){ 
    console.log('\nTemos seguintes generos:\n- AUTOAJUDA\n- BIOGRAFIA\n- PROFISSIONAL ACADEMICO\n- PSICOLOGIA\n- ROMANCE\n');
    const whatsGenre = input.question('Qual genero deseja visualizar? ').toLocaleUpperCase();
    console.log('\nEsses são os livros disponiveis no genero escolhido:');

function genre(books){
    return books.genre === whatsGenre
}
    const foundGenre = books.filter(genre);
    console.table(foundGenre);
}else{
    console.log('\nNão tem problema! :)\nVamos manter em ordem alfabetica para sua melhor experiencia!\n');
}

//ITEM 2 - buscar livros recomendados para leitura
const recommend = input.question('Gostaria de alguma recomendacao?(S/N): ').toLocaleUpperCase();

if (recommend === 'S'){ 
    console.log('\nRecomendamos os seguintes livros: ');
    const recommendBook = books.filter( (index)=> index.recommend == true); 
    console.table(recommendBook)

}else{
    console.log('\nOk, vamos partir para proxima opcao!\n');
}
