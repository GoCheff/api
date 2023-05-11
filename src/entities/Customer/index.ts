import { Customer as _Customer } from "@prisma/client";
import { Cart } from "../Cart";

type Customer = _Customer & {
  carts?: Cart[];
};

type CustomerIndludeRelations = {
  carts?: boolean;
};

export { Customer, CustomerIndludeRelations };
