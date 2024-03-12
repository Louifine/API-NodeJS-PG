import { Router } from "express";
import BookController from "../controllers/BookController";

const bookRouter = Router();
const bookController = new BookController();

bookRouter.get("/", (req, res) => {
  console.log("BookRouter");
  bookController.getAll(req, res);
});

bookRouter.get("/:id", (req, res) => {
  console.log("BookRouter");
  bookController.getById(req, res);
});

bookRouter.post("/", (req, res) => {
  console.log("BookRouter");
  bookController.create(req, res);
});

bookRouter.put("/:id", (req, res) => {
  console.log("BookRouter");
  bookController.update(req, res);
});

bookRouter.delete("/:id", (req, res) => {
  console.log("BookRouter");
  bookController.delete(req, res);
});

export default bookRouter;
