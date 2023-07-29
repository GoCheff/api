import { Cart as _Cart } from "@prisma/client";
import { Customer } from "../Customer";
import { CartItem } from "../CartItem";

type Cart = _Cart & {
  customer?: Customer;
  cartItems?: CartItem[];
};

type CartIncludeRelations = {
  customer?: boolean;
  cartItems?:
    | boolean
    | {
        include: { foodPlate: boolean };
      }
    | {
        include: {
          foodPlate: {
            include: {
              cheff: boolean;
            };
          };
        };
      };
};

export { Cart, CartIncludeRelations };
