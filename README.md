# FHIR API Implementation (R5)

This is a FHIR R5 compliant API built with Express, TypeScript, and Mongoose.

## Getting Started

### 1. Prerequisites
- Docker & Docker Compose
- Node.js (v18+)

### 2. Database (Docker)
Since you are on Windows ARM, running MongoDB via Docker is the best way.

```bash
docker-compose up -d
```

### 3. Install dependencies
```bash
npm install
```

### 4. Run the API
```bash
npm run dev
```

The API will be available at `http://localhost:3000`.
Swagger docs: `http://localhost:3000/api-docs`