import { Cheff, FoodPlate, PrismaClient } from "@prisma/client";
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

    await prisma.admin.create({
      data: {
        name: "Admin",
        email: "admin@email.com",
        password,
        gender: "preferNotToSay"
      }
    });

    console.log("Admin created...");
  };

  const cheffSeed = async () => {
    const cheffs = await prisma.cheff.findMany();

    if (cheffs.length > 0) return;

    const password = await cryptProvider.crypt(ADMIN_PASSWORD);

    const createdCheffs: Cheff[] = [
      {
        name: "Alberto de Souza Almeida",
        email: "albertodesouzaalmeida@gmail.com",
        password,
        gender: "male",
        mainCuisine: "Brasileira",
        city: "São Paulo",
        registerStatus: "approved",
        registerReason: "Eu sou o dono de restaurante Michelin 3 estrelas"
      } as Cheff,
      {
        name: "Maria de Souza Almeida",
        email: "mariadesouzaalmeida@gmail.com",
        password,
        gender: "female",
        mainCuisine: "Italiana",
        city: "Rio de Janeiro",
        registerStatus: "approved",
        registerReason: "Eu sou sócia do restaurante Michelin 3 estrelas"
      } as Cheff,
      {
        name: "João Antônio",
        email: "joaoantonio@gmail.com",
        password,
        gender: "male",
        mainCuisine: "Japonesa",
        city: "Curitiba",
        registerStatus: "approved",
        registerReason: "Eu sou chefe renomado no Japão"
      } as Cheff,
      {
        name: "Maria Antônia",
        email: "mariaantonia@gmail.com",
        password,
        gender: "preferNotToSay",
        mainCuisine: "Brasileira",
        city: "Belém",
        registerStatus: "pending",
        registerReason: "Eu sou chefe renomada no Brasil"
      } as Cheff
    ];

    for (const cheff of createdCheffs) {
      await prisma.cheff.create({
        data: cheff
      });
    }

    console.log("Cheffs created...");
  };

  const foodPlateSeed = async () => {
    const foodPlates = await prisma.foodPlate.findMany();

    if (foodPlates.length > 0) return;

    const createdFoodPlates = [
      {
        name: "Feijoada",
        description: "Feijoada completa com arroz, farofa, couve e laranja",
        imageUrl:
          "https://acarnequeomundoprefere.com.br/uploads/media/image/frimesa-receitas-eisbein-1.jpg",
        price: 50,
        minServe: 2,
        maxServe: 4,
        cookTime: 60,
        glutenFree: false,
        lactoseFree: true,
        vegan: false,
        vegetarian: false,
        light: false
      } as FoodPlate,
      {
        name: "Macarronada",
        description: "Macarronada com molho de tomate e carne moída",
        imageUrl:
          "https://www.sabornamesa.com.br/media/k2/items/cache/b5b56b2ae93d3dc958cf0c21c9383b18_XL.jpg",
        price: 30,
        minServe: 2,
        maxServe: 4,
        cookTime: 30,
        glutenFree: false,
        lactoseFree: true,
        vegan: false,
        vegetarian: false,
        light: false
      } as FoodPlate,
      {
        name: "Sushi",
        description: "Sushi de salmão",
        imageUrl:
          "https://static.itdg.com.br/images/360-240/7645d7826950619548223e662be8b7bb/303187-original.jpg",
        price: 100,
        minServe: 2,
        maxServe: 4,
        cookTime: 30,
        glutenFree: false,
        lactoseFree: true,
        vegan: false,
        vegetarian: false,
        light: false
      } as FoodPlate,
      {
        name: "Salada ceasar",
        description: "Salada ceasar",
        imageUrl:
          "https://p2.trrsf.com/image/fget/cf/1200/900/middle/images.terra.com/2023/02/28/whatsapp-image-2023-02-28-at-01-53-47-(1)-1iyhprrq5e9tc.jpeg",
        price: 20,
        minServe: 1,
        maxServe: 2,
        cookTime: 10,
        glutenFree: true,
        lactoseFree: true,
        vegan: false,
        vegetarian: true,
        light: true
      } as FoodPlate
    ];

    const cheffs = await prisma.cheff.findMany();

    let i = 0;

    for (const foodPlate of createdFoodPlates) {
      await prisma.foodPlate.create({
        data: {
          ...foodPlate,
          cheffId: cheffs[i].id
        }
      });

      i++;
    }

    console.log("FoodPlates created...");
  };

  await adminSeed();
  await cheffSeed();
  await foodPlateSeed();
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
