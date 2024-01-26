class Book {
  constructor(title, author, ISBN, availability = true) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.availability = availability;
  }

}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  removeBook(ISBN) {
    this.books = this.books.filter((book) => book.ISBN !== ISBN);
  }

  displayAvailableBooks() {
    console.log("Books Available:")
    this.books.forEach((book, index) =>{
      if (book.availability) {
        console.log(`${index + 1}. ${book.title} written by ${book.author}`);
        }
      });
  }
}

class ReferenceBook extends Book {
  constructor(title, author, ISBN, category, availability = true) {
    super(title, author, ISBN, availability = true);
    this.category = category;
  }
}

//Create Instances of Library, Book and ReferenceBook classes
const library = new Library();

const book1 = new Book("Broken Money", "Lyn Alden", 13);
const book2 = new Book("The Fatherhood Principle", "Myles Munroe", 5);
const book3 = new Book("Pilgrim's Progress", "John Bunyan", 18);

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.displayAvailableBooks();

console.log("\n Removing Broken Money...\n")
library.removeBook(13);
library.displayAvailableBooks();