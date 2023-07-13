require('dotenv').config();
const MessageModel = require('./model')

const addMessage = (message) => {
  const newMessage = new MessageModel(message)
  newMessage.save();
}

const getMessage = async (filterUser) => {
  return new Promise(async (resolve, reject) => {
    let filter = {};

    if(filterUser !== null) {
      filter = { user: filterUser}
    }

    await MessageModel
      .find(filter)
      .populate('user')
      .exec()
      .then(populated => resolve(populated))
      .catch(err => reject(err))
  });
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