# ABC Racing Platform

### Overview
This repo contains two main parts (kept in single repo to keep it simple):
1. **Next.js App** (`fixture-ui`): A frontend app that displays one vertical "Fixtures".
2. **Node.js App** (`fixture-service`): A backend API created with Express and BFF layer with GraphQL to provide optimized data for the frontend. The API is served at `http://localhost:4000/graphql` (GraphQL endpoint) and `http://localhost:4000/api` (RESTful endpoint).


Both app can be hosted and run locally using Docker. Docker and docker compose files are created.

---

### Prerequisites  
- **Docker**: Please ensure Docker is installed on your machine else you need to manually run the npm scripts.  
- **Node.js**: Required to run the API and Next.js app (if not using Docker).  
- **Redis (Cloud)**: Cloud Redis instance is used for caching, credentials are checked with env file for now.  
- **MongoDB**: Not implemented yet.
---

### To run locally
1. **Clone the repository**:
   ```bash
   git clone git@github.com:ajaynarang/abc-racing-platform.git
   cd abc-racing-platform
   ```

2. **Run Docker Compose**:
   In the parent folder (`abc-racing-platform`), run the following command to build and start:
   ```bash
   docker compose up --build
   ```
   This should:
   - Build the Docker images.
   - Start the UI app on `http://localhost:3000`.
   - Start the APIs with Express and GraphQL on `http://localhost:4000` and `http://localhost:4000/graphql`.

---

### Project Structure

- **`abc-racing-platform`**
  - `docker-compose.yml`: The Docker Compose file for running the services.
  - `diagrams`: This folder contains all the architecture diagrams.
  - `github wiki`: Documentation files for architecture and other details are stored here.
  - `fixture-ui/` (Next.js frontend): Hosts the Next.js app for displaying fixtures.
  - `fixture-service/` (Node.js backend with Express and GraphQL layer): Contains the API and GraphQL BFF layer for optimized reads.

---

### API Endpoints

- **GraphQL**: `http://localhost:4000/graphql`
- **REST API**: `http://localhost:4000/api`

---

### Environment Variables

Currently, the .env files are checked in with the code for simplicity in connecting with Redis cloud, but ideally, it should come from environment variables for security.


### UX/UI

The focus is on showing the end-to-end vertical flow for the fixtures. The design and user interface are minimal for now

---
