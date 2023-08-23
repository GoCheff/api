import { PrismaClient } from "@prisma/client";
import { environment } from "../src/application/environment";
import { cryptProvider } from "../src/providers";

const { ADMIN_PASSWORD } = environment;

const prisma = new PrismaClient();

async function runSeeds() {
  await prisma.$connect();
  await devSeed();
  await prodSeed();
}

async function devSeed(): Promise<void> {
  if (process.env.NODE_ENV !== "development") return;

  const adminSeed = async () => {
    const users = await prisma.admin.findMany();

    if (users.length > 0) return;

    const password = await cryptProvider.crypt(ADMIN_PASSWORD);

    const createdUsers = await prisma.admin.create({
      data: {
        name: "Admin",
        email: "admin@email.com",
        password,
        gender: "preferNotToSay"
      }
    });

    console.log("Admin created...");
    console.log(createdUsers);
  };

  await adminSeed();
}

async function prodSeed(): Promise<void> {
  if (process.env.NODE_ENV !== "production") return;

  const adminSeed = async () => {
    const users = await prisma.admin.findMany();

    if (users.length > 0) return;

    const password = await cryptProvider.crypt(ADMIN_PASSWORD);

    const createdUsers = await prisma.admin.create({
      data: {
        name: "Admin",
        email: "admin@email.com",
        password,
        gender: "preferNotToSay"
      }
    });

    console.log("Admin created...");
    console.log(createdUsers);
  };

  await adminSeed();
}

export { runSeeds };
