import { RequestRegistrationForCheffUseCaseDTO } from "./RequestRegistrationForCheffUseCaseDTO";
import { CheffsRepositoryDTO } from "../../repositories/Users/Cheffs/CheffsRepositoryDTO";
import { UnprocessableEntityError } from "../../errors/UnprocessableEntityError";
import { CryptProviderDTO } from "../../providers";
import { CHEFF_ALREADY_EXISTS } from "../../data/texts";

class RequestRegistrationForCheffUseCase
  implements
    RequestRegistrationForCheffUseCaseDTO.IRequestRegistrationForCheffUseCase
{
  constructor(
    private readonly cheffsRepository: CheffsRepositoryDTO.ICheffsRepository,
    private readonly cryptProvider: CryptProviderDTO.ICryptProvider
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
      throw new UnprocessableEntityError(CHEFF_ALREADY_EXISTS);
    }

    const passwordHash = await this.cryptProvider.crypt(password);

    await this.cheffsRepository.create({
      name,
      email,
      password: passwordHash,
      gender,
      mainCuisine,
      city,
      registerReason
    });
  }
}

export { RequestRegistrationForCheffUseCase };
