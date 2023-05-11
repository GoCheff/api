import { CartItemsRepositoryDTO } from "./CartItemsRepositoryDTO";
import { DatabaseDTO } from "../../application/services/database/Database/DatabaseDTO";

class CartItemsRepository
  implements CartItemsRepositoryDTO.ICartItemsRepository
{
  private readonly cartItems = this.database.db.cartItem;

  constructor(private database: DatabaseDTO.IDatabase) {}

  public async updateQuantity({
    id,
    quantity
  }: CartItemsRepositoryDTO.UpdateQuantityDTO): CartItemsRepositoryDTO.UpdateQuantityResponseDTO {
    return this.cartItems.update({
      where: { id },
      data: { quantity }
    });
  }

  public async create(
    data: CartItemsRepositoryDTO.CreateDTO
  ): CartItemsRepositoryDTO.CreateResponseDTO {
    return this.cartItems.create({
      data
    });
  }
}

export { CartItemsRepository };
