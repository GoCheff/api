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
    name,
    email,
    password,
    gender,
    mainCuisine,
    city,
    registerReason
  }: RequestRegistrationForCheffUseCaseDTO.ExecuteDTO): RequestRegistrationForCheffUseCaseDTO.ExecuteResponseDTO {
    const cheffAlreadyExists = await this.cheffsRepository.findByEmail({
      email
    });

    if (cheffAlreadyExists) {
      throw new UnprocessableEntityError("Cheff already exists");
    }

    await this.cheffsRepository.create({
      name,
      email,
      password,
      gender,
      mainCuisine,
      city,
      registerReason
    });
  }
}

export { RequestRegistrationForCheffUseCase };
