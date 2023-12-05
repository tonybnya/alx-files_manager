import { createClient } from 'redis';
import { promisify } from 'util';

class RedisClient {
  // Constructor that creates a client to Redis
  constructor() {
    this.client = createClient();
    // Display any error in the console
    this.client.on('error', (err) => console.log('Redis Client Error', err));
  }

  // Function that checks the status of the connection to Redis
  isAlive() {
    // If the connection to Redis is a success
    if (this.client.connected) {
      return true;
    }
    // Otherwise
    return false;
  }

  // Asynchronous function that takes a string key as argument
  // and returns the Redis value stored for this key
  async get(key) {
    // Call the `get` method of Redis and binds it to the Redis client object
    const binder = promisify(this.client.get).bind(this.client);
    // Then get the corresponding value for the given key
    const value = await binder(key);

    // Return the value
    return value;
  }

  // Asynchronous function that takes a string key,
  // a value and a duration in second as arguments to store it in Redis
  // (with an expiration set by the duration argument)
  async set(key, value, duration) {
    // Call the `set` method of Redis and binds it to the Redis client object
    const binder = promisify(this.client.set).bind(this.client);
    // Store the key/value pair in Redis
    await binder(key, value);
    // Set an expiration/duration time for the operation related to this key
    await this.client.expire(key, duration);
  }

  // Asynchronous function that takes a string key as argument
  // and remove the value in Redis for this key
  async del(key) {
    // Call the `del` method of Redis and binds it to the Redis client object
    const binder = promisify(this.client.del).bind(this.client);
    // Delete the given key to the Redis server
    await binder(key);
  }
}

// Create an instance of the Redis client
const redisClient = new RedisClient();

// Export this instance
module.exports = redisClient;
