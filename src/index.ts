import express, { Application, Request, Response } from "express";
import connectToMongo from "./mongoose-connection";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import patientRoutes from "./routes/patient.route";

const app: Application = express();
const port: number = 3000;

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "FHIR API",
      version: "1.0.0",
      description: "API documentation for the FHIR API",
    },
  },
  host: `http://localhost:${port}`,
  basePath: "/",
  apis: ["./src/docs/*.yaml"], // Path to the API docs
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
// Middleware to parse JSON requests
app.use(express.json());

// Middleware to parse URL-encoded requests
app.use(express.urlencoded({ extended: true }));

// Import routes
app.use("/patients", patientRoutes);

connectToMongo().then(() => {
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
});
