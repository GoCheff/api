import { SignInCheffUseCaseDTO } from "./SignInCheffUseCaseDTO";
import { CryptProviderDTO, TokenProviderDTO } from "../../providers";
import { NotFoundError } from "../../errors/NotFoundError";
import { CheffsRepositoryDTO } from "../../repositories/Users/Cheffs/CheffsRepositoryDTO";

class SignInCheffUseCase implements SignInCheffUseCaseDTO.ISignInCheffUseCase {
  constructor(
    private readonly cheffsRepository: CheffsRepositoryDTO.ICheffsRepository,
    private readonly cryptProvider: CryptProviderDTO.ICryptProvider,
    private readonly tokenProvider: TokenProviderDTO.ITokenProvider
  ) {}

  public async execute({
    email,
    password
  }: SignInCheffUseCaseDTO.ExecuteDTO): SignInCheffUseCaseDTO.ExecuteResponseDTO {
    const cheff = await this.cheffsRepository.findByEmail({ email });

    if (!cheff) {
      throw new NotFoundError("Cheff not found");
    }

    const passwordMatch = await this.cryptProvider.compare({
      data: password,
      encrypted: cheff.password
    });

    if (!passwordMatch) {
      throw new NotFoundError("Cheff not found");
    }

    const token = await this.tokenProvider.generate({
      id: cheff.id
    });

    return {
      user: cheff,
      token
    };
  }
}

export { SignInCheffUseCase };
