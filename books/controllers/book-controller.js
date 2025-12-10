const book = require('../models/book');

const getAllBooks = async (req, res) => {
  try {
    const books = await book.find();

    res.status(200).json({
      success: true,
      count: books.length,
      data: books
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Server Error"
    });
  }
};
const getSingleBookById = async (req, res) => {};

const addNewBook = async (req, res) => {
  try {
    const newBookFormData = req.body;
    const newlycreatedBook = await book.create(newBookFormData);

    res.status(201).json({
      success: true,
      message: 'Book added Successfully',
      data: newlycreatedBook
    });

  } catch (e) {
    console.log(e);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

const updateBook = async (req, res) => {};

const deleteBook = async (req, res) => {};

module.exports = {
  getAllBooks,
  getSingleBookById,
  addNewBook,
  updateBook,
  deleteBook
};
