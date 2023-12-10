const express = require("express");
const {
  getAllBooks,
  addNewBook,
  updateBookDetails,
  addSampleData,
} = require("./bookController.js");

const app = express();
const router = express.Router();

addSampleData();

router.route("/api/books").get(getAllBooks).post(addNewBook);
router.route("/api/books/:id").put(updateBookDetails);

app.use(express.json());
app.use(router);

module.exports = app;
