const store = require("./store");

const addUser = (name) => {
  return new Promise((resolve, reject) => {
    if(!name) {
      reject('Incomplete information!');
    }
    const fullUser = {
      name,
    }

    store.add(fullUser)
    resolve(fullUser);
  })
}

const getUser = (filterUser) => {
  return new Promise((resolve, reject) => {
    resolve(store.list(filterUser))
  });
}

const updateUsers = (id, user) => {
  return new Promise(async (resolve, reject) => {
    if(!id || !user) reject('Incomplete information!')

    const result = await store.update(id, user)
    resolve(result)
  })
}

const deleteUser = (id) => {
  return new Promise(async (resolve, reject) => {
    if(!id) reject('Internal error')

    await store.delete(id);
    resolve('Message deleted successfully!')
  })
}

module.exports = {
  addUser,
  getUser,
  updateUsers,
  deleteUser
};