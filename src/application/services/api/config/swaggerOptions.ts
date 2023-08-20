import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    components: {
      schemas: {
        AdminSignInBodySchema: {
          type: "object",
          properties: {
            email: {
              type: "string",
              format: "email",
              example: "loremipsum@email.com",
              description: "User email"
            },
            password: {
              type: "string",
              format: "password",
              example: "123456",
              description: "User password"
            }
          }
        },
        Response: {
          type: "object",
          properties: {
            message: {
              type: "string"
            },
            data: {
              type: "object"
            },
            statusCode: {
              type: "number"
            },
            status: {
              type: "string"
            }
          }
        }
      }
    },
    info: {
      title: "GoCheff API",
      version: "1.0.0"
    },
    servers: [
      {
        url: "http://localhost:5000",
        description: "Local server"
      },
      {
        url: "https://www.gocheff.systems/api",
        description: "Production server"
      }
    ]
  },
  apis: ["./src/application/services/api/routes/**/*.ts"],
  schemas: ["./src/schemas/**/*.ts"]
};

const swaggerOptions = swaggerJSDoc(options);

export { swaggerOptions };
