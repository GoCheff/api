import dotenv from "dotenv";

dotenv.config();

const environment = {
  NODE_ENV: process.env.NODE_ENV || "development",
  API_PORT: +process.env.PORT || +process.env.API_PORT || 5000,
  DOMAIN:
    process.env.DOMAIN ||
    `http://localhost:${process.env.PORT || process.env.API_PORT || 5000}`,
  DATABASE_URL: process.env.DATABASE_URL,
  JWT_SECRET_ADMIN: process.env.JWT_SECRET_ADMIN,
  JWT_SECRET_CHEF: process.env.JWT_SECRET_CHEF,
  JWT_SECRET_CUSTOMER: process.env.JWT_SECRET_CUSTOMER,
  CRYPT_SALT: +process.env.CRYPT_SALT,
  BUILD: process.env.BUILD ? process.env.BUILD === "true" : false
};

if (Object.values(environment).includes(undefined)) {
  const missingVaribles = Object.keys(environment)
    .filter((key) => environment[key] === undefined)
    .join(", ");
  console.error("Missing environment variables: " + missingVaribles);
}

for (const key in environment) {
  if (typeof environment[key] !== "string") continue;

  environment[key] = environment[key].replace(/^'(.*)'$/, "$1");
}

export { environment };
