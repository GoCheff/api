import { Response } from "express";
import { ExpressCustomTypes } from "../../../../../../@types/express";
import { CustomerCartItemsControllerDTO } from "./CustomerCartItemsControllerDTO";
import { AddCheffFoodPlateToCartUseCaseDTO } from "../../../../../../useCases/AddCheffFoodPlateToCart/AddCheffFoodPlateToCartUseCaseDTO";
import { responseHandler } from "../../../handlers";
import { CustomerCartItemsSchema } from "../../../../../../schemas/Customers";
import { UPDATED_CART } from "../../../../../../data/texts";

class CustomerCartItemsController
  implements CustomerCartItemsControllerDTO.ICustomerCartItemsController
{
  constructor(
    private readonly addCheffFoodPlateToCartUseCase: AddCheffFoodPlateToCartUseCaseDTO.IAddCheffFoodPlateToCartUseCase
  ) {}

  public async updateOrCreate(
    req: ExpressCustomTypes.AuthenticatedRequest,
    res: Response
  ): Promise<ExpressCustomTypes.Response> {
    const source = {
      customerId: req.user.id,
      locale: req.body.locale,
      eventDate: new Date(req.body.eventDate),
      phoneContact: req.body.phoneContact,
      observation: req.body.observation,
      cheffId: +req.body.cheffId,
      foodPlateId: +req.params.id,
      quantity: +req.body.quantity
    };

    const message = UPDATED_CART;
    const data = await this.addCheffFoodPlateToCartUseCase.execute(
      source as CustomerCartItemsSchema.UpdateOrCreateDTO
    );
    const statusCode = 200;

    return res.status(statusCode).json(
      responseHandler({
        data,
        message,
        statusCode
      })
    );
  }
}

export { CustomerCartItemsController };
