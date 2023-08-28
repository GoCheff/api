import { Response } from "express";
import { ExpressCustomTypes } from "../../../../../../@types/express";
import { CheffFoodPlatesControllerDTO } from "./CheffFoodPlatesControllerDTO";
import { CreateCheffFoodPlateUseCaseDTO } from "../../../../../../useCases/CreateCheffFoodPlate/CreateCheffFoodPlateUseCaseDTO";
import { responseHandler } from "../../../handlers";
import { CheffFoodPlatesSchema } from "../../../../../../schemas/Cheffs";
import {
  CREATED_FOOD_PLATE,
  FOOD_PLATES_FETCHED
} from "../../../../../../data/texts";
import { GetCheffUseCaseDTO } from "../../../../../../useCases/GetCheff/GetCheffUseCaseDTO";

class CheffFoodPlatesController
  implements CheffFoodPlatesControllerDTO.ICheffFoodPlatesController
{
  constructor(
    private readonly getCheffUseCase: GetCheffUseCaseDTO.IGetCheffUseCase,
    private readonly createCheffFoodPlateUseCase: CreateCheffFoodPlateUseCaseDTO.ICreateCheffFoodPlateUseCase
  ) {}

  public async get(
    req: ExpressCustomTypes.AuthenticatedRequest,
    res: Response
  ): Promise<ExpressCustomTypes.Response> {
    const { id: cheffId } = req.user;

    const message = FOOD_PLATES_FETCHED;
    const { foodPlates } = await this.getCheffUseCase.execute({
      cheffId
    } as GetCheffUseCaseDTO.ExecuteDTO);
    const statusCode = 200;

    return res
      .status(statusCode)
      .json(responseHandler({ data: foodPlates, statusCode, message }));
  }

  public async create(
    req: ExpressCustomTypes.AuthenticatedRequest,
    res: Response
  ): Promise<ExpressCustomTypes.Response> {
    const { id: cheffId } = req.user;
    const source = req.body;

    const message = CREATED_FOOD_PLATE;
    await this.createCheffFoodPlateUseCase.execute({
      cheffId,
      name: source.name,
      description: source.description,
      imageUrl: source.imageUrl,
      price: parseFloat(source.price),
      minServe: +source.minServe,
      maxServe: +source.maxServe,
      cookTime: parseFloat(source.cookTime),
      glutenFree: source.glutenFree ? Boolean(source.glutenFree) : false,
      lactoseFree: source.lactoseFree ? Boolean(source.lactoseFree) : false,
      vegan: source.vegan ? Boolean(source.vegan) : false,
      vegetarian: source.vegetarian ? Boolean(source.vegetarian) : false,
      light: source.light ? Boolean(source.light) : false
    } as CheffFoodPlatesSchema.CreateDTO);
    const statusCode = 201;

    return res
      .status(statusCode)
      .json(responseHandler({ message, statusCode }));
  }
}

export { CheffFoodPlatesController };
