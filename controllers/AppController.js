import redisClient from '../utils/redis';
import dbClient from '../utils/db';

class AppController {
  // Endpoint definition: GET /status
  static getStatus(request, response) {
    // Check if Redis and the DB are alive
    // and return the response with a status code 200
    response.status(200).json({ redis: redisClient.isAlive(), db: dbClient.isAlive() });
  }

  // Endpoint definition: GET /stats
  static async getStats(request, response) {
    // Get the number of users in the DB
    const numUsers = await dbClient.nbUsers();
    // Get the number of files in the DB
    const numFiles = await dbClient.nbFiles();
    // Return with a status code 200
    response.status(200).json({ users: numUsers, files: numFiles });
  }
}

module.exports = AppController;
