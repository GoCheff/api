import { ConfirmRegistrationForCheffUseCaseDTO } from "./ConfirmRegistrationForCheffUseCaseDTO";
import { AdminRepositoryDTO } from "../../repositories/Users/Admin/AdminRepositoryDTO";
import { CheffsRepositoryDTO } from "../../repositories/Users/Cheffs/CheffsRepositoryDTO";
import { NotFoundError } from "../../errors/NotFoundError";
import { CryptProviderDTO } from "../../providers";
import { UnprocessableEntityError } from "../../errors/UnprocessableEntityError";

class ConfirmRegistrationForCheffUseCase
  implements
    ConfirmRegistrationForCheffUseCaseDTO.IConfirmRegistrationForCheffUseCase
{
  constructor(
    private readonly adminRepository: AdminRepositoryDTO.IAdminRepository,
    private readonly cheffsRepository: CheffsRepositoryDTO.ICheffsRepository,
    private readonly cryptProvider: CryptProviderDTO.ICryptProvider
  ) {}

  public async execute({
    id,
    adminEmail,
    adminPassword
  }: ConfirmRegistrationForCheffUseCaseDTO.ExecuteDTO): ConfirmRegistrationForCheffUseCaseDTO.ExecuteResponseDTO {
    const admin = await this.adminRepository.findByEmail({
      email: adminEmail
    });

    if (!admin) {
      throw new NotFoundError("Admin not found");
    }

    const passwordMatch = await this.cryptProvider.compare({
      data: adminPassword,
      encrypted: admin.password
    });

    if (!passwordMatch) {
      throw new UnprocessableEntityError("Invalid password");
    }

    const cheffExists = await this.cheffsRepository.findById({ id });

    if (!cheffExists) {
      throw new NotFoundError("Cheff not found");
    }

    if (cheffExists.registerStatus === "approved") {
      throw new UnprocessableEntityError("Cheff already approved");
    }

    if (cheffExists.registerStatus === "rejected") {
      throw new UnprocessableEntityError("Cheff already rejected");
    }

    await this.cheffsRepository.updateStatus({
      id,
      registerStatus: "approved"
    });
  }
}

export { ConfirmRegistrationForCheffUseCase };
