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

    console.log(fullMessage);
    resolve(fullMessage);
  })
}

module.exports = {
  addMessage
};