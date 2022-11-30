import mongoose from 'mongoose';


const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  genre: {
    type: Array,
  },
  binding: {
    type: String,
  },
  // // sharedBy: [
  // //   {
  // //     type: mongoose.Schema.Types.ObjectId,
  // //     ref: "users",
  // //   }
  // // ],
  // // borrowedBy: [
  // //   {
  // //     type: mongoose.Schema.Types.ObjectId,
  // //     ref: "users",
  // //   }
  // // ],
  // // currentlyBorrowedBy: {
  // //   user: {
  // //     type: mongoose.Schema.Types.ObjectId,
  // //     ref: "users"
  // //   },
  // //   dueDate: {
  // //     type: Date,
  // //   }
  // // }
}, 
{ timestamps: true },
);


const Book = mongoose.model('books', BookSchema)


export default Book;