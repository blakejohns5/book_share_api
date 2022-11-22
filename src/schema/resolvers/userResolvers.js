import { User } from "../../models/index.js";



const getUserByEmail = async (parent, args) => {
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
  try {
    const newUser = await User.create({ 
      username: args.username, 
      name: args.name, 
      email: args.email, 
      password: args.password 
      
    });
    return newUser.save()
      .then(result => { 
        console.log(result);
        return { ...result._doc };
    })
  } catch (err) {
    console.log(err);
    throw err;
  }
}


const updateUser = async (parent, args) => {
  const updatedUser = await User.find
}


export {
  getUserByEmail,
  getAllUsers,
  createUser,
}
