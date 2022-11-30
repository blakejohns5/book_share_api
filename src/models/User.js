import mongoose from 'mongoose';


const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 5,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: 6,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
},
//   booksShared: [
//     {
//     type: mongoose.Schema.Types.ObjectId5t3,
//     ref: "books"
//     },
//   ],
//   booksBorrowed: [
//     {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "books"
//     },
//   ],
//   active: {
//     type: Boolean,
//     default: false,
//   }
// },
{ timestamps: true },
);


const User = mongoose.model('users', UserSchema)

export default User;