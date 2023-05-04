import { SignInAdminUseCaseDTO } from "./SignInAdminUseCaseDTO";
import { AdminRepositoryDTO } from "../../repositories/Users/Admin/AdminRepositoryDTO";
import { CryptProviderDTO } from "../../providers";
import { TokenProviderDTO } from "../../providers";
import { NotFoundError } from "../../errors/NotFoundError";

class SignInAdminUseCase implements SignInAdminUseCaseDTO.ISignInAdminUseCase {
  constructor(
    private readonly adminRepository: AdminRepositoryDTO.IAdminRepository,
    private readonly cryptProvider: CryptProviderDTO.ICryptProvider,
    private readonly tokenProvider: TokenProviderDTO.ITokenProvider
  ) {}

  public async execute({
    email,
    password
  }: SignInAdminUseCaseDTO.ExecuteDTO): SignInAdminUseCaseDTO.ExecuteResponseDTO {
    const admin = await this.adminRepository.findByEmail({ email });

    if (!admin) {
      throw new NotFoundError("Admin not found");
    }

    const passwordMatch = await this.cryptProvider.compare({
      data: password,
      encrypted: admin.password
    });

    if (!passwordMatch) {
      throw new NotFoundError("Admin not found");
    }

    const token = await this.tokenProvider.generate({
      id: admin.id
    });

    return {
      user: admin,
      token
    };
  }
}

export { SignInAdminUseCase };
