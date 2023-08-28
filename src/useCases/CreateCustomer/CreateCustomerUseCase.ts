import { CreateCustomerUseCaseDTO } from "./CreateCustomerUseCaseDTO";
import { CustomersRepositoryDTO } from "../../repositories/Users/Customers/CustomersRepositoryDTO";
import { CryptProviderDTO } from "../../providers";
import { UnprocessableEntityError } from "../../errors/UnprocessableEntityError";
import { EMAIL_ALREADY_IN_USE } from "../../data/texts";

class CreateCustomerUseCase
  implements CreateCustomerUseCaseDTO.ICreateCustomerUseCase
{
  constructor(
    private readonly customersRepository: CustomersRepositoryDTO.ICustomersRepository,
    private readonly cryptProvider: CryptProviderDTO.ICryptProvider
  ) {}

  public async execute({
    name,
    email,
    password,
    gender
  }: CreateCustomerUseCaseDTO.ExecuteDTO): CreateCustomerUseCaseDTO.ExecuteResponseDTO {
    const customerAlreadyExists = await this.customersRepository.findByEmail({
      email
    });

    if (customerAlreadyExists) {
      throw new UnprocessableEntityError(EMAIL_ALREADY_IN_USE);
    }

    const passwordHash = await this.cryptProvider.crypt(password);
    const customer = {
      name,
      email,
      password: passwordHash,
      gender
    };

    return this.customersRepository.create(customer);
  }
}

export { CreateCustomerUseCase };
