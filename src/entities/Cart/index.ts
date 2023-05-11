import { Cart as _Cart } from "@prisma/client";
import { Customer } from "../Customer";
import { CartItem } from "../CartItem";

type Cart = _Cart & {
  customer?: Customer;
  cartItems?: CartItem[];
};

type CartIndludeRelations = {
  customer?: boolean;
  cartItems?: boolean;
};

export { Cart, CartIndludeRelations };
