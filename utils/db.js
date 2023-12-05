import { MongoClient } from 'mongodb';

// host: from the environment variable DB_HOST or default: localhost
const HOST = process.env.DB_HOST || 'localhost';

// port: from the environment variable DB_PORT or default: 27017
const PORT = process.env.DB_PORT || 27017;

// database: from the environment variable DB_DATABASE
// or default: files_manager
const DATABASE = process.env.DB_DATABASE || 'files_manager';

// Set the MongoDB connection URL
const url = `mongodb://${HOST}:${PORT}`;

class DBClient {
  // Constructor that creates a client to MongoDB
  constructor() {
    // Create an instance of a MongoDB client
    this.client = new MongoClient(
      url,
      { useUnifiedTopology: true, useNewUrlParser: true },
    );

    // Connect to MongoDB and set the database
    this.client.connect().then(() => {
      this.db = this.client.db(`${DATABASE}`);
    }).catch((err) => {
      console.log(err);
    });
  }

  // Function that checks the status of the connection to MongoDB
  isAlive() {
    return this.client.isConnected();
  }

  // asynchronous function that returns the number of documents
  // in the collection users
  async nbUsers() {
    // Get the collection users
    const users = this.db.collection('users');
    // Count the number of documents
    const docs = await users.countDocuments();
    return docs;
  }

  // asynchronous function that returns the number of documents
  // in the collection files
  async nbFiles() {
    // Get the collection files
    const files = this.db.collection('files');
    // Count the number of documents
    const docs = await files.countDocuments();
    return docs;
  }
}

// Create an instance of the MongoDB client
const dbClient = new DBClient();

// Export this instance
module.exports = dbClient;
