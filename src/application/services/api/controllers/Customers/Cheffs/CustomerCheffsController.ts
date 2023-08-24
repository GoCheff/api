import { Response } from "express";
import { ExpressCustomTypes } from "../../../../../../@types/express";
import { CustomerCheffsControllerDTO } from "./CustomerCheffsControllerDTO";
import { GetCheffUseCaseDTO } from "../../../../../../useCases/GetCheff/GetCheffUseCaseDTO";
import { responseHandler } from "../../../handlers";
import { CustomerCheffsSchema } from "../../../../../../schemas/Customers/Cheffs";
import { GetAllCheffsUseCaseDTO } from "../../../../../../useCases/GetAllCheffs/GetAllCheffsUseCaseDTO";
import { CHEFF_FETCHED, CHEFFS_FETCHED } from "../../../../../../data/texts";

class CustomerCheffsController
  implements CustomerCheffsControllerDTO.ICustomerCheffsController
{
  constructor(
    private readonly getCheffUseCase: GetCheffUseCaseDTO.IGetCheffUseCase,
    private readonly getAllCheffsUseCase: GetAllCheffsUseCaseDTO.IGetAllCheffsUseCase
  ) {}

  public async getAll(
    req: ExpressCustomTypes.AuthenticatedRequest,
    res: Response
  ): Promise<ExpressCustomTypes.Response> {
    const source = req.query;

    const message = CHEFFS_FETCHED;
    const data = await this.getAllCheffsUseCase.execute({
      name: source.name || "",
      mainCuisine: source.mainCuisine || "",
      city: source.city || "",
      glutenFree: source.glutenFree ? Boolean(source.glutenFree) : undefined,
      lactoseFree: source.lactoseFree ? Boolean(source.lactoseFree) : undefined,
      vegan: source.vegan ? Boolean(source.vegan) : undefined,
      vegetarian: source.vegetarian ? Boolean(source.vegetarian) : undefined,
      light: source.light ? Boolean(source.light) : undefined,
      limit: source.limit ? +source.limit : undefined,
      offset: source.offset ? +source.offset : undefined
    } as CustomerCheffsSchema.GetAllDTO);
    const statusCode = 200;

    return res.status(statusCode).json(
      responseHandler({
        data,
        message,
        statusCode
      })
    );
  }

  public async get(
    req: ExpressCustomTypes.AuthenticatedRequest,
    res: Response
  ): Promise<ExpressCustomTypes.Response> {
    const { id: cheffId } = req.params;

    const message = CHEFF_FETCHED;
    const data = await this.getCheffUseCase.execute({ cheffId: +cheffId });
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

export { CustomerCheffsController };
