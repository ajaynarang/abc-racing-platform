import Redis from "ioredis";

console.log(`Hello Node.js v${process.versions.node}!`);

const fixtures = [
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

const redis = new Redis({
  host: "redis-17042.crce182.ap-south-1-1.ec2.redns.redis-cloud.com",
  port: 17042,
  password: "n0RaBzIGIze3O2WjndrsiLaVklvV8uFm",
  db: 0,
});

async function setData() {
  try {
    // Serialize fixtures array before storing
    await redis.set("fixtures", JSON.stringify(fixtures));
    console.log("Data set successfully.");

    // Retrieve the value and deserialize it
    const value = await redis.get("fixtures");
    const parsedValue = JSON.parse(value);
    console.log("Fetched value:", parsedValue);
  } catch (err) {
    console.error("Error connecting to Redis:", err);
  } finally {
    redis.disconnect();
  }
}

setData();
