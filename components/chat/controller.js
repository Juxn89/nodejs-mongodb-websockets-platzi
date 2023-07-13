const store = require("./store");

const addChat = (users) => {
  return new Promise((resolve, reject) => {
    if(!users || !Array.isArray(users)) {
      reject('Incomplete information!');
    }
    const chat = {
      users,
    }

    store.add(chat)
    resolve(chat);
  })
}

const listChats = (userId) => {
  return new Promise((resolve, reject) => {
    resolve(store.list(userId))
  });
}


module.exports = {
  addChat,
  listChats
};