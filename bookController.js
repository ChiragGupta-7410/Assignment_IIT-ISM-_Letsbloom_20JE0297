const Book = require("./bookModel.js");
const booksData = require("./books.json");

const asyncErrorHandler = (asyncErrorHandler) => (req, res, next) => {
  Promise.resolve(asyncErrorHandler(req, res, next)).catch(next);
};

exports.addSampleData = async (req, res, next) => {
  const count = await Book.countDocuments();

  if (count === 0) {
    await Book.insertMany(booksData);
  }
};

exports.getAllBooks = asyncErrorHandler(async (req, res, next) => {
  let books;
  try {
    books = await Book.find();
    res.status(200).json({
      success: true,
      books,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
});

exports.addNewBook = asyncErrorHandler(async (req, res, next) => {
  let book;
  try {
    book = await Book.create(req.body);
    res.status(201).json({
      success: true,
      book,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
});

exports.updateBookDetails = asyncErrorHandler(async (req, res, next) => {
  let book;
  try {
    book = await Book.findById(req.params.id);

    if (book) {
      book = await Book.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      });
      res.status(200).json({
        success: true,
        book,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Book Not Found",
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
});
