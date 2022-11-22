import { Book } from "../../models/index.js";



const getAllBooks = async (parent, args) => {      
      const books = await Book.find({})
      return books;
}

const createBook = async (parent, args) => {
  const newBook = await Book.create({ title: args.title, author: args.author, sharedBy: args.sharedBy });
  newBook.save();
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
  getAllBooks,
}
