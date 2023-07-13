require('dotenv').config();
const ChatModel = require('./model')

const addChat = (chat) => {
  if(!chat)
    return Promise.reject('Invalid name');

  const newChat = new ChatModel(chat)
  newChat.save();
}

const getChat = async (userId) => {
  return new Promise((resolve, reject) => {
    let filter = {};

    if(userId) {
      filter = { users: userId}
    }

    ChatModel.find(filter)
      .populate('users')
      .exec()
      .then(data => resolve(data))
      .catch(err => reject(err))
    return userList;    
  })
}

module.exports = {
  add: addChat,
  list: getChat
}