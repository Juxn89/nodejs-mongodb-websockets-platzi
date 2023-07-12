require('dotenv').config();
const MessageModel = require('./model')

const addMessage = (message) => {
  const newMessage = new MessageModel(message)
  newMessage.save();
}

const getMessage = async (filterUser) => {
  let filter = {};

  if(filterUser !== null) {
    filter = { user: filterUser}
  }

  const messagesList = await MessageModel.find(filter);
  return messagesList;
}

const updateMessage = async(id, message) => {
  // const foundMessage = await MessageModel.findById(id);

  /*
  // Find and update
  const updatedMessage = await Message.findOneAndUpdate(
    { _id: id },
    { message },
    { new: true }
  )
  */

  const foundMessage = await MessageModel.findOne({
    _id: id
  })

  foundMessage.message = message;
  const newMessage = await foundMessage.save();
  return newMessage;
}

const deleteMessage = async (id) => {
  await MessageModel.findByIdAndDelete(id);
}

module.exports = {
  add: addMessage,
  list: getMessage,
  update: updateMessage,
  delete: deleteMessage
}