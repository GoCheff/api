import { CartsRepositoryDTO } from "./CartsRepositoryDTO";
import { DatabaseDTO } from "../../application/services/database/Database/DatabaseDTO";

class CartsRepository implements CartsRepositoryDTO.ICartsRepository {
  private readonly carts = this.database.db.cart;

  constructor(private database: DatabaseDTO.IDatabase) {}

  public async findById({
    id,
    include = {}
  }: CartsRepositoryDTO.FindByIdDTO): CartsRepositoryDTO.FindByIdResponseDTO {
    return (
      this.carts.findFirst({
        where: { id, deletedAt: null },
        include
      }) || null
    );
  }

  public async findAllByCustomerId({
    customerId,
    include = {},
    where = {}
  }: CartsRepositoryDTO.FindAllByCustomerIdDTO): CartsRepositoryDTO.FindAllByCustomerIdResponseDTO {
    return (
      this.carts.findMany({
        where: { customerId, deletedAt: null, ...where },
        include
      }) || null
    );
  }

  public async findByCustomerId({
    customerId,
    include = {},
    where = {}
  }: CartsRepositoryDTO.FindByCustomerIdDTO): CartsRepositoryDTO.FindByCustomerIdResponseDTO {
    return (
      this.carts.findFirst({
        where: { customerId, deletedAt: null, ...where },
        include
      }) || null
    );
  }

  public async findByStatusAndCheffId({
    status,
    cheffId
  }: CartsRepositoryDTO.FindByStatusAndCheffIdDTO): CartsRepositoryDTO.FindByStatusAndCheffIdResponseDTO {
    return this.carts.findMany({
      include: {
        cartItems: {
          include: {
            foodPlate: true
          }
        }
      },
      where: {
        status,
        deletedAt: null,
        cartItems: {
          some: {
            foodPlate: {
              cheffId
            }
          }
        }
      }
    });
  }

  public async findByCheffId({
    cheffId
  }: CartsRepositoryDTO.FindByCheffIdDTO): CartsRepositoryDTO.FindByCheffIdResponseDTO {
    return this.carts.findMany({
      where: {
        deletedAt: null,
        cartItems: {
          some: {
            foodPlate: {
              cheffId
            }
          }
        }
      }
    });
  }

  public async create({
    customerId,
    locale,
    eventDate,
    phoneContact,
    observation,
    cartItems,
    include = {}
  }: CartsRepositoryDTO.CreateDTO): CartsRepositoryDTO.CreateResponseDTO {
    return this.carts.create({
      include,
      data: {
        customerId,
        locale,
        eventDate,
        phoneContact,
        observation,
        cartItems: {
          create: cartItems
        }
      }
    });
  }

  public async update({
    id,
    status
  }: CartsRepositoryDTO.UpdateDTO): CartsRepositoryDTO.UpdateResponseDTO {
    return this.carts.update({
      where: { id },
      data: {
        status
      }
    });
  }
}

export { CartsRepository };
