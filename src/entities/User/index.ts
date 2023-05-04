import { Admin, Customer } from "@prisma/client";

type User = Admin | Customer;

export { User };
