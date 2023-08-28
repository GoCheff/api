import { GetCheffUseCaseDTO } from "./GetCheffUseCaseDTO";
import { CheffsRepositoryDTO } from "../../repositories/Users/Cheffs/CheffsRepositoryDTO";
import { NotFoundError } from "../../errors/NotFoundError";
import { CHEFF_NOT_FOUND } from "../../data/texts";

class GetCheffUseCase implements GetCheffUseCaseDTO.IGetCheffUseCase {
  constructor(
    private readonly cheffsRepository: CheffsRepositoryDTO.ICheffsRepository
  ) {}

  public async execute({
    cheffId
  }: GetCheffUseCaseDTO.ExecuteDTO): GetCheffUseCaseDTO.ExecuteResponseDTO {
    const cheff = await this.cheffsRepository.findById({
      id: cheffId,
      include: {
        foodPlates: true
      }
    });

    if (!cheff || cheff.registerStatus !== "approved") {
      throw new NotFoundError(CHEFF_NOT_FOUND);
    }

    return cheff;
  }
}

export { GetCheffUseCase };
