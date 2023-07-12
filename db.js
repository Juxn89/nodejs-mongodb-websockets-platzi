const db = require('mongoose')

db.Promise = global.Promise;

const Connect = async (url) => {
  await db.connect(url, {
    useNewUrlParser: true
  })

  console.log('[db] Connected successfully!');
}

module.exports = {
  Connect
}
