const books = require('./database') 

const input = require('readline-sync');

books.sort((a,b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0);

console.log('\n---------------------------------------\n   Projeto - Sistema de Livros\n   BIBLIOTECA PESSOAL\n   by Xenia Barreto - Seja bem vinda!\n---------------------------------------')

const booksTotal = books.length
console.log(`\n Veja abaixo a lista de meus ${booksTotal} livros disponiveis: `)
console.table(books)
