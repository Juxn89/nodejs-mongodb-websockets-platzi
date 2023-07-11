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

const getMessage = () => {
  return new Promise((resolve, reject) => {
    resolve(store.list())
  });
}

module.exports = {
  addMessage,
  getMessage
};