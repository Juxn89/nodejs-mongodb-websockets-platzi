require('dotenv').config();
const UserModel = require('./model')

const addUser = (user) => {
  if(!user)
    return Promise.reject('Invalid name');

  const newUser = new UserModel(user)
  newUser.save();
}

const getUser = async (filterUser) => {
  let filter = {};

  if(filterUser !== null) {
    filter = { user: filterUser}
  }

  const userList = await UserModel.find(filter);
  return userList;
}

const updateUser = async(id, name) => {
  // const foundUser = await UserModel.findById(id);

  /*
  // Find and update
  const updatedUser = await UderModel.findOneAndUpdate(
    { _id: id },
    { message },
    { new: true }
  )
  */

  const foundUser = await UserModel.findOne({
    _id: id
  })

  foundUser.name = name;
  const newUser = await foundUser.save();
  return newUser;
}

const deleteUser = async (id) => {
  await UserModel.findByIdAndDelete(id);
}

module.exports = {
  add: addUser,
  list: getUser,
  update: updateUser,
  delete: deleteUser
}