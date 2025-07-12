    import express, { Application, Request, Response } from 'express';
    import swaggerJsDoc from 'swagger-jsdoc';
    import swaggerUi from 'swagger-ui-express';

    const app: Application = express();
    const port: number = 3000;

    const swaggerOptions = {
      swaggerDefinition: {
        openapi: '3.0.0',
        info: {
          title: 'Patient API',
          version: '1.0.0',
          description: 'API documentation for the Patient API',
        },
      },
      apis: ['./src/routes/*.ts'], // Path to the API docs
    };
    const swaggerDocs = swaggerJsDoc(swaggerOptions);
    app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
    // Middleware to parse JSON requests
    app.use(express.json());

    // Middleware to parse URL-encoded requests
    app.use(express.urlencoded({ extended: true }));

    // Example route
    app.get('/', (req: Request, res: Response) => {
      res.send('Hello from Express with TypeScript!');
    });

    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });