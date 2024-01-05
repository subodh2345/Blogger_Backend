const { MongoClient } = require('mongodb');

async function dbConnect() {
  const client = new MongoClient('mongodb://127.0.0.1:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    console.log('Connected to MongoDB');
    return client.db('new_blogger_db');
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
  }
}

module.exports = { dbConnect };
