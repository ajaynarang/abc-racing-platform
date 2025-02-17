import { Fixture } from "../types/fixture";
import Redis from "ioredis";
import { CacheService } from "./cache-service";

//mock data
const FIXTURES_MOCK_DATA: Fixture[] = [
  {
    id: "1",
    raceName: "Australian Grand Prix",
    date: "2025-03-16",
    circuit: "Albert Park Circuit",
    location: "Melbourne, Australia",
  },
  {
    id: "2",
    raceName: "Bahrain Grand Prix",
    date: "2025-03-30",
    circuit: "Bahrain International Circuit",
    location: "Sakhir, Bahrain",
  },
  {
    id: "3",
    raceName: "Monaco Grand Prix",
    date: "2025-05-25",
    circuit: "Circuit de Monaco",
    location: "Monte Carlo, Monaco",
  },
  {
    id: "4",
    raceName: "British Grand Prix",
    date: "2025-07-06",
    circuit: "Silverstone Circuit",
    location: "Silverstone, United Kingdom",
  },
  {
    id: "5",
    raceName: "Japanese Grand Prix",
    date: "2025-10-12",
    circuit: "Suzuka International Racing Course",
    location: "Suzuka, Japan",
  },
  {
    id: "6",
    raceName: "Canadian Grand Prix",
    date: "2025-06-08",
    circuit: "Circuit Gilles Villeneuve",
    location: "Montreal, Canada",
  },
  {
    id: "7",
    raceName: "Italian Grand Prix",
    date: "2025-09-07",
    circuit: "Monza Circuit",
    location: "Monza, Italy",
  },
  {
    id: "8",
    raceName: "Singapore Grand Prix",
    date: "2025-09-21",
    circuit: "Marina Bay Street Circuit",
    location: "Singapore",
  },
  {
    id: "9",
    raceName: "United States Grand Prix",
    date: "2025-10-26",
    circuit: "Circuit of the Americas",
    location: "Austin, USA",
  },
  {
    id: "10",
    raceName: "Abu Dhabi Grand Prix",
    date: "2025-11-30",
    circuit: "Yas Marina Circuit",
    location: "Abu Dhabi, UAE",
  },
];

export class FixtureService {
  private cacheService: CacheService;

  constructor() {
    this.cacheService = new CacheService();
  }

  async getAllFixtures(): Promise<Fixture[]> {
    const cacheValue = await this.cacheService.get("fixtures");
    let fixtures;

    if (!cacheValue) {
      console.log("cache miss : mock data");
      fixtures = FIXTURES_MOCK_DATA;
      await this.cacheService.set("fixtures", fixtures);
    } else {
      console.log("cache hit");
      fixtures = JSON.parse(cacheValue);
    }

    return fixtures;
  }

  async getFixtureById(id: string): Promise<Fixture | undefined> {
    const cacheValue = await this.cacheService.get("fixtures");
    let fixtures: Fixture[];

    if (!cacheValue) {
      console.log("Cache miss: Using mock data");
      fixtures = FIXTURES_MOCK_DATA;
      await this.cacheService.set("fixtures", fixtures);
    } else {
      console.log("Cache hit");
      fixtures = JSON.parse(cacheValue);
    }

    return fixtures.find((fixture) => fixture.id === id);
  }
}
