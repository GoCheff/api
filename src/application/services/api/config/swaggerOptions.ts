import swaggerJSDoc from "swagger-jsdoc";
import { environment } from "../../../environment";

const { BUILD } = environment;

const options = {
  swaggerDefinition: {
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
        },
        AdminCheffApproveBodySchema: {
          type: "object",
          properties: {
            adminPassword: {
              type: "string",
              format: "password",
              description: "Admin password"
            }
          }
        },
        AdminCheffRefuseBodySchema: {
          type: "object",
          properties: {
            adminPassword: {
              type: "string",
              format: "password",
              description: "Admin password"
            }
          }
        },
        Cart: {
          type: "object",
          properties: {
            id: {
              type: "number",
              description: "Cart id"
            },
            customerId: {
              type: "number",
              description: "Cart customer id"
            },
            status: {
              type: "string",
              pattern:
                "^(open|sent|approved|rejected|paid|canceled|delivered)$",
              description: "Cart status"
            },
            locale: {
              type: "string",
              description: "Cart locale"
            },
            eventDate: {
              type: "string",
              format: "date-time",
              description: "Cart event date"
            },
            phoneContact: {
              type: "string",
              description: "Cart phone contact"
            },
            observation: {
              type: "string",
              description: "Cart observation"
            },
            createdAt: {
              type: "string",
              format: "date-time",
              description: "Cart creation date"
            },
            updatedAt: {
              type: "string",
              format: "date-time",
              description: "Cart update date"
            },
            deletedAt: {
              type: "string",
              format: "date-time",
              description: "Cart deletion date"
            }
          }
        },
        Cheff: {
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
            mainCuisine: {
              type: "string",
              description: "User main cuisine"
            },
            city: {
              type: "string",
              description: "User city"
            },
            registerStatus: {
              type: "string",
              pattern: "^(pending|approved|rejected)$",
              description: "User register status"
            },
            registerReason: {
              type: "string",
              description: "User register reason"
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
        CheffRequestRegistrationBodySchema: {
          type: "object",
          properties: {
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
              description: "User password"
            },
            gender: {
              type: "string",
              pattern: "^(female|male|other|preferNotToSay)$",
              description: "User gender"
            },
            mainCuisine: {
              type: "string",
              description: "User main cuisine"
            },
            city: {
              type: "string",
              description: "User city"
            },
            registerReason: {
              type: "string",
              description: "User register reason"
            }
          }
        },
        CheffSignInBodySchema: {
          type: "object",
          properties: {
            email: {
              type: "string",
              format: "email",
              description: "User email"
            },
            password: {
              type: "string",
              format: "password",
              description: "User password"
            }
          }
        },
        CheffFoodPlateCreateBodySchema: {
          type: "object",
          properties: {
            cheffId: {
              type: "number",
              description: "Cheff id"
            },
            name: {
              type: "string",
              description: "Food plate name"
            },
            description: {
              type: "string",
              description: "Food plate description"
            },
            imageUrl: {
              type: "string",
              description: "Food plate image url"
            },
            price: {
              type: "number",
              description: "Food plate price"
            },
            minServe: {
              type: "number",
              description: "Food plate min serve"
            },
            maxServe: {
              type: "number",
              description: "Food plate max serve"
            },
            cookTime: {
              type: "number",
              description: "Food plate cook time"
            }
          }
        }
      },
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT"
        }
      }
    },
    info: {
      title: "GoCheff API",
      version: "1.0.0",
      contact: {
        name: "Vinícius Gugelmin",
        email: "vinigugelmin@gmail.com"
      }
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
  apis: [BUILD ? "./**/*.js" : "./**/*.ts"]
};

const swaggerOptions = swaggerJSDoc(options);

export { swaggerOptions };
