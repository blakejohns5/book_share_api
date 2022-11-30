import { Book } from "../../models/index.js";



const getSingleBook = async (parent, args) => {
  try {
    const { _id, title, author } = args;
    const book = await User.findOne({ title })
    return book;
  } catch (err) {
    console.log(err);
    throw err;
  }
    
}


const getAllBooks = async (parent, args) => {      
      const books = await Book.find({})
      return books;
}

const createBook = async (parent, args) => {
  const { title, author } = args.data;
  const newBook = await Book.create({ title, author });
  newBook.save();
  // const createdBook = await Book.find({ title: args.title })
  return newBook;
}


const updatedBook = async (parent, args) => {
  const updatedBook = await Book.findOne({ _id: args._id })
  updatedBook = {
    ...updatedBook,
    ...args
  }
  updatedBook.save();

}


export {
  createBook,
  getSingleBook,
  getAllBooks,
}
