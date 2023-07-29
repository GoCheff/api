import { AddCheffFoodPlateToCartUseCaseDTO } from "./AddCheffFoodPlateToCartUseCaseDTO";
import { CartsRepositoryDTO } from "../../repositories/Carts/CartsRepositoryDTO";
import { AppError } from "../../errors/AppError";
import { FoodPlatesRepositoryDTO } from "../../repositories/FoodPlates/FoodPlatesRepositoryDTO";
import { CartItemsRepositoryDTO } from "../../repositories/CartItems/CartItemsRepositoryDTO";
import { NotFoundError } from "../../errors/NotFoundError";

class AddCheffFoodPlateToCartUseCase
  implements AddCheffFoodPlateToCartUseCaseDTO.IAddCheffFoodPlateToCartUseCase
{
  constructor(
    private readonly cartsRepository: CartsRepositoryDTO.ICartsRepository,
    private readonly foodPlatesRepository: FoodPlatesRepositoryDTO.IFoodPlatesRepository,
    private readonly cartItemsRepository: CartItemsRepositoryDTO.ICartItemsRepository
  ) {}

  public async execute({
    customerId,
    cheffId,
    foodPlateId,
    quantity
  }: AddCheffFoodPlateToCartUseCaseDTO.ExecuteDTO): AddCheffFoodPlateToCartUseCaseDTO.ExecuteResponseDTO {
    // check if customer has a cart open
    const cart = await this.cartsRepository.findByCustomerId({
      customerId: customerId,
      where: { status: "open" },
      include: {
        cartItems: {
          include: {
            foodPlate: true
          }
        }
      }
    });

    // if yes, check if has an cart item with other cheff-food-plate
    const hasCartItemFromOtherCheff =
      cart &&
      cart.cartItems.some((cartItem) => cartItem.foodPlate.cheffId !== cheffId);
    // if yes, throw an error
    if (hasCartItemFromOtherCheff) {
      throw new AppError("You can't add food plates from other cheffs");
    }

    // check if cheff-food-plate exists
    const foodPlate = await this.foodPlatesRepository.findByIdAndCheffId({
      id: foodPlateId,
      cheffId: cheffId
    });
    // if not, throw an error
    if (!foodPlate) {
      throw new NotFoundError("Food plate not found");
    }

    // if customer has no cart open, create a new cart with the cheff-food-plate
    if (!cart) {
      return await this.cartsRepository.create({
        customerId: customerId,
        cartItems: [
          {
            foodPlateId: foodPlateId,
            quantity: quantity
          }
        ]
      });
    }
    // if customer has a cart open, check if has an cart item with the cheff-food-plate
    const hasCartItem = cart.cartItems.find(
      (cartItem) => cartItem.foodPlateId === foodPlateId
    );
    // if yes, update the quantity
    if (hasCartItem) {
      await this.cartItemsRepository.updateQuantity({
        id: hasCartItem.id,
        quantity
      });

      return {
        ...cart,
        cartItems: cart.cartItems.map((cartItem) => {
          if (cartItem.id === hasCartItem.id) {
            return {
              ...cartItem,
              quantity
            };
          }

          return cartItem;
        })
      };
    }
    // if not, create a new cart item with the cheff-food-plate
    const cartItem = await this.cartItemsRepository.create({
      cartId: cart.id,
      foodPlateId: foodPlateId,
      quantity
    });
    // return the cart
    return {
      ...cart,
      cartItems: [...cart.cartItems, cartItem]
    };
  }
}

export { AddCheffFoodPlateToCartUseCase };
