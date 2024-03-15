// import Book from "../models/interfaces/Book";
import AppDataSource from "../data-source";
import { Book } from "../entities/Book";
// import AppDataSource from "../data-source";
class BookService {
  private bookRepository = AppDataSource.getRepository(Book);

  async getAll() {
    console.log("BookService");
    // A terme il y aura une Requete vers la BDD qui peut prendre du temps donc Asynchrone
    // return AppDataSource.query("SELECT * FROM book;");
    return this.bookRepository.find();
  }
  async getById(id: number) {
    console.log("BookService");
    // return AppDataSource.query(`SELECT * FROM book WHERE id = ${id};`);
    return this.bookRepository.findOneBy({ id: id });
  }
  async create(book: Book) {
    console.log("BookService");
    // return AppDataSource.query(
    //   `INSERT INTO book (title) VALUES ('${book.title}');`
    // );
    const newBook = this.bookRepository.create(book);
    return this.bookRepository.save(newBook);
  }
  async update(id: string, book: Book) {
    console.log("BookService");
    // return AppDataSource.query(
    //   `UPDATE book SET title = '${book.title}' WHERE id = ${id};`
    // );
    return this.bookRepository.update(id, book);
  }

  async delete(id: string) {
    console.log("BookService");
    // return AppDataSource.query(`DELETE FROM book WHERE id = ${id};`);
    return this.bookRepository.delete(id);
  }
}

export default BookService;
