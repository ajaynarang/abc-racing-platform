import Redis from "ioredis";
import "dotenv/config"; 

export class CacheService {
  private redis: Redis;

  constructor() {
    this.redis = new Redis({
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT ? parseInt(process.env.REDIS_PORT) : 6379,
      password: process.env.REDIS_PASSWORD,
      db: 0,
    });
  }

  async get(key: string): Promise<string | null> {
    return await this.redis.get(key);
  }

  async set(key: string, value: any): Promise<void> {
    await this.redis.set(key, JSON.stringify(value));
  }

  disconnect(): void {
    this.redis.disconnect();
  }
}
