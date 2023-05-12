import { RequestRegistrationForCheffUseCaseDTO } from "./RequestRegistrationForCheffUseCaseDTO";
import { CheffsRepositoryDTO } from "../../repositories/Users/Cheffs/CheffsRepositoryDTO";
import { UnprocessableEntityError } from "../../errors/UnprocessableEntityError";

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
      throw new UnprocessableEntityError("Cheff already exists");
    }

    await this.cheffsRepository.create({
      email,
      password,
      registerReason
    });
  }
}

export { RequestRegistrationForCheffUseCase };
