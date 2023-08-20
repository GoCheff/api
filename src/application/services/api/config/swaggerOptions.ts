import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    components: {
      schemas: {
        Admin: {
          type: "object",
          properties: {
            id: {
              type: "number",
              description: "User id"
            },
            name: {
              type: "string",
              description: "User name"
            },
            email: {
              type: "string",
              format: "email",
              description: "User email"
            },
            password: {
              type: "string",
              format: "password",
              description: "User hashed password"
            },
            gender: {
              type: "string",
              pattern: "^(female|male|other|preferNotToSay)$",
              description: "User gender"
            },
            createdAt: {
              type: "string",
              format: "date-time",
              description: "User creation date"
            },
            updatedAt: {
              type: "string",
              format: "date-time",
              description: "User update date"
            },
            deletedAt: {
              type: "string",
              format: "date-time",
              description: "User deletion date"
            }
          }
        },
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
