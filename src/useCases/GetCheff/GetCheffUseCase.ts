import { GetCheffUseCaseDTO } from "./GetCheffUseCaseDTO";
import { CheffsRepositoryDTO } from "../../repositories/Users/Cheffs/CheffsRepositoryDTO";
import { NotFoundError } from "../../errors/NotFoundError";

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
      throw new NotFoundError("Cheff not found");
    }

    return cheff;
  }
}

export { GetCheffUseCase };
