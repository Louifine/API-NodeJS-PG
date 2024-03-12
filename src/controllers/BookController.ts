import { Request, Response } from "express";
import BookService from "../services/BookService";

class BookController {
  private bookService = new BookService();

  async getAll(req: Request, res: Response) {
    console.log("BookController");

    try {
      const books = await this.bookService.getAll();
      res.send({ status: "OK", data: books });
    } catch (error) {
      res.status(500).send({ status: "Failed", message: error });
    }
  }

  async getById(req: Request, res: Response) {
    console.log("BookController");

    try {
      const book = await this.bookService.getById(req.params.id);
      res.send({ status: "OK", data: book });
    } catch (error) {
      res.status(500).send({ status: "Failed", message: error });
    }
  }

  async create(req: Request, res: Response) {
    console.log("BookController");

    try {
      const book = await this.bookService.create(req.body);
      res.send({ status: "OK", data: book });
    } catch (error) {
      res.status(500).send({ status: "Failed", message: error });
    }
  }

  async update(req: Request, res: Response) {
    console.log("BookController");

    try {
      const book = await this.bookService.update(req.params.id, req.body);
      res.send({ status: "OK", data: book });
    } catch (error) {
      res.status(500).send({ status: "Failed", message: error });
    }
  }

  async delete(req: Request, res: Response) {
    console.log("BookController");

    try {
      const book = await this.bookService.delete(req.params.id);
      res.send({ status: "OK", data: book });
    } catch (error) {
      res.status(500).send({ status: "Failed", message: error });
    }
  }
}

export default BookController;
