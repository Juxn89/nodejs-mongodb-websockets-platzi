const store = require("./store");

const addMessage = (user, message) => {
  return new Promise((resolve, reject) => {
    if(!user || !message) {
      console.error('[messageController] Incomplete information');
      reject('Incomplete information!');
    }
    const fullMessage = {
      user,
      message,
      createAt: new Date()
    }

    store.add(fullMessage)
    resolve(fullMessage);
  })
}

const getMessage = (filterUser) => {
  return new Promise((resolve, reject) => {
    resolve(store.list(filterUser))
  });
}

const updateMessage = (id, message) => {
  return new Promise(async (reject, resolve) => {
    if(!id || !message) reject('')

    const result = await store.update(id, message)
    resolve(result)
  })
}

const deleteMessage = (id) => {
  return new Promise(async (resolve, reject) => {
    if(!id) reject('Internal error')

    await store.delete(id);
    resolve('Message deleted successfully!')
  })
}

module.exports = {
  addMessage,
  getMessage,
  updateMessage,
  deleteMessage
};