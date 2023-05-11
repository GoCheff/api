import { CartsRepositoryDTO } from "./CartsRepositoryDTO";
import { DatabaseDTO } from "../../application/services/database/Database/DatabaseDTO";

class CartsRepository implements CartsRepositoryDTO.ICartsRepository {
  private readonly carts = this.database.db.cart;

  constructor(private database: DatabaseDTO.IDatabase) {}

  public async findByCustomerId({
    customerId,
    include = {}
  }: CartsRepositoryDTO.FindByCustomerIdDTO): CartsRepositoryDTO.FindByCustomerIdResponseDTO {
    return (
      this.carts.findFirst({
        where: { customerId, deletedAt: null },
        include
      }) || null
    );
  }

  public async create({
    customerId,
    cartItems,
    include = {}
  }: CartsRepositoryDTO.CreateDTO): CartsRepositoryDTO.CreateResponseDTO {
    return this.carts.create({
      include,
      data: {
        customerId,
        cartItems: {
          create: cartItems
        }
      }
    });
  }
}

export { CartsRepository };
