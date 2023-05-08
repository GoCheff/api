import { RequestRegistrationForCheffUseCaseDTO } from "./RequestRegistrationForCheffUseCaseDTO";
import { CheffsRepositoryDTO } from "../../repositories/Users/Cheffs/CheffsRepositoryDTO";
import { UnauthorizedError } from "../../errors/UnauthorizedError";

class RequestRegistrationForCheffUseCase
  implements
    RequestRegistrationForCheffUseCaseDTO.IRequestRegistrationForCheffUseCase
{
  constructor(
    private readonly cheffsRepository: CheffsRepositoryDTO.ICheffsRepository
  ) {}

  public async execute({
    email,
    password,
    registerReason
  }: RequestRegistrationForCheffUseCaseDTO.ExecuteDTO): RequestRegistrationForCheffUseCaseDTO.ExecuteResponseDTO {
    const cheffAlreadyExists = await this.cheffsRepository.findByEmail({
      email
    });

    if (cheffAlreadyExists) {
      throw new UnauthorizedError("Cheff already exists");
    }

    await this.cheffsRepository.create({
      email,
      password,
      registerReason
    });
  }
}

export { RequestRegistrationForCheffUseCase };
