import { SignInCustomerUseCaseDTO } from "./SignInCustomerUseCaseDTO";
import { CustomersRepositoryDTO } from "../../repositories/Users/Customers/CustomersRepositoryDTO";
import { CryptProviderDTO } from "../../providers";
import { TokenProviderDTO } from "../../providers";
import { NotFoundError } from "../../errors/NotFoundError";

class SignInCustomerUseCase
  implements SignInCustomerUseCaseDTO.ISignInCustomerUseCase
{
  constructor(
    private readonly customersRepository: CustomersRepositoryDTO.ICustomersRepository,
    private readonly cryptProvider: CryptProviderDTO.ICryptProvider,
    private readonly tokenProvider: TokenProviderDTO.ITokenProvider
  ) {}

  public async execute({
    email,
    password
  }: SignInCustomerUseCaseDTO.ExecuteDTO): SignInCustomerUseCaseDTO.ExecuteResponseDTO {
    const customer = await this.customersRepository.findByEmail({ email });

    if (!customer) {
      throw new NotFoundError("User not found");
    }

    const passwordMatch = await this.cryptProvider.compare({
      data: password,
      encrypted: customer.password
    });

    if (!passwordMatch) {
      throw new NotFoundError("User not found");
    }

    const token = await this.tokenProvider.generate({
      id: customer.id
    });

    return {
      user: customer,
      token
    };
  }
}

export { SignInCustomerUseCase };
