import { ConfirmRegistrationForCheffUseCaseDTO } from "./ConfirmRegistrationForCheffUseCaseDTO";
import { AdminRepositoryDTO } from "../../repositories/Users/Admin/AdminRepositoryDTO";
import { CheffsRepositoryDTO } from "../../repositories/Users/Cheffs/CheffsRepositoryDTO";
import { NotFoundError } from "../../errors/NotFoundError";
import { CryptProviderDTO } from "../../providers";
import { UnprocessableEntityError } from "../../errors/UnprocessableEntityError";
import {
  CHEFF_ALREADY_APPROVED,
  CHEFF_ALREADY_REFUSED,
  CHEFF_NOT_FOUND
} from "../../data/texts";

class ConfirmRegistrationForCheffUseCase
  implements
    ConfirmRegistrationForCheffUseCaseDTO.IConfirmRegistrationForCheffUseCase
{
  constructor(
    private readonly cheffsRepository: CheffsRepositoryDTO.ICheffsRepository
  ) {}

  public async execute({
    id
  }: ConfirmRegistrationForCheffUseCaseDTO.ExecuteDTO): ConfirmRegistrationForCheffUseCaseDTO.ExecuteResponseDTO {
    const cheffExists = await this.cheffsRepository.findById({ id });

    if (!cheffExists) {
      throw new NotFoundError(CHEFF_NOT_FOUND);
    }

    if (cheffExists.registerStatus === "approved") {
      throw new UnprocessableEntityError(CHEFF_ALREADY_APPROVED);
    }

    if (cheffExists.registerStatus === "rejected") {
      throw new UnprocessableEntityError(CHEFF_ALREADY_REFUSED);
    }

    await this.cheffsRepository.updateStatus({
      id,
      registerStatus: "approved"
    });
  }
}

export { ConfirmRegistrationForCheffUseCase };
