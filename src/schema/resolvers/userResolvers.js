import { User } from "../../models/index.js";



const getSingleUser = async (parent, args) => {
  try {
    const { email } = args;
    const user = await User.findOne({ email })
    return user;
  } catch (err) {
    console.log(err);
    throw err;
  }
    
}

const getAllUsers = async (parent, args) => {        
  try {
    const users = await User.find({})
    return users;
  } catch (err) {
    console.log(err)
    throw err;
  }
 
}

const createUser = async (parent, args) => {
  console.log(args)
  try {
    const newUser = await User.create({ 
      username: args.username, 
      email: args.email, 
      password: args.password 
    });
    newUser.save();
    return newUser;
    
  } catch (err) {
    console.log(err);
    throw err;
  }
}





export {
  getSingleUser,
  getAllUsers,
  createUser,
}
