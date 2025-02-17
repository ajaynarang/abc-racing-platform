import Redis from "ioredis";

export class CacheService {
  private redis: Redis;

  constructor() {
    // should come from env, leaving it for demo purpose
    this.redis = new Redis({
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
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
