class Book {
    constructor(title, author, publicationDate, isAvailable = true) {
        this.title = title;
        this.author = author;
        this.publicationDate = publicationDate;
        this.isAvailable = isAvailable;
    }
}

class Library {
    constructor() {
        this.books = [];
        this.borrowedBook = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    updateBook(index, book) {
        this.books[index] = book;
    }

    deleteBook(index) {
        this.books.splice(index, 1);
    }

    getBooks() {
        return this.books;
    }

    borrowBook(title) {
        // let available = false;
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].title === title && this.books[i].isAvailable === true) {
                this.borrowedBook.push({ BorrowData: this.books[i] });
                this.books[i].isAvailable = false;
                console.log(`${title} Book borrowed.`);
                // available = true;
                break;
            }
            else if (this.books[i].title === title && this.books[i].isAvailable == false) {
                console.log(`${title} Book is not available`);
            }
        }
    }

    returnBook(title) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].title === title && this.books[i].isAvailable == false) {
                this.books[i].isAvailable = true;
                break;
            }
        }
        console.log(`${title} Book returned.`);

    }

    searchBooks(searchBy) {
        for (let i = 0; i < this.books.length; i++) {

            if (searchBy === this.books[i].title || searchBy === this.books[i].author || searchBy === this.books[i].publicationDate) {
                console.log(this.books[i].title);
                console.log(this.books[i].author);
                console.log(this.books[i].publicationDate);
            }
            else if (searchBy !== this.books[i].title || searchBy !== this.books[i].author || searchBy !== this.books[i].publicationDate) {
                console.log(`${searchBy} is not found !!`);
            }
        }
    }
}

//test cases

const library = new Library();

const book1 = new Book("Shree Bhagwat Geeta", "Shree Krishna", "900 BC");
library.addBook(book1);
const book2 = new Book("Yajurveda", "Veda Vyasa", "800 BCE");
library.addBook(book2);
const book3 = new Book("Rigveda", "VyasJi", "1200 BCE");
library.addBook(book3);
console.log(library.getBooks());

// library.deleteBook(0);
// console.log(library.getBooks());

library.borrowBook("Rigveda");
console.log(library.getBooks());
// library.borrowBook("Rigveda"); 

// library.returnBook("Rigvega");
// console.log(library.getBooks()); 

library.searchBooks("1200 BCE");





