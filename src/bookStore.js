const bookStore = require("./booksByCategory.json");

function getTotalCategories(bookStore) {
    return bookStore.length;
}

function showTotalBooksInCategory(bookStore) {
    return bookStore.map(bookStoreItem => {
        console.log(`Total de livros da categoria ${bookStoreItem.category}: ${bookStoreItem.books.length}`);
    });
}

function addNewAuthorToArray(authors, author) {
    if (!authors.includes(author)) {
        authors.push(author);
    }
}

function getTotalAuthors(bookStore) {
    let authors = [];
    
    bookStore
    .forEach(bookStoreItem => {
        bookStoreItem.books.forEach(book => {
            const author = book.author;
            const separator = " e ";

            if (author.includes(separator)) {
                author.split(separator).forEach(author => {
                    addNewAuthorToArray(authors, author);
                });
            } else {
                addNewAuthorToArray(authors, author);
            }
        });
    });
    
    return authors.length;
}

function getAuthorBooks(bookStore, author) {
    let booksOfAuthor = [];

    bookStore
    .forEach(bookStoreItem => {
        bookStoreItem.books.forEach(book => {
            const findedAuthor = book.author;
            const separator = " e ";
            if (findedAuthor.includes(separator)) {
                findedAuthor.split(separator).forEach(findedAuthor => {
                    if (findedAuthor === author) {
                        booksOfAuthor.push(book.title);    
                    }
                });
            } else if (findedAuthor === author) {
                booksOfAuthor.push(book.title);
            }
        });
    });

    return booksOfAuthor;
}

console.log("------------------------------------------------------");
console.log(`Total de categorias: ${getTotalCategories(bookStore)}`);
console.log("------------------------------------------------------");
showTotalBooksInCategory(bookStore);
console.log("------------------------------------------------------");
console.log(`Total de autores: ${getTotalAuthors(bookStore)}`);
console.log("------------------------------------------------------");
console.log("Livros do autor Augusto Cury:");
getAuthorBooks(bookStore, "Augusto Cury").forEach(book => console.log(book));
console.log("------------------------------------------------------");