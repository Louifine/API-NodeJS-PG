import Book from "../models/interfaces/Book";
import AppDataSource from "../data-source";
class BookService {
  async getAll(): Promise<Book[]> {
    console.log("BookService");
    // A terme il y aura une Requete vers la BDD qui peut prendre du temps donc Asynchrone
    return AppDataSource.query("SELECT * FROM book;");
  }
  async getById(id: string): Promise<Book> {
    console.log("BookService");
    return AppDataSource.query(`SELECT * FROM book WHERE id = ${id};`);
  }
  async create(book: Book): Promise<Book> {
    console.log("BookService");
    return AppDataSource.query(
      `INSERT INTO book (title) VALUES ('${book.title}');`
    );
  }
  async update(id: string, book: Book): Promise<Book> {
    console.log("BookService");
    return AppDataSource.query(
      `UPDATE book SET title = '${book.title}' WHERE id = ${id};`
    );
  }

  async delete(id: string): Promise<Book> {
    console.log("BookService");
    return AppDataSource.query(`DELETE FROM book WHERE id = ${id};`);
  }
}

export default BookService;
